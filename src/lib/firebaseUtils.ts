import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  QueryDocumentSnapshot,
  DocumentData,
  Timestamp,
} from 'firebase/firestore';
import { db, auth } from './firebaseConfig';
import { FirestoreBase } from './firestoreTypes';

// Generic CRUD operations
export class FirestoreService<T extends FirestoreBase> {
  constructor(private collectionName: string) {}

  // Create a new document
  async create(data: Omit<T, 'id' | 'createdAt' | 'updatedAt' | 'createdBy' | 'updatedBy'>): Promise<string> {
    try {
      const user = auth.currentUser;
      if (!user) throw new Error('User must be authenticated');

      const now = Timestamp.now();
      const docData = {
        ...data,
        createdAt: now,
        updatedAt: now,
        createdBy: user.uid,
        updatedBy: user.uid,
      };

      const docRef = await addDoc(collection(db, this.collectionName), docData);
      return docRef.id;
    } catch (error) {
      console.error(`Error creating document in ${this.collectionName}:`, error);
      throw error;
    }
  }

  // Read a single document by ID
  async getById(id: string): Promise<T | null> {
    try {
      const docRef = doc(db, this.collectionName, id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() } as T;
      }
      return null;
    } catch (error) {
      console.error(`Error getting document ${id} from ${this.collectionName}:`, error);
      throw error;
    }
  }

  // Read all documents in collection
  async getAll(): Promise<T[]> {
    try {
      const querySnapshot = await getDocs(collection(db, this.collectionName));
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as T));
    } catch (error) {
      console.error(`Error getting all documents from ${this.collectionName}:`, error);
      throw error;
    }
  }

  // Query documents with filters
  async query(
    filters: { field: string; operator: '==' | '!=' | '<' | '<=' | '>' | '>=' | 'array-contains' | 'in' | 'array-contains-any'; value: any }[] = [],
    sortBy?: { field: string; direction: 'asc' | 'desc' },
    limitCount?: number
  ): Promise<T[]> {
    try {
      const constraints: any[] = [];

      // Apply filters
      filters.forEach(filter => {
        constraints.push(where(filter.field, filter.operator, filter.value));
      });

      // Add sorting
      if (sortBy) {
        constraints.push(orderBy(sortBy.field, sortBy.direction));
      }

      // Add limit
      if (limitCount) {
        constraints.push(limit(limitCount));
      }

      const q = query(collection(db, this.collectionName), ...constraints);
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as T));
    } catch (error) {
      console.error(`Error querying ${this.collectionName}:`, error);
      throw error;
    }
  }

  // Update a document
  async update(id: string, data: Partial<Omit<T, 'id' | 'createdAt' | 'createdBy'>>): Promise<void> {
    try {
      const user = auth.currentUser;
      if (!user) throw new Error('User must be authenticated');

      const docRef = doc(db, this.collectionName, id);
      const updateData = {
        ...data,
        updatedAt: Timestamp.now(),
        updatedBy: user.uid,
      };

      await updateDoc(docRef, updateData);
    } catch (error) {
      console.error(`Error updating document ${id} in ${this.collectionName}:`, error);
      throw error;
    }
  }

  // Delete a document
  async delete(id: string): Promise<void> {
    try {
      const docRef = doc(db, this.collectionName, id);
      await deleteDoc(docRef);
    } catch (error) {
      console.error(`Error deleting document ${id} from ${this.collectionName}:`, error);
      throw error;
    }
  }

  // Batch operations
  async createMany(items: Omit<T, 'id' | 'createdAt' | 'updatedAt' | 'createdBy' | 'updatedBy'>[]): Promise<string[]> {
    const ids: string[] = [];
    for (const item of items) {
      const id = await this.create(item);
      ids.push(id);
    }
    return ids;
  }

  async deleteMany(ids: string[]): Promise<void> {
    for (const id of ids) {
      await this.delete(id);
    }
  }
}

// Collection-specific services
export const productsService = new FirestoreService<import('./firestoreTypes').FirestoreProduct>('products');
export const testimonialsService = new FirestoreService<import('./firestoreTypes').FirestoreTestimonial>('testimonials');
export const teamMembersService = new FirestoreService<import('./firestoreTypes').FirestoreTeamMember>('team_members');
export const innovationsService = new FirestoreService<import('./firestoreTypes').FirestoreInnovation>('innovation_pipeline');
export const galleryService = new FirestoreService<import('./firestoreTypes').FirestoreGalleryItem>('gallery');
export const companyStatsService = new FirestoreService<import('./firestoreTypes').FirestoreCompanyStat>('company_stats');
export const contactInfoService = new FirestoreService<import('./firestoreTypes').FirestoreContactInfo>('contact_info');
export const heroSectionsService = new FirestoreService<import('./firestoreTypes').FirestoreHeroSection>('homepage_sections');
export const aboutSectionsService = new FirestoreService<import('./firestoreTypes').FirestoreAboutSection>('homepage_sections');
export const featuresService = new FirestoreService<import('./firestoreTypes').FirestoreFeature>('homepage_sections');
export const ctaSectionsService = new FirestoreService<import('./firestoreTypes').FirestoreCTASection>('homepage_sections');