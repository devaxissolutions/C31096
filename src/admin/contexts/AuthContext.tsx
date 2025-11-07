import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User as FirebaseUser,
  UserCredential
} from 'firebase/auth';
import { auth } from '../../lib/firebaseConfig';
import { toast } from 'sonner';

type User = {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'editor' | 'viewer';
  avatar?: string;
  createdAt: Date;
  lastLogin?: Date;
};

type AuthContextType = {
  user: User | null;
  firebaseUser: FirebaseUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  hasPermission: (requiredRole: User['role']) => boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Listen to Firebase auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setFirebaseUser(firebaseUser);

      if (firebaseUser) {
        // Convert Firebase user to our User type
        // In a real app, you might fetch additional user data from Firestore
        const appUser: User = {
          id: firebaseUser.uid,
          email: firebaseUser.email || '',
          name: firebaseUser.displayName || firebaseUser.email || 'Admin User',
          role: 'admin', // You might store roles in Firestore or custom claims
          avatar: firebaseUser.photoURL || undefined,
          createdAt: new Date(), // This should come from Firestore
          lastLogin: new Date(),
        };
        setUser(appUser);
      } else {
        setUser(null);
      }

      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/admin');
      toast.success('Login successful', {
        description: 'Welcome back!',
      });
    } catch (error: any) {
      console.error('Login failed:', error);
      let errorMessage = 'Invalid email or password';

      switch (error.code) {
        case 'auth/user-not-found':
          errorMessage = 'No account found with this email';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Incorrect password';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Invalid email address';
          break;
        case 'auth/user-disabled':
          errorMessage = 'This account has been disabled';
          break;
        case 'auth/too-many-requests':
          errorMessage = 'Too many failed attempts. Try again later';
          break;
      }

      toast.error('Login failed', {
        description: errorMessage,
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      navigate('/admin/login');
      toast('Logged out', {
        description: 'You have been successfully logged out.',
      });
    } catch (error) {
      console.error('Logout failed:', error);
      toast.error('Logout failed', {
        description: 'An error occurred while logging out.',
      });
    }
  };

  const hasPermission = (requiredRole: User['role']) => {
    if (!user) return false;

    const roleHierarchy = {
      admin: 3,
      editor: 2,
      viewer: 1,
    };

    return roleHierarchy[user.role] >= roleHierarchy[requiredRole];
  };

  const value = {
    user,
    firebaseUser,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
    hasPermission,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
