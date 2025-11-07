<<<<<<< HEAD
import { AppRouter } from './components/routing/AppRouter';
import { Toaster } from 'sonner';

// Admin
import AdminPanel from './admin/AdminPanel';

export default function App() {
  return (
    <>
      <AppRouter />
      <Toaster position="top-right" richColors closeButton />
    </>
  );
}
