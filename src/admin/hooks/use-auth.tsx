import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, AuthState, LoginForm } from '../types';

interface AuthContextType extends AuthState {
  login: (credentials: LoginForm) => Promise<void>;
  logout: () => void;
  checkAuth: () => Promise<void>;
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

  // Mock authentication - replace with real API calls
  const login = async (credentials: LoginForm): Promise<void> => {
    setAuthState(prev => ({ ...prev, isLoading: true }));

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock user data - replace with actual authentication
    const mockUser: User = {
      id: '1',
      email: credentials.email,
      name: 'Admin User',
      role: 'admin',
      avatar: '',
      createdAt: new Date(),
      lastLogin: new Date(),
    };

    setAuthState({
      user: mockUser,
      isAuthenticated: true,
      isLoading: false,
    });

    // Store in localStorage for persistence
    localStorage.setItem('auth_user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });
    localStorage.removeItem('auth_user');
  };

  const checkAuth = async (): Promise<void> => {
    const storedUser = localStorage.getItem('auth_user');
    if (storedUser) {
      try {
        const user: User = JSON.parse(storedUser);
        setAuthState({
          user,
          isAuthenticated: true,
          isLoading: false,
        });
      } catch (error) {
        console.error('Error parsing stored user:', error);
        logout();
      }
    } else {
      setAuthState(prev => ({ ...prev, isLoading: false }));
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const value: AuthContextType = {
    ...authState,
    login,
    logout,
    checkAuth,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};