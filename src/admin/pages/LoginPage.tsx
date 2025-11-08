import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Loader2, Shield, Award, Globe, Lock, Mail, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useAuth } from '../hooks/use-auth';

const loginSchema = z.object({
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  password: z.string().min(6, 'Password must be at least 6 characters').min(1, 'Password is required'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [error, setError] = React.useState<string>('');
  const { login, isLoading, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // Redirect to dashboard if already authenticated
  React.useEffect(() => {
    if (isAuthenticated) {
      console.log('User already authenticated, redirecting to dashboard');
      navigate('/admin/dashboard', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  // Ensure form is properly initialized
  React.useEffect(() => {
    reset({
      email: '',
      password: '',
    });
  }, [reset]);

  const onSubmit = async (data: LoginFormData) => {
    try {
      setError('');

      // Trim and validate inputs
      const trimmedEmail = data.email?.trim();
      const trimmedPassword = data.password?.trim();

      if (!trimmedEmail || !trimmedPassword) {
        const errorMsg = 'Please fill in both email and password fields.';
        setError(errorMsg);
        toast.error(errorMsg);
        return;
      }

      if (typeof trimmedEmail !== 'string' || typeof trimmedPassword !== 'string') {
        const errorMsg = 'Invalid input types. Please try again.';
        setError(errorMsg);
        toast.error(errorMsg);
        return;
      }

      console.log('Starting login process...');

      // Call login with validated data and wait for completion
      await login({
        email: trimmedEmail,
        password: trimmedPassword,
      });

      // Login successful - the auth state change will trigger navigation
      console.log('Login successful, auth state will update...');
      toast.success('Login successful! Redirecting to dashboard...');
      
      // Navigate to dashboard after successful login
      navigate('/admin/dashboard', { replace: true });
    } catch (err) {
      console.error('Login error:', err);
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred during login.';
      setError(errorMessage);
      toast.error(errorMessage);
    }
  };

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

            {/* Left Content - Enhanced Branding */}
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

                {/* Hero Content */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h1 className="text-5xl font-bold text-slate-900 leading-tight">
                      Admin
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {" "}Portal
                      </span>
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-md">
                      Secure access to your content management and administrative dashboard.
                    </p>
                  </div>

                  {/* Enhanced Trust Indicators */}
                  <div className="grid grid-cols-1 gap-4 pt-6">
                    <div className="flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">Enterprise Security</h3>
                        <p className="text-sm text-slate-600">Bank-level encryption and authentication</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">GMP Compliant</h3>
                        <p className="text-sm text-slate-600">Meets pharmaceutical industry standards</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">Global Standards</h3>
                        <p className="text-sm text-slate-600">International compliance and accessibility</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Professional Login Form */}
            <div className="flex justify-center lg:justify-end">
              <Card className="w-full max-w-lg bg-white/80 backdrop-blur-xl border-0 shadow-2xl shadow-blue-500/10">
                <CardHeader className="space-y-4 pb-8 text-center">
                  {/* Mobile Logo */}
                  <div className="lg:hidden flex justify-center mb-6">
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

                  <div className="space-y-2">
                    <CardTitle className="text-3xl font-bold text-slate-900">
                      Welcome Back
                    </CardTitle>
                    <CardDescription className="text-lg text-slate-600">
                      Sign in to your admin account
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {error && (
                    <Alert variant="destructive" className="border-red-200 bg-red-50/80 backdrop-blur-sm">
                      <AlertDescription className="text-red-800 font-medium">
                        {error}
                      </AlertDescription>
                    </Alert>
                  )}

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Email Address
                      </Label>
                      <div className="relative">
                      <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                          <Input
                            {...field}
                            id="email"
                            type="email"
                            placeholder="admin@pharmacorp.com"
                            className={`h-12 pl-4 pr-4 border-2 transition-all duration-200 bg-white/90 backdrop-blur-sm text-slate-900 placeholder:text-slate-500 ${
                              errors.email
                                ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20'
                                : 'border-slate-200 focus:border-blue-500 focus:ring-blue-500/20'
                            } focus:ring-4`}
                          />
                        )}
                      />
                      </div>
                      {errors.email && (
                        <p className="text-sm text-red-600 font-medium flex items-center gap-1">
                          <span className="w-1 h-1 bg-red-500 rounded-full" />
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                        <Lock className="w-4 h-4" />
                        Password
                      </Label>
                      <div className="relative">
                      <Controller
                        name="password"
                        control={control}
                        render={({ field }) => (
                          <Input
                            {...field}
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter your password"
                            className={`h-12 pl-4 pr-12 border-2 transition-all duration-200 bg-white/90 backdrop-blur-sm text-slate-900 placeholder:text-slate-500 ${
                              errors.password
                                ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20'
                                : 'border-slate-200 focus:border-blue-500 focus:ring-blue-500/20'
                            } focus:ring-4`}
                          />
                        )}
                      />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-1 top-1 h-10 w-10 hover:bg-slate-100 transition-colors"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5 text-slate-500" />
                          ) : (
                            <Eye className="h-5 w-5 text-slate-500" />
                          )}
                        </Button>
                      </div>
                      {errors.password && (
                        <p className="text-sm text-red-600 font-medium flex items-center gap-1">
                          <span className="w-1 h-1 bg-red-500 rounded-full" />
                          {errors.password.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-3">
                          <Loader2 className="h-5 w-5 animate-spin" />
                          <span>Signing in...</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-3">
                          <span>Sign In to Dashboard</span>
                          <ArrowRight className="h-5 w-5" />
                        </div>
                      )}
                    </Button>
                  </form>

                  <div className="text-center">
                    <Link
                      to="/admin/forgot-password"
                      className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors hover:underline"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};