import { useState } from 'react';
import { Plus, Eye, Edit, Trash2, Clock, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MetricCardGrid } from '@/admin/components/dashboard/MetricCard';
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

// Recent activity data
const recentActivity = [
  {
    id: 1,
    type: 'new_user',
    title: 'New user registered',
    description: 'John Doe (john@example.com) signed up',
    timestamp: '2023-06-14T10:30:00Z',
    status: 'success',
  },
  {
    id: 2,
    type: 'content_update',
    title: 'Homepage updated',
    description: 'Hero section content was modified',
    timestamp: '2023-06-14T09:15:00Z',
    status: 'info',
  },
  {
    id: 3,
    type: 'error',
    title: 'API Error',
    description: 'Failed to fetch analytics data',
    timestamp: '2023-06-14T08:45:00Z',
    status: 'error',
  },
  {
    id: 4,
    type: 'new_content',
    title: 'New blog post',
    description: 'Post "Getting Started with Next.js 13" was published',
    timestamp: '2023-06-13T16:20:00Z',
    status: 'success',
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
  const [timeRange, setTimeRange] = useState('week');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening with your business.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="h-8">
            <Plus className="mr-2 h-4 w-4" />
            Add New
          </Button>
        </div>
      </div>

      {/* Metrics Grid */}
      <MetricCardGrid />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Revenue Chart */}
        <Card className="col-span-4">
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="space-y-1">
              <CardTitle>Revenue Overview</CardTitle>
              <p className="text-sm text-muted-foreground">
                Performance over time
              </p>
            </div>
            <Tabs 
              defaultValue="week" 
              className="w-[200px]"
              onValueChange={setTimeRange}
            >
              <TabsList>
                <TabsTrigger value="week">Week</TabsTrigger>
                <TabsTrigger value="month">Month</TabsTrigger>
                <TabsTrigger value="year">Year</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={monthlyData}
                  margin={{
                    top: 5,
                    right: 10,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fill: '#6b7280' }}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fill: '#6b7280' }}
                    tickFormatter={(value) => `$${value}`}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'white',
                      borderRadius: '0.5rem',
                      border: '1px solid #e5e7eb',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                    }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    dot={false}
                    name="Revenue"
                  />
                  <Line
                    type="monotone"
                    dataKey="visitors"
                    stroke="#10b981"
                    strokeWidth={2}
                    dot={false}
                    name="Visitors"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <p className="text-sm text-muted-foreground">
              Latest actions in your dashboard
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start">
                  <div className="mr-3 mt-0.5">
                    <ActivityIcon status={activity.status} />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {activity.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {activity.description}
                    </p>
                    <div className="flex items-center pt-1 text-xs text-muted-foreground">
                      <Clock className="mr-1 h-3 w-3" />
                      {new Date(activity.timestamp).toLocaleString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="ghost" className="mt-4 w-full text-sm">
              View all activity
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Additional Charts */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false}
                  tick={{ fill: '#6b7280' }}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false}
                  tick={{ fill: '#6b7280' }}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'white',
                    borderRadius: '0.5rem',
                    border: '1px solid #e5e7eb',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                  }}
                />
                <Bar dataKey="users" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="h-24 flex-col items-center justify-center">
              <Plus className="mb-2 h-6 w-6" />
              New Post
            </Button>
            <Button variant="outline" className="h-24 flex-col items-center justify-center">
              <Edit className="mb-2 h-6 w-6" />
              Edit Content
            </Button>
            <Button variant="outline" className="h-24 flex-col items-center justify-center">
              <Eye className="mb-2 h-6 w-6" />
              View Site
            </Button>
            <Button variant="outline" className="h-24 flex-col items-center justify-center">
              <Trash2 className="mb-2 h-6 w-6" />
              Trash
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
