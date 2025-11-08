import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User as FirebaseUser,
  createUserWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
  Auth,
  UserCredential,
} from 'firebase/auth';
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
  Firestore,
} from 'firebase/firestore';
import { User, UserRole } from '../admin/types';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  name: string;
  role?: string;
}

export interface AuthResult {
  success: boolean;
  error?: string;
  user?: User;
}

/**
 * Firebase Authentication Service
 * Handles all Firebase Auth operations with proper error handling
 */
export class FirebaseAuthService {
  constructor(
    private auth: Auth,
    private db: Firestore
  ) {}

  /**
   * Sign in with email and password
   */
  async signIn(credentials: LoginCredentials): Promise<AuthResult> {
    console.log('FirebaseAuth.signIn called');
    console.log('Firebase Auth instance:', this.auth ? 'initialized' : 'NOT initialized');

    try {
      console.log('Attempting to sign in with Firebase...');
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        credentials.email,
        credentials.password
      );

      console.log('Firebase sign in successful, user ID:', userCredential.user.uid);

      // Update last login in Firestore (only if document exists and user has permission)
      try {
        console.log('Attempting to update last login timestamp...');
        const userDocRef = doc(this.db, 'users', userCredential.user.uid);
        
        // First check if document exists
        const userDocSnap = await getDoc(userDocRef);
        
        if (userDocSnap.exists()) {
          await updateDoc(userDocRef, {
            lastLogin: serverTimestamp(),
          });
          console.log('Last login timestamp updated successfully');
        } else {
          console.warn('User document does not exist in Firestore, creating basic document');
          // Create a basic user document
          await setDoc(userDocRef, {
            email: userCredential.user.email,
            name: userCredential.user.displayName || 'User',
            role: 'viewer',
            createdAt: serverTimestamp(),
            lastLogin: serverTimestamp(),
          });
          console.log('User document created successfully');
        }
      } catch (firestoreError: any) {
        console.warn('Could not update last login in Firestore:', firestoreError.message);
        // Check if it's a permission issue
        if (firestoreError.code === 'permission-denied') {
          console.warn('Permission denied updating last login. User may not have write access to their document.');
        }
        // Continue anyway - this is not a critical error
      }

      const user = await this.firebaseUserToUser(userCredential.user);

      console.log('User data converted successfully');
      return {
        success: true,
        user,
      };
    } catch (error: any) {
      console.error('FirebaseAuth.signIn error:', error);
      console.error('Error code:', error.code);
      console.error('Error message:', error.message);
      return {
        success: false,
        error: this.getAuthErrorMessage(error.code),
      };
    }
  }

  /**
   * Register a new user
   */
  async register(data: RegisterData): Promise<AuthResult> {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        data.email,
        data.password
      );

      // Update profile
      await updateProfile(userCredential.user, {
        displayName: data.name,
      });

      // Create user document in Firestore
      const userData = {
        name: data.name,
        email: data.email,
        role: data.role || 'viewer',
        avatar: '',
        createdAt: serverTimestamp(),
        lastLogin: serverTimestamp(),
      };

      await setDoc(doc(this.db, 'users', userCredential.user.uid), userData);

      const user = await this.firebaseUserToUser(userCredential.user);

      return {
        success: true,
        user,
      };
    } catch (error: any) {
      return {
        success: false,
        error: this.getAuthErrorMessage(error.code),
      };
    }
  }

  /**
   * Send password reset email
   */
  async resetPassword(email: string): Promise<AuthResult> {
    try {
      await sendPasswordResetEmail(this.auth, email);
      return {
        success: true,
      };
    } catch (error: any) {
      return {
        success: false,
        error: this.getAuthErrorMessage(error.code),
      };
    }
  }

  /**
   * Sign out current user
   */
  async signOut(): Promise<AuthResult> {
    try {
      await signOut(this.auth);
      return {
        success: true,
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message,
      };
    }
  }

  /**
   * Listen to auth state changes
   */
  onAuthStateChange(callback: (user: FirebaseUser | null) => void) {
    console.log('Setting up onAuthStateChanged listener');
    const unsubscribe = onAuthStateChanged(this.auth, (user) => {
      console.log('onAuthStateChanged triggered:', user ? `User: ${user.email}` : 'No user');
      callback(user);
    }, (error) => {
      console.error('Auth state change error:', error);
    });
    return unsubscribe;
  }

  /**
   * Get current user synchronously
   */
  getCurrentUser(): FirebaseUser | null {
    return this.auth.currentUser;
  }

  /**
   * Get user data from Firebase user
   */
  async getUserFromFirebaseUser(firebaseUser: FirebaseUser): Promise<User> {
    return this.firebaseUserToUser(firebaseUser);
  }

  /**
   * Convert Firebase user to our User type
   */
  private async firebaseUserToUser(firebaseUser: FirebaseUser): Promise<User> {
    console.log('Converting Firebase user:', firebaseUser.uid);

    try {
      // Get additional user data from Firestore
      console.log('Fetching user document from Firestore...');
      const userDoc = await getDoc(doc(this.db, 'users', firebaseUser.uid));

      if (!userDoc.exists()) {
        console.warn('User document does not exist in Firestore, using fallback data');
        throw new Error('User document not found');
      }

      const userData = userDoc.data();
      console.log('Firestore user data retrieved successfully');

      const user = {
        id: firebaseUser.uid,
        email: firebaseUser.email || '',
        name: userData?.name || firebaseUser.displayName || 'User',
        role: (userData?.role as UserRole) || 'viewer',
        avatar: userData?.avatar || firebaseUser.photoURL || '',
        createdAt: userData?.createdAt?.toDate() || new Date(),
        lastLogin: userData?.lastLogin?.toDate() || new Date(),
      };

      console.log('User conversion successful');
      return user;
    } catch (error: any) {
      console.error('Error fetching user data from Firestore:', error);

      // Check if it's a permission denied error
      if (error.code === 'permission-denied') {
        console.error('Firestore permission denied. Check Firestore rules.');
      } else if (error.code === 'unavailable') {
        console.error('Firestore unavailable. Check network connection.');
      }

      // Return basic user data if Firestore fails
      const fallbackUser = {
        id: firebaseUser.uid,
        email: firebaseUser.email || '',
        name: firebaseUser.displayName || 'User',
        role: 'viewer' as const,
        avatar: firebaseUser.photoURL || '',
        createdAt: new Date(),
        lastLogin: new Date(),
      };
      console.log('Using fallback user data:', fallbackUser);
      return fallbackUser;
    }
  }

  /**
   * Update user profile
   */
  async updateProfile(updates: Partial<User>): Promise<AuthResult> {
    try {
      if (!this.auth.currentUser) {
        throw new Error('No authenticated user');
      }

      // Update Firebase Auth profile
      const authUpdates: any = {};
      if (updates.name) authUpdates.displayName = updates.name;
      if (updates.avatar) authUpdates.photoURL = updates.avatar;

      if (Object.keys(authUpdates).length > 0) {
        await updateProfile(this.auth.currentUser, authUpdates);
      }

      // Update Firestore document
      const firestoreUpdates: any = {};
      if (updates.name) firestoreUpdates.name = updates.name;
      if (updates.avatar) firestoreUpdates.avatar = updates.avatar;
      if (updates.role) firestoreUpdates.role = updates.role;

      if (Object.keys(firestoreUpdates).length > 0) {
        await updateDoc(doc(this.db, 'users', this.auth.currentUser.uid), firestoreUpdates);
      }

      // Get updated user
      const user = await this.firebaseUserToUser(this.auth.currentUser);

      return {
        success: true,
        user,
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message,
      };
    }
  }
  /**
   * Get user-friendly error messages for Firebase auth errors
   */
  private getAuthErrorMessage(errorCode: string): string {
    switch (errorCode) {
      case 'auth/user-not-found':
        return 'No account found with this email address.';
      case 'auth/wrong-password':
        return 'Incorrect password. Please try again.';
      case 'auth/invalid-email':
        return 'Please enter a valid email address.';
      case 'auth/user-disabled':
        return 'This account has been disabled.';
      case 'auth/email-already-in-use':
        return 'An account with this email already exists.';
      case 'auth/weak-password':
        return 'Password should be at least 6 characters.';
      case 'auth/too-many-requests':
        return 'Too many failed attempts. Please try again later.';
      case 'auth/network-request-failed':
        return 'Network error. Please check your connection.';
      case 'auth/invalid-credential':
        return 'Invalid email or password. Please check your credentials.';
      case 'auth/invalid-login-credentials':
        return 'Invalid email or password. Please try again.';
      case 'auth/missing-password':
        return 'Please enter your password.';
      default:
        console.error('Unhandled auth error code:', errorCode);
        return 'Login failed. Please check your credentials and try again.';
    }
  }
}

// Export singleton instance
import { auth, db } from './firebaseConfig';
export const firebaseAuth = new FirebaseAuthService(auth, db);