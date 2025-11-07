import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
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
import { Loader2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const formSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

type FormValues = z.infer<typeof formSchema>;

export function ForgotPasswordPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      setIsLoading(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, you would send a password reset email here
      console.log('Password reset email sent to:', values.email);
      
      setIsSubmitted(true);
      
      toast.success('Email sent!', {
        description: 'Check your inbox for a link to reset your password.',
      });
    } catch (error) {
      console.error('Error sending reset email:', error);
      toast.error('Error', {
        description: 'Failed to send reset email. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-green-600 dark:text-green-400"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Check your email
        </h1>
        <p className="text-sm text-muted-foreground">
          We've sent a password reset link to {form.getValues('email')}
        </p>
        <Button asChild className="mt-4">
          <Link to="/signin">Back to sign in</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Forgot your password?
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your email and we'll send you a link to reset your password.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="name@example.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Send reset link
          </Button>
        </form>
      </Form>

      <div className="text-center text-sm">
        <Link
          to="/signin"
          className="inline-flex items-center font-medium text-primary hover:underline"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to sign in
        </Link>
      </div>
    </div>
  );
}
