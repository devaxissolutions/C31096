import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Search, MoreHorizontal, ArrowUpDown } from 'lucide-react';
import { SortOption } from '../types';

interface Column<T> {
  key: keyof T;
  label: string;
  sortable?: boolean;
  render?: (value: any, item: T) => React.ReactNode;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
  onView?: (item: T) => void;
  searchPlaceholder?: string;
  onSearch?: (query: string) => void;
  onSort?: (sort: SortOption) => void;
  loading?: boolean;
}

export function DataTable<T extends { id: string }>({
  data,
  columns,
  onEdit,
  onDelete,
  onView,
  searchPlaceholder = 'Search...',
  onSearch,
  onSort,
  loading = false,
}: DataTableProps<T>) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [sortConfig, setSortConfig] = React.useState<SortOption | null>(null);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    onSearch?.(query);
  };

  const handleSort = (key: keyof T) => {
    const direction = sortConfig?.field === key && sortConfig.direction === 'asc' ? 'desc' : 'asc';
    const newSort: SortOption = { field: key as string, direction };
    setSortConfig(newSort);
    onSort?.(newSort);
  };

  const renderCell = (item: T, column: Column<T>) => {
    const value = item[column.key];
    if (column.render) {
      return column.render(value, item);
    }
    return String(value);
  };

  return (
    <div className="space-y-4">
      {onSearch && (
        <div className="flex items-center space-x-2">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={searchPlaceholder}
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>
      )}

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead key={String(column.key)}>
                  {column.sortable ? (
                    <Button
                      variant="ghost"
                      onClick={() => handleSort(column.key)}
                      className="h-auto p-0 font-medium"
                    >
                      {column.label}
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    column.label
                  )}
                </TableHead>
              ))}
              {(onEdit || onDelete || onView) && (
                <TableHead className="w-[70px]">Actions</TableHead>
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={columns.length + 1} className="text-center py-8">
                  Loading...
                </TableCell>
              </TableRow>
            ) : data.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length + 1} className="text-center py-8">
                  No data found
                </TableCell>
              </TableRow>
            ) : (
              data.map((item) => (
                <TableRow key={item.id}>
                  {columns.map((column) => (
                    <TableCell key={String(column.key)}>
                      {renderCell(item, column)}
                    </TableCell>
                  ))}
                  {(onEdit || onDelete || onView) && (
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          {onView && (
                            <DropdownMenuItem onClick={() => onView(item)}>
                              View
                            </DropdownMenuItem>
                          )}
                          {onEdit && (
                            <DropdownMenuItem onClick={() => onEdit(item)}>
                              Edit
                            </DropdownMenuItem>
                          )}
                          {onDelete && (
                            <DropdownMenuItem
                              onClick={() => onDelete(item)}
                              className="text-red-600"
                            >
                              Delete
                            </DropdownMenuItem>
                          )}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  )}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}