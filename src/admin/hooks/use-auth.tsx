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
    let timeoutId: NodeJS.Timeout;

    console.log('Setting up auth state listener');
    
    // Check for existing auth state immediately
    const checkCurrentUser = async () => {
      const currentUser = firebaseAuth.getCurrentUser();
      if (currentUser && isMounted) {
        console.log('Found existing authenticated user:', currentUser.email);
        try {
          const user = await firebaseAuth.getUserFromFirebaseUser(currentUser);
          if (isMounted) {
            setAuthState({
              user,
              isAuthenticated: true,
              isLoading: false,
            });
            console.log('Initial auth state set from existing user');
          }
        } catch (error) {
          console.error('Error loading existing user data:', error);
          // Continue to auth state listener
        }
      }
    };
    
    checkCurrentUser();
    
    const unsubscribe = firebaseAuth.onAuthStateChange(async (firebaseUser: FirebaseUser | null) => {
      console.log('Auth state changed:', firebaseUser ? `authenticated (${firebaseUser.email})` : 'not authenticated');

      if (!isMounted) {
        console.log('Component unmounted, skipping state update');
        return;
      }

      // Clear any existing timeout since we got a response
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      if (firebaseUser) {
        try {
          console.log('Fetching user data from Firestore for:', firebaseUser.uid);
          const user = await firebaseAuth.getUserFromFirebaseUser(firebaseUser);
          console.log('User data fetched successfully:', { email: user.email, role: user.role });
          if (isMounted) {
            setAuthState({
              user,
              isAuthenticated: true,
              isLoading: false,
            });
            console.log('Auth state updated: authenticated');
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
            console.log('Auth state updated with fallback user data');
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
          console.log('Auth state updated: not authenticated');
        }
      }
    });

    // Safety timeout to prevent infinite loading - only set once on mount
    timeoutId = setTimeout(() => {
      if (isMounted) {
        console.warn('Auth state loading timeout reached after 10s, setting to not authenticated');
        setAuthState({
          user: null,
          isAuthenticated: false,
          isLoading: false,
        });
      }
    }, 10000); // 10 second timeout

    return () => {
      isMounted = false;
      console.log('Cleaning up auth state listener');
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      unsubscribe();
    };
  }, []); // Empty dependency array - only run once on mount

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
        setAuthState(prev => ({ ...prev, isLoading: false }));
        throw new Error(result.error || 'Login failed');
      }

      // Auth state will be updated by onAuthStateChanged listener
      console.log('Login successful, auth state change will be triggered');
      
      // Wait a moment for the auth state listener to update
      await new Promise(resolve => setTimeout(resolve, 100));

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