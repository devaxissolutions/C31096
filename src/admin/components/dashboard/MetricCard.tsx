import { ArrowUp, ArrowDown, TrendingUp, Users, FileText, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type MetricCardProps = {
  title: string;
  value: string | number;
  change: number;
  icon?: React.ReactNode;
  className?: string;
};

export function MetricCard({ title, value, change, icon, className }: MetricCardProps) {
  const isPositive = change >= 0;
  
  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="rounded-md bg-primary/10 p-2 text-primary">
          {icon || <TrendingUp className="h-4 w-4" />}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className={cn(
          'text-xs mt-1 flex items-center',
          isPositive ? 'text-green-500' : 'text-red-500'
        )}>
          {isPositive ? (
            <ArrowUp className="mr-1 h-3 w-3" />
          ) : (
            <ArrowDown className="mr-1 h-3 w-3" />
          )}
          {Math.abs(change)}% from last month
        </p>
      </CardContent>
    </Card>
  );
}

type MetricCardGridProps = {
  className?: string;
};

export function MetricCardGrid({ className }: MetricCardGridProps) {
  const metrics = [
    {
      title: 'Total Visitors',
      value: '12,345',
      change: 12.5,
      icon: <Users className="h-4 w-4" />,
    },
    {
      title: 'Total Revenue',
      value: '$45,231',
      change: 8.2,
      icon: <TrendingUp className="h-4 w-4" />,
    },
    {
      title: 'Active Users',
      value: '2,345',
      change: -2.3,
      icon: <Users className="h-4 w-4" />,
    },
    {
      title: 'Content Items',
      value: '1,234',
      change: 5.7,
      icon: <FileText className="h-4 w-4" />,
    },
    {
      title: 'Testimonials',
      value: '89',
      change: 15.2,
      icon: <MessageSquare className="h-4 w-4" />,
    },
  ];

  return (
    <div className={cn('grid gap-4 md:grid-cols-2 lg:grid-cols-5', className)}>
      {metrics.map((metric, index) => (
        <MetricCard
          key={index}
          title={metric.title}
          value={metric.value}
          change={metric.change}
          icon={metric.icon}
        />
      ))}
    </div>
  );
}
