import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import {
  BarChart3,
  FileText,
  Users,
  Image,
  Settings,
  LogOut,
  Home,
  Lightbulb,
  Trophy,
  Phone,
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ThemeToggle } from './theme-toggle';
import { useAuth } from '../hooks/use-auth';

const menuItems = [
  {
    title: 'Dashboard',
    url: 'dashboard',
    icon: BarChart3,
  },
  {
    title: 'Homepage',
    url: 'homepage',
    icon: Home,
  },
  {
    title: 'Products',
    url: 'products',
    icon: FileText,
  },
  {
    title: 'Testimonials',
    url: 'testimonials',
    icon: Users,
  },
  {
    title: 'Team',
    url: 'team',
    icon: Users,
  },
  {
    title: 'Innovations',
    url: 'innovations',
    icon: Lightbulb,
  },
  {
    title: 'Gallery',
    url: 'gallery',
    icon: Image,
  },
  {
    title: 'Company Stats',
    url: 'stats',
    icon: Trophy,
  },
  {
    title: 'Contact Info',
    url: 'contact',
    icon: Phone,
  },
  {
    title: 'Settings',
    url: 'settings',
    icon: Settings,
  },
];

export const AdminLayout: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <SidebarHeader className="border-b px-6 py-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <BarChart3 className="h-4 w-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold">Admin Panel</span>
                <span className="text-xs text-muted-foreground">Content Management</span>
              </div>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link to={item.url}>
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="border-t p-4">
            <div className="flex items-center gap-3 mb-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={user?.avatar} alt={user?.name} />
                <AvatarFallback>
                  {user?.name?.split(' ').map(n => n[0]).join('').toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col flex-1 min-w-0">
                <span className="text-sm font-medium truncate">{user?.name}</span>
                <span className="text-xs text-muted-foreground capitalize">{user?.role}</span>
              </div>
            </div>
            <div className="flex gap-2">
              <ThemeToggle />
              <Button
                variant="outline"
                size="sm"
                onClick={logout}
                className="flex-1"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>

        <div className="flex-1 flex flex-col">
          <header className="border-b bg-background px-6 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <SidebarTrigger />
                <h1 className="text-lg font-semibold">Admin Dashboard</h1>
              </div>
              <div className="flex items-center gap-4">
                <ThemeToggle />
              </div>
            </div>
          </header>

          <main className="flex-1 overflow-auto p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};