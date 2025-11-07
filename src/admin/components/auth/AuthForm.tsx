import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Loader2, Lock, User } from 'lucide-react';
import { cn } from '@/lib/utils';

type AuthFormMode = 'signin' | 'signup';

const signInSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(1, 'Password is required'),
});

const signUpSchema = signInSchema.extend({
  name: z.string().min(2, 'Name must be at least 2 characters'),
});

type SignInFormData = z.infer<typeof signInSchema>;
type SignUpFormData = z.infer<typeof signUpSchema>;

export type AuthFormValues = SignInFormData | SignUpFormData;

type AuthFormProps = {
  mode?: AuthFormMode;
  onSubmit: (values: AuthFormValues) => void;
  isLoading?: boolean;
  error?: string | null;
  className?: string;
};

const formSchema = (mode: AuthFormMode) => 
  mode === 'signin' ? signInSchema : signUpSchema;

export function AuthForm({
  mode = 'signin',
  onSubmit,
  isLoading = false,
  error = null,
  className,
}: AuthFormProps) {
  const isSignUp = mode === 'signup';
  const form = useForm<AuthFormValues>({
    resolver: zodResolver(formSchema(mode)),
    defaultValues: isSignUp 
      ? { email: '', password: '', name: '' } 
      : { email: '', password: '' },
  });

  return (
    <div className={cn('space-y-6', className)}>
      <div className="flex flex-col items-center space-y-2 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <Lock className="h-6 w-6 text-primary" />
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Admin Access
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your credentials to access the admin panel
        </p>
      </div>

      {error && (
        <div className="rounded-md bg-destructive/15 p-3 text-sm text-destructive">
          {error}
        </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {isSignUp && (
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <FormControl>
                      <Input
                        placeholder="John Doe"
                        type="text"
                        autoComplete="name"
                        disabled={isLoading}
                        className="pl-9"
                        {...field}
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <FormControl>
                    <Input
                      placeholder="name@example.com"
                      type="email"
                      autoCapitalize="none"
                      autoComplete="email"
                      autoCorrect="off"
                      disabled={isLoading}
                      className="pl-9"
                      {...field}
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between">
                  <FormLabel>Password</FormLabel>
                  {!isSignUp && (
                    <a
                      href="/forgot-password"
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      Forgot password?
                    </a>
                  )}
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <FormControl>
                    <Input
                      placeholder={isSignUp ? 'Create a password' : '••••••••'}
                      type="password"
                      autoComplete={isSignUp ? 'new-password' : 'current-password'}
                      disabled={isLoading}
                      className="pl-9"
                      {...field}
                    />
                  </FormControl>
                </div>
                {isSignUp && (
                  <p className="text-xs text-muted-foreground mt-1">
                    Use at least 8 characters, one uppercase, one lowercase, and one number
                  </p>
                )}
                <FormMessage />
              </FormItem>
            )}
          />
          {error && (
            <div className="rounded-md bg-destructive/15 p-3 text-sm text-destructive">
              {error}
            </div>
          )}
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isSignUp ? 'Create Account' : 'Sign In'}
          </Button>
        </form>
      </Form>
    </div>
  );
}
