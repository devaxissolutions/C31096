import * as React from 'react';
import { Table } from '@tanstack/react-table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { X, Search } from 'lucide-react';
import { DataTableFacetedFilter } from './data-table-faceted-filter';
import { DataTableViewOptions } from './data-table-view-options';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  searchKey: string;
  filterOptions?: {
    label: string;
    value: string;
    options: { label: string; value: string }[];
  }[];
}

export function DataTableToolbar<TData>({
  table,
  searchKey,
  filterOptions = [],
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={`Search ${searchKey}...`}
            value={(table.getColumn(searchKey)?.getFilterValue() as string) ?? ''}
            onChange={(event) =>
              table.getColumn(searchKey)?.setFilterValue(event.target.value)
            }
            className="h-9 w-full pl-8"
          />
          {(table.getColumn(searchKey)?.getFilterValue() as string) && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 h-6 w-6 -translate-y-1/2"
              onClick={() => table.getColumn(searchKey)?.setFilterValue('')}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Clear search</span>
            </Button>
          )}
        </div>
        
        {filterOptions.map((filter) => (
          <DataTableFacetedFilter
            key={filter.value}
            column={table.getColumn(filter.value)}
            title={filter.label}
            options={filter.options}
          />
        ))}
        
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      
      <DataTableViewOptions table={table} />
    </div>
  );
}
