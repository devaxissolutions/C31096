import { NavLink, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { LayoutDashboard, Box, Users, MessageSquare, Settings, FileText, Image, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

type NavItem = {
  title: string;
  href: string;
  icon: React.ReactNode;
  items?: NavItem[];
};

const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/admin',
    icon: <LayoutDashboard className="h-4 w-4" />,
  },
  {
    title: 'Content',
    href: '/admin/content',
    icon: <FileText className="h-4 w-4" />,
    items: [
      { title: 'Pages', href: '/admin/content/pages', icon: <FileText className="h-4 w-4" /> },
      { title: 'Posts', href: '/admin/content/posts', icon: <FileText className="h-4 w-4" /> },
    ],
  },
  {
    title: 'Media',
    href: '/admin/media',
    icon: <Image className="h-4 w-4" />,
  },
  {
    title: 'Testimonials',
    href: '/admin/testimonials',
    icon: <Star className="h-4 w-4" />,
  },
  {
    title: 'Team',
    href: '/admin/team',
    icon: <Users className="h-4 w-4" />,
  },
  {
    title: 'Settings',
    href: '/admin/settings',
    icon: <Settings className="h-4 w-4" />,
  },
];

export function AdminSidebar() {
  const location = useLocation();

  const renderNavItems = (items: NavItem[], level = 0) => {
    return items.map((item) => (
      <div key={item.href} className="space-y-1">
        <NavLink
          to={item.href}
          className={({ isActive }) =>
            cn(
              'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
              isActive
                ? 'bg-accent text-accent-foreground'
                : 'text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground',
              level > 0 && 'ml-4 text-sm',
            )
          }
        >
          <span className="flex items-center gap-2">
            {item.icon}
            {item.title}
          </span>
        </NavLink>
        {item.items && (
          <div className="mt-1 space-y-1">
            {renderNavItems(item.items, level + 1)}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="hidden border-r bg-background md:flex md:flex-col md:w-64">
      <div className="flex h-16 items-center border-b px-4">
        <h1 className="text-xl font-semibold">Admin Panel</h1>
      </div>
      <ScrollArea className="flex-1 px-3 py-4">
        <nav className="space-y-2">
          {renderNavItems(navItems)}
        </nav>
      </ScrollArea>
      <div className="border-t p-4">
        <div className="text-sm text-muted-foreground">v1.0.0</div>
      </div>
    </div>
  );
}
