import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
  UploadTaskSnapshot,
  StorageReference,
} from 'firebase/storage';
import { storage } from './firebaseConfig';

export interface UploadProgress {
  bytesTransferred: number;
  totalBytes: number;
  progress: number;
}

export interface UploadResult {
  downloadURL: string;
  fullPath: string;
  name: string;
  size: number;
  contentType?: string;
}

/**
 * Upload a file to Firebase Storage
 * @param file The file to upload
 * @param path The storage path (e.g., 'images/products/')
 * @param onProgress Optional progress callback
 * @returns Promise<UploadResult>
 */
export async function uploadFile(
  file: File,
  path: string,
  onProgress?: (progress: UploadProgress) => void
): Promise<UploadResult> {
  return new Promise((resolve, reject) => {
    const fileName = `${Date.now()}_${file.name}`;
    const storageRef = ref(storage, `${path}${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot: UploadTaskSnapshot) => {
        const progress = {
          bytesTransferred: snapshot.bytesTransferred,
          totalBytes: snapshot.totalBytes,
          progress: (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        };

        if (onProgress) {
          onProgress(progress);
        }
      },
      (error) => {
        console.error('Upload failed:', error);
        reject(error);
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          const result: UploadResult = {
            downloadURL,
            fullPath: uploadTask.snapshot.ref.fullPath,
            name: file.name,
            size: file.size,
            contentType: file.type,
          };
          resolve(result);
        } catch (error) {
          console.error('Failed to get download URL:', error);
          reject(error);
        }
      }
    );
  });
}

/**
 * Upload multiple files to Firebase Storage
 * @param files Array of files to upload
 * @param path The storage path
 * @param onProgress Optional progress callback for overall progress
 * @returns Promise<UploadResult[]>
 */
export async function uploadFiles(
  files: File[],
  path: string,
  onProgress?: (completed: number, total: number) => void
): Promise<UploadResult[]> {
  const results: UploadResult[] = [];
  let completed = 0;

  for (const file of files) {
    try {
      const result = await uploadFile(file, path);
      results.push(result);
      completed++;

      if (onProgress) {
        onProgress(completed, files.length);
      }
    } catch (error) {
      console.error(`Failed to upload ${file.name}:`, error);
      throw error;
    }
  }

  return results;
}

/**
 * Delete a file from Firebase Storage
 * @param fullPath The full path of the file to delete
 */
export async function deleteFile(fullPath: string): Promise<void> {
  try {
    const storageRef = ref(storage, fullPath);
    await deleteObject(storageRef);
  } catch (error) {
    console.error(`Failed to delete file ${fullPath}:`, error);
    throw error;
  }
}

/**
 * Delete multiple files from Firebase Storage
 * @param fullPaths Array of full paths to delete
 */
export async function deleteFiles(fullPaths: string[]): Promise<void> {
  const deletePromises = fullPaths.map(path => deleteFile(path));
  await Promise.all(deletePromises);
}

/**
 * Get download URL for a file
 * @param fullPath The full path of the file
 * @returns Promise<string>
 */
export async function getFileDownloadURL(fullPath: string): Promise<string> {
  try {
    const storageRef = ref(storage, fullPath);
    return await getDownloadURL(storageRef);
  } catch (error) {
    console.error(`Failed to get download URL for ${fullPath}:`, error);
    throw error;
  }
}

/**
 * Generate a unique filename for uploads
 * @param originalName Original filename
 * @param prefix Optional prefix
 * @returns string
 */
export function generateUniqueFileName(originalName: string, prefix = ''): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 15);
  const extension = originalName.split('.').pop();
  const baseName = originalName.replace(/\.[^/.]+$/, '');

  return `${prefix}${timestamp}_${random}_${baseName}.${extension}`;
}

/**
 * Validate file type and size
 * @param file The file to validate
 * @param allowedTypes Array of allowed MIME types
 * @param maxSizeInMB Maximum file size in MB
 * @returns { isValid: boolean; error?: string }
 */
export function validateFile(
  file: File,
  allowedTypes: string[] = [],
  maxSizeInMB: number = 10
): { isValid: boolean; error?: string } {
  const maxSizeInBytes = maxSizeInMB * 1024 * 1024;

  if (file.size > maxSizeInBytes) {
    return {
      isValid: false,
      error: `File size must be less than ${maxSizeInMB}MB`,
    };
  }

  if (allowedTypes.length > 0 && !allowedTypes.includes(file.type)) {
    return {
      isValid: false,
      error: `File type not allowed. Allowed types: ${allowedTypes.join(', ')}`,
    };
  }

  return { isValid: true };
}

/**
 * Common file type constants
 */
export const FILE_TYPES = {
  IMAGES: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
  DOCUMENTS: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
  SPREADSHEETS: ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
  ALL: ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'application/pdf'],
} as const;