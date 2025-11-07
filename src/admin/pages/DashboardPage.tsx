import { useState } from 'react';
import { Plus, Eye, Edit, Trash2, Clock, CheckCircle2, XCircle, AlertCircle, Activity, FileText, Users, DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MetricCard } from '@/admin/components/dashboard/MetricCard';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from 'recharts';

// Mock data for charts
const monthlyData = [
  { name: 'Jan', visitors: 4000, revenue: 2400, users: 2400 },
  { name: 'Feb', visitors: 3000, revenue: 1398, users: 2210 },
  { name: 'Mar', visitors: 2000, revenue: 9800, users: 2290 },
  { name: 'Apr', visitors: 2780, revenue: 3908, users: 2000 },
  { name: 'May', visitors: 1890, revenue: 4800, users: 2181 },
  { name: 'Jun', visitors: 2390, revenue: 3800, users: 2500 },
  { name: 'Jul', visitors: 3490, revenue: 4300, users: 2100 },
];

type ActivityType = 'new_user' | 'content_update' | 'error' | 'new_content';

interface Activity {
  id: number;
  type: ActivityType;
  title: string;
  description: string;
  timestamp: string;
  status: 'success' | 'info' | 'error';
  entity?: string;
  user?: string;
}

const recentActivity: Activity[] = [
  {
    id: 1,
    type: 'new_user',
    title: 'New user registered',
    description: 'John Doe (john@example.com) signed up',
    timestamp: '2 hours ago',
    status: 'success',
    entity: 'User',
    user: 'System'
  },
  {
    id: 2,
    type: 'content_update',
    title: 'Homepage updated',
    description: 'Hero section content was modified',
    timestamp: '4 hours ago',
    status: 'info',
    entity: 'Page',
    user: 'John Doe'
  },
  {
    id: 3,
    type: 'error',
    title: 'API Error',
    description: 'Failed to fetch analytics data',
    timestamp: '6 hours ago',
    status: 'error',
    entity: 'System',
    user: 'System'
  },
  {
    id: 4,
    type: 'new_content',
    title: 'New blog post',
    description: 'Post "Getting Started with Next.js 13" was published',
    timestamp: '1 day ago',
    status: 'success',
    entity: 'Blog',
    user: 'Jane Smith'
  },
];

const metrics = [
  {
    title: 'Total Revenue',
    value: '$45,231',
    change: '+20.1% from last month',
    icon: DollarSign,
  },
  {
    title: 'Active Users',
    value: '2,345',
    change: '+180.1% from last month',
    icon: Users,
  },
  {
    title: 'Content Items',
    value: '1,234',
    change: '+19% from last month',
    icon: FileText,
  },
  {
    title: 'Active Now',
    value: '573',
    change: '+201 since last hour',
    icon: Activity,
  },
];

const chartData = [
  { name: 'Jan', visitors: 4000, revenue: 2400 },
  { name: 'Feb', visitors: 3000, revenue: 1398 },
  { name: 'Mar', visitors: 2000, revenue: 9800 },
  { name: 'Apr', visitors: 2780, revenue: 3908 },
  { name: 'May', visitors: 1890, revenue: 4800 },
  { name: 'Jun', visitors: 2390, revenue: 3800 },
];

const quickActions = [
  {
    title: 'Add Product',
    description: 'Create a new product listing',
    icon: Plus,
    href: '/admin/products/new',
  },
  {
    title: 'Add Testimonial',
    description: 'Add customer testimonial',
    icon: Users,
    href: '/admin/testimonials/new',
  },
  {
    title: 'Upload Image',
    description: 'Add to gallery',
    icon: Plus,
    href: '/admin/gallery/new',
  },
];

const ActivityIcon = ({ status }: { status: string }) => {
  switch (status) {
    case 'success':
      return <CheckCircle2 className="h-4 w-4 text-green-500" />;
    case 'error':
      return <XCircle className="h-4 w-4 text-red-500" />;
    case 'info':
    default:
      return <AlertCircle className="h-4 w-4 text-blue-500" />;
  }
};

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening with your business.
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {metric.title}
              </CardTitle>
              <div className="h-4 w-4 text-muted-foreground">
                <metric.icon className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className="text-xs text-muted-foreground">
                {metric.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={chartData}
                  margin={{
                    top: 5,
                    right: 10,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="name"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#8884d8"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest actions in your system</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Activity className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.entity}</p>
                    <p className="text-sm text-muted-foreground">{activity.description}</p>
                    <p className="text-xs text-muted-foreground">
                      by {activity.user} • {activity.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}