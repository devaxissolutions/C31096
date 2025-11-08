import React, { createContext, useContext, useEffect, useState } from 'react';
import { User as FirebaseUser } from 'firebase/auth';
import { firebaseAuth, LoginCredentials, RegisterData } from '../../lib/firebaseAuth';
import { User, AuthState, LoginForm } from '../types';

interface AuthContextType extends AuthState {
  login: (credentials: LoginForm) => Promise<void>;
  logout: () => void;
  register: (email: string, password: string, name: string, role?: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateUserProfile: (updates: Partial<User>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  // Listen to auth state changes
  useEffect(() => {
    let isMounted = true;

    const unsubscribe = firebaseAuth.onAuthStateChange(async (firebaseUser: FirebaseUser | null) => {
      console.log('Auth state changed:', firebaseUser ? 'authenticated' : 'not authenticated');

      if (!isMounted) return;

      if (firebaseUser) {
        try {
          console.log('Fetching user data from Firestore for:', firebaseUser.uid);
          const user = await firebaseAuth.getUserFromFirebaseUser(firebaseUser);
          console.log('User data fetched successfully:', user);
          if (isMounted) {
            setAuthState({
              user,
              isAuthenticated: true,
              isLoading: false,
            });
          }
        } catch (error) {
          console.error('Error loading user data from Firestore:', error);
          // If Firestore fails, still set authenticated state but with basic user info
          const fallbackUser = {
            id: firebaseUser.uid,
            email: firebaseUser.email || '',
            name: firebaseUser.displayName || 'User',
            role: 'viewer' as const,
            avatar: firebaseUser.photoURL || '',
            createdAt: new Date(),
            lastLogin: new Date(),
          };
          if (isMounted) {
            setAuthState({
              user: fallbackUser,
              isAuthenticated: true,
              isLoading: false,
            });
          }
        }
      } else {
        console.log('User not authenticated, setting state to not authenticated');
        if (isMounted) {
          setAuthState({
            user: null,
            isAuthenticated: false,
            isLoading: false,
          });
        }
      }
    });

    // Safety timeout to prevent infinite loading
    const timeout = setTimeout(() => {
      if (isMounted && authState.isLoading) {
        console.warn('Auth state loading timeout reached, setting to not authenticated');
        setAuthState({
          user: null,
          isAuthenticated: false,
          isLoading: false,
        });
      }
    }, 10000); // 10 second timeout

    return () => {
      isMounted = false;
      console.log('Unsubscribing from auth state changes');
      clearTimeout(timeout);
      unsubscribe();
    };
  }, []);

  // Login with Firebase Auth
  const login = async (credentials: LoginForm): Promise<void> => {
    console.log('Auth hook login called with:', credentials);

    // Validate credentials before proceeding
    if (!credentials || typeof credentials.email !== 'string' || typeof credentials.password !== 'string') {
      console.error('Auth hook validation failed:', { credentials, emailType: typeof credentials.email, passwordType: typeof credentials.password });
      throw new Error('Invalid login credentials provided');
    }

    if (!credentials.email.trim() || !credentials.password.trim()) {
      throw new Error('Email and password are required');
    }

    setAuthState(prev => ({ ...prev, isLoading: true }));

    try {
      console.log('Calling firebaseAuth.signIn with:', credentials);
      const result = await firebaseAuth.signIn(credentials);

      if (!result.success) {
        throw new Error(result.error || 'Login failed');
      }

      // Don't manually set auth state here - let onAuthStateChanged handle it
      console.log('Login successful, waiting for auth state change...');

    } catch (error) {
      console.error('Auth hook login error:', error);
      setAuthState(prev => ({ ...prev, isLoading: false }));
      throw error;
    }
  };

  // Register new user
  const register = async (
    email: string,
    password: string,
    name: string,
    role: string = 'viewer'
  ): Promise<void> => {
    try {
      const result = await firebaseAuth.register({ email, password, name, role });

      if (!result.success) {
        throw new Error(result.error || 'Registration failed');
      }

      setAuthState({
        user: result.user!,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      throw error;
    }
  };

  // Reset password
  const resetPassword = async (email: string): Promise<void> => {
    const result = await firebaseAuth.resetPassword(email);
    if (!result.success) {
      throw new Error(result.error || 'Password reset failed');
    }
  };

  // Update user profile
  const updateUserProfile = async (updates: Partial<User>): Promise<void> => {
    const result = await firebaseAuth.updateProfile(updates);
    if (!result.success) {
      throw new Error(result.error || 'Profile update failed');
    }

    // Update local state
    setAuthState(prev => ({
      ...prev,
      user: result.user || prev.user,
    }));
  };

  // Logout
  const logout = async () => {
    const result = await firebaseAuth.signOut();
    if (!result.success) {
      console.error('Logout error:', result.error);
    }

    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });
  };

  const value: AuthContextType = {
    ...authState,
    login,
    logout,
    register,
    resetPassword,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};