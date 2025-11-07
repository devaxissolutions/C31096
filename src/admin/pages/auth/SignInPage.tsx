import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthForm } from '@/admin/components/auth/AuthForm';
import { useAuth } from '@/admin/contexts/AuthContext';
import { toast } from 'sonner';
import { AuthFormValues } from '@/admin/components/auth/AuthForm';

export function SignInPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (values: AuthFormValues) => {
    try {
      setError(null);
      setIsLoading(true);
      
      // Call your authentication service here
      // For example: await authService.login(values.email, values.password);
      await login(values.email, values.password);
      
      // Get the intended destination or default to '/admin'
      const from = location.state?.from?.pathname || '/admin';
      
      toast.success('Welcome back!', {
        description: 'You have been successfully signed in.',
      });
      
      // Redirect to the intended page or admin dashboard
      navigate(from, { replace: true });
      
    } catch (err) {
      console.error('Sign in error:', err);
      toast.error('Authentication Failed', {
        description: err instanceof Error ? err.message : 'Failed to sign in. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Admin Sign In
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your credentials to access the admin panel
        </p>
      </div>
      
      <AuthForm
        mode="signin"
        onSubmit={handleSubmit}
        isLoading={isLoading}
        error={error}
      />
      
      <p className="px-8 text-center text-sm text-muted-foreground">
        <a
          href="/auth/forgot-password"
          className="underline underline-offset-4 hover:text-primary"
        >
          Forgot your password?
        </a>
      </p>
    </div>
  );
}
