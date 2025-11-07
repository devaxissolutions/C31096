import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2 } from 'lucide-react';

interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'textarea' | 'number' | 'select' | 'switch' | 'file';
  placeholder?: string;
  options?: { value: string; label: string }[];
  required?: boolean;
  multiple?: boolean; // For file inputs
}

interface FormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  fields: FormField[];
  schema: z.ZodSchema<any>;
  defaultValues?: Record<string, any>;
  onSubmit: (data: any) => Promise<void>;
  submitLabel?: string;
  loading?: boolean;
}

export function FormDialog({
  open,
  onOpenChange,
  title,
  description,
  fields,
  schema,
  defaultValues,
  onSubmit,
  submitLabel = 'Save',
  loading = false,
}: FormDialogProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm({
    resolver: zodResolver(schema as any),
    defaultValues,
  });

  React.useEffect(() => {
    if (open && defaultValues) {
      reset(defaultValues);
    }
  }, [open, defaultValues, reset]);

  const handleFormSubmit = async (data: any) => {
    try {
      await onSubmit(data);
      onOpenChange(false);
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  const renderField = (field: FormField) => {
    const error = errors[field.name]?.message as string;

    switch (field.type) {
      case 'textarea':
        return (
          <Textarea
            {...register(field.name)}
            placeholder={field.placeholder}
            className={error ? 'border-red-500' : ''}
          />
        );

      case 'select':
        return (
          <Select onValueChange={(value) => setValue(field.name, value)}>
            <SelectTrigger className={error ? 'border-red-500' : ''}>
              <SelectValue placeholder={field.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {field.options?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      case 'switch':
        return (
          <Switch
            checked={watch(field.name)}
            onCheckedChange={(checked) => setValue(field.name, checked)}
          />
        );

      case 'number':
        return (
          <Input
            type="number"
            {...register(field.name, { valueAsNumber: true })}
            placeholder={field.placeholder}
            className={error ? 'border-red-500' : ''}
          />
        );

      case 'file':
        return (
          <Input
            type="file"
            {...register(field.name)}
            className={error ? 'border-red-500' : ''}
            accept="image/*"
            multiple={field.multiple}
            onChange={(e) => {
              const files = e.target.files;
              if (files) {
                setValue(field.name, field.multiple ? Array.from(files) : files[0]);
              }
            }}
          />
        );

      default:
        return (
          <Input
            type={field.type}
            {...register(field.name)}
            placeholder={field.placeholder}
            className={error ? 'border-red-500' : ''}
          />
        );
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>

        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
          {fields.map((field) => (
            <div key={field.name} className="space-y-2">
              <Label htmlFor={field.name}>
                {field.label}
                {field.required && <span className="text-red-500 ml-1">*</span>}
              </Label>
              {renderField(field)}
              {errors[field.name] && (
                <p className="text-sm text-red-500">
                  {errors[field.name]?.message as string}
                </p>
              )}
            </div>
          ))}

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {submitLabel}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}