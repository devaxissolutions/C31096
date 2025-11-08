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
import { Loader2, ArrowLeft, Shield, Award, Globe, CheckCircle, Mail, ArrowRight, KeyRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { firebaseAuth } from '../../../lib/firebaseAuth';

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

      const result = await firebaseAuth.resetPassword(values.email);

      if (result.success) {
        setIsSubmitted(true);
        toast.success('Email sent!', {
          description: 'Check your inbox for a link to reset your password.',
        });
      } else {
        toast.error('Error', {
          description: result.error || 'Failed to send reset email. Please try again.',
        });
      }
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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-purple-600/5 -z-10" />

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="relative min-h-screen flex items-center justify-center px-4 py-12">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left Content - Branding */}
              <div className="hidden lg:block space-y-12">
                <div className="space-y-8">
                  {/* Enhanced Logo */}
                  <div className="flex items-center gap-4 group">
                    <div className="relative">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-12 bg-gradient-to-b from-blue-600 to-blue-700 rounded-full shadow-lg" />
                        <div className="w-2 h-12 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full shadow-lg opacity-80" />
                        <div className="w-2 h-12 bg-gradient-to-b from-blue-400 to-blue-500 rounded-full shadow-lg opacity-60" />
                      </div>
                      <div className="absolute -inset-2 bg-blue-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-3xl font-bold tracking-tight text-slate-900">
                        PharmaCorp
                      </span>
                      <span className="text-sm tracking-[0.15em] text-slate-600 uppercase font-medium">
                        Medical Systems
                      </span>
                    </div>
                  </div>

                  {/* Success Content */}
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h1 className="text-5xl font-bold text-slate-900 leading-tight">
                        Password
                        <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                          {" "}Reset
                        </span>
                      </h1>
                      <p className="text-xl text-slate-600 leading-relaxed max-w-md">
                        Check your email for secure password reset instructions.
                      </p>
                    </div>

                    {/* Success Indicators */}
                    <div className="grid grid-cols-1 gap-4 pt-6">
                      <div className="flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 shadow-sm">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                          <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900">Email Sent Successfully</h3>
                          <p className="text-sm text-slate-600">Your reset link is on the way</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 shadow-sm">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                          <Shield className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900">Secure Process</h3>
                          <p className="text-sm text-slate-600">Your account security is protected</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content - Success Message */}
              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-lg bg-white/80 backdrop-blur-xl border-0 shadow-2xl shadow-green-500/10 rounded-2xl p-8 text-center">
                  {/* Mobile Logo */}
                  <div className="lg:hidden flex justify-center mb-8">
                    <div className="flex items-center gap-3 group">
                      <div className="flex items-center gap-0.5">
                        <div className="w-1.5 h-8 bg-gradient-to-b from-blue-600 to-blue-700 rounded-full" />
                        <div className="w-1.5 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full opacity-80" />
                        <div className="w-1.5 h-8 bg-gradient-to-b from-blue-400 to-blue-500 rounded-full opacity-60" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xl font-bold tracking-tight text-slate-900">
                          PharmaCorp
                        </span>
                        <span className="text-xs tracking-[0.15em] text-slate-600 uppercase">
                          Medical Systems
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-lg">
                      <CheckCircle className="h-10 w-10 text-white" />
                    </div>

                    <div className="space-y-2">
                      <h1 className="text-3xl font-bold text-slate-900">
                        Check your email
                      </h1>
                      <p className="text-lg text-slate-600">
                        We've sent a password reset link to{' '}
                        <span className="font-semibold text-slate-900">{form.getValues('email')}</span>
                      </p>
                    </div>

                    <div className="space-y-4 pt-4">
                      <Button asChild className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
                        <Link to="/admin/login" className="flex items-center gap-3">
                          <ArrowLeft className="h-5 w-5" />
                          Back to sign in
                        </Link>
                      </Button>

                      <p className="text-sm text-slate-500">
                        Didn't receive the email? Check your spam folder or{' '}
                        <button
                          onClick={() => setIsSubmitted(false)}
                          className="text-blue-600 hover:text-blue-700 font-medium hover:underline"
                        >
                          try again
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-purple-600/5 -z-10" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Content - Branding */}
            <div className="hidden lg:block space-y-12">
              <div className="space-y-8">
                {/* Enhanced Logo */}
                <div className="flex items-center gap-4 group">
                  <div className="relative">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-12 bg-gradient-to-b from-blue-600 to-blue-700 rounded-full shadow-lg" />
                      <div className="w-2 h-12 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full shadow-lg opacity-80" />
                      <div className="w-2 h-12 bg-gradient-to-b from-blue-400 to-blue-500 rounded-full shadow-lg opacity-60" />
                    </div>
                    <div className="absolute -inset-2 bg-blue-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold tracking-tight text-slate-900">
                      PharmaCorp
                    </span>
                    <span className="text-sm tracking-[0.15em] text-slate-600 uppercase font-medium">
                      Medical Systems
                    </span>
                  </div>
                </div>

                {/* Password Reset Content */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h1 className="text-5xl font-bold text-slate-900 leading-tight">
                      Reset Your
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {" "}Password
                      </span>
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-md">
                      Secure password recovery for admin access.
                    </p>
                  </div>

                  {/* Security Indicators */}
                  <div className="grid grid-cols-1 gap-4 pt-6">
                    <div className="flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 shadow-sm">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                        <KeyRound className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">Secure Reset</h3>
                        <p className="text-sm text-slate-600">Time-limited reset links for security</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 shadow-sm">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">Account Protection</h3>
                        <p className="text-sm text-slate-600">Your account security remains intact</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Reset Form */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-lg bg-white/80 backdrop-blur-xl border-0 shadow-2xl shadow-blue-500/10 rounded-2xl p-8">
                {/* Mobile Logo */}
                <div className="lg:hidden flex justify-center mb-8">
                  <div className="flex items-center gap-3 group">
                    <div className="flex items-center gap-0.5">
                      <div className="w-1.5 h-8 bg-gradient-to-b from-blue-600 to-blue-700 rounded-full" />
                      <div className="w-1.5 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full opacity-80" />
                      <div className="w-1.5 h-8 bg-gradient-to-b from-blue-400 to-blue-500 rounded-full opacity-60" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xl font-bold tracking-tight text-slate-900">
                        PharmaCorp
                      </span>
                      <span className="text-xs tracking-[0.15em] text-slate-600 uppercase">
                        Medical Systems
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <h1 className="text-3xl font-bold text-slate-900">
                      Forgot your password?
                    </h1>
                    <p className="text-lg text-slate-600">
                      No worries! Enter your email and we'll send you a reset link.
                    </p>
                  </div>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                              <Mail className="w-4 h-4" />
                              Email Address
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="admin@pharmacorp.com"
                                type="email"
                                autoCapitalize="none"
                                autoComplete="email"
                                autoCorrect="off"
                                className="h-12 border-2 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 focus:ring-4 bg-white/90 backdrop-blur-sm text-slate-900 placeholder:text-slate-500 transition-all duration-200"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-red-600 font-medium flex items-center gap-1">
                              <span className="w-1 h-1 bg-red-500 rounded-full" />
                              {form.formState.errors.email?.message}
                            </FormMessage>
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <div className="flex items-center gap-3">
                            <Loader2 className="h-5 w-5 animate-spin" />
                            <span>Sending reset link...</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-3">
                            <span>Send reset link</span>
                            <ArrowRight className="h-5 w-5" />
                          </div>
                        )}
                      </Button>
                    </form>
                  </Form>

                  <div className="text-center">
                    <Link
                      to="/admin/login"
                      className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors hover:underline"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back to sign in
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
