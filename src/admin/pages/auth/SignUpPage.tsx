import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthForm } from '@/admin/components/auth/AuthForm';
import { toast } from 'sonner';
import { AuthFormValues } from '@/admin/components/auth/AuthForm';

export function SignUpPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (values: AuthFormValues) => {
    if (!('name' in values)) {
      setError('Name is required');
      return;
    }
    try {
      setError(null);
      setIsLoading(true);
      
      // Simulate API call
      await new Promise<void>((resolve) => setTimeout(resolve, 1000));
      
      toast.success('Account created!', {
        description: 'Your account has been created successfully.',
      });
      
      // Redirect to sign in page after successful sign up
      navigate('/signin');
    } catch (err) {
      console.error('Sign up error:', err);
      toast.error('Error', {
        description: err instanceof Error ? err.message : 'Failed to create account. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
      <AuthForm
        mode="signup"
        onSubmit={handleSubmit}
        isLoading={isLoading}
        error={error}
      />
      
      <p className="px-8 text-center text-sm text-muted-foreground">
        By clicking continue, you agree to our{' '}
        <Link to="/terms" className="underline underline-offset-4 hover:text-primary">
          Terms of Service
        </Link>{' '}
        and{' '}
        <Link to="/privacy" className="underline underline-offset-4 hover:text-primary">
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
}
