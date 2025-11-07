import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/admin/contexts/AuthContext';
import { Loader2 } from 'lucide-react';

type ProtectedRouteProps = {
  children: React.ReactNode;
  requiredRole?: 'admin' | 'editor' | 'viewer';
};

export function ProtectedRoute({ children, requiredRole = 'viewer' }: ProtectedRouteProps) {
  const { isAuthenticated, isLoading, hasPermission } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  if (!hasPermission(requiredRole)) {
    return <Navigate to="/admin/unauthorized" replace />;
  }

  return <>{children}</>;
}
