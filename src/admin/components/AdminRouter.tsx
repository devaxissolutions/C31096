import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { AdminLayout } from '../components/AdminLayout';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { LoginPage } from '../pages/LoginPage';

// Lazy load admin pages
const DashboardPage = lazy(() => import('../pages/DashboardPage').then(module => ({ default: module.DashboardPage })));
const ProductsPage = lazy(() => import('../pages/ProductsPage').then(module => ({ default: module.ProductsPage })));

// Loading component
const PageLoader: React.FC = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <Loader2 className="h-8 w-8 animate-spin" />
  </div>
);

// Placeholder pages for other sections
const PlaceholderPage: React.FC<{ title: string }> = ({ title }) => (
  <div className="space-y-6">
    <div>
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-muted-foreground">
        This page is under development.
      </p>
    </div>
  </div>
);

const TestimonialsPage = () => <PlaceholderPage title="Testimonials" />;
const TeamPage = () => <PlaceholderPage title="Team Members" />;
const InnovationsPage = () => <PlaceholderPage title="Innovations" />;
const GalleryPage = () => <PlaceholderPage title="Gallery" />;
const StatsPage = () => <PlaceholderPage title="Company Stats" />;
const ContactPage = () => <PlaceholderPage title="Contact Info" />;
const HomepagePage = () => <PlaceholderPage title="Homepage Sections" />;
const SettingsPage = () => <PlaceholderPage title="Settings" />;

export const AdminRouter: React.FC = () => {
  return (
    <Routes>
      {/* Login route */}
      <Route path="login" element={<LoginPage />} />

      {/* Root admin route - redirect to login if not authenticated */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Navigate to="dashboard" replace />
          </ProtectedRoute>
        }
      />

      {/* Default route - protected */}
      <Route
        path="*"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route
          index
          element={<Navigate to="dashboard" replace />}
        />
        <Route
          path="dashboard"
          element={
            <Suspense fallback={<PageLoader />}>
              <DashboardPage />
            </Suspense>
          }
        />
        <Route
          path="homepage"
          element={
            <Suspense fallback={<PageLoader />}>
              <HomepagePage />
            </Suspense>
          }
        />
        <Route
          path="products"
          element={
            <Suspense fallback={<PageLoader />}>
              <ProductsPage />
            </Suspense>
          }
        />
        <Route
          path="testimonials"
          element={
            <Suspense fallback={<PageLoader />}>
              <TestimonialsPage />
            </Suspense>
          }
        />
        <Route
          path="team"
          element={
            <Suspense fallback={<PageLoader />}>
              <TeamPage />
            </Suspense>
          }
        />
        <Route
          path="innovations"
          element={
            <Suspense fallback={<PageLoader />}>
              <InnovationsPage />
            </Suspense>
          }
        />
        <Route
          path="gallery"
          element={
            <Suspense fallback={<PageLoader />}>
              <GalleryPage />
            </Suspense>
          }
        />
        <Route
          path="stats"
          element={
            <Suspense fallback={<PageLoader />}>
              <StatsPage />
            </Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <Suspense fallback={<PageLoader />}>
              <ContactPage />
            </Suspense>
          }
        />
        <Route
          path="settings"
          element={
            <Suspense fallback={<PageLoader />}>
              <SettingsPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};