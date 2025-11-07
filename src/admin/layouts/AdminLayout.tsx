import { Outlet } from 'react-router-dom';
import { AdminSidebar } from '../components/sidebar/AdminSidebar';
import { AdminHeader } from '../components/header/AdminHeader';

export function AdminLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <AdminSidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <AdminHeader />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mx-auto max-w-7xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
