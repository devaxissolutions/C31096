import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useAuth } from '@/admin/contexts/AuthContext';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(1, 'Password is required'),
  remember: z.boolean().optional()
});

type FormValues = z.infer<typeof formSchema>;

export function AdminSignInPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: 'admin@example.com',
      password: 'password',
      remember: false
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      setError(null);
      setIsLoading(true);
      await login(values.email, values.password);
      navigate('/admin');
    } catch (err) {
      console.error('Login error:', err);
      setError('Invalid email or password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Admin Panel
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Sign in to access the dashboard
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg p-8 border border-gray-200 dark:border-gray-700">
          {error && (
            <div className="mb-4 p-3 text-sm text-red-700 bg-red-100 dark:bg-red-900/30 dark:text-red-400 rounded-md">
              {error}
            </div>
          )}

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  className="w-full"
                  {...form.register('email')}
                  disabled={isLoading}
                />
                {form.formState.errors.email && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <Label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Password
                  </Label>
                  <Link
                    to="/forgot-password"
                    className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full"
                  {...form.register('password')}
                  disabled={isLoading}
                />
                {form.formState.errors.password && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {form.formState.errors.password.message}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Checkbox
                    id="remember"
                    checked={form.watch('remember')}
                    onCheckedChange={(checked) =>
                      form.setValue('remember', Boolean(checked))
                    }
                    disabled={isLoading}
                  />
                  <Label
                    htmlFor="remember"
                    className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                  >
                    Remember me
                  </Label>
                </div>
              </div>
            </div>

            <div>
              <Button
                type="submit"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  'Sign in'
                )}
              </Button>
            </div>
          </form>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>
            Need help?{' '}
            <a
              href="mailto:support@example.com"
              className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Contact support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
