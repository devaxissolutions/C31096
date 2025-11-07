import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/admin/contexts/AuthContext';
import { Loader2 } from 'lucide-react';
import { AdminSignInPage } from './AdminSignInPage';

export function AuthLayout() {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (isAuthenticated) {
    const from = location.state?.from?.pathname || '/';
    return <Navigate to={from} replace />;
  }

  // If not authenticated, show the sign-in page
  return <AdminSignInPage />;
}
