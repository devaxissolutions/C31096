import React, { useState } from 'react';
import { Plus, Eye } from 'lucide-react';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DataTable } from '../components/DataTable';
import { FormDialog } from '../components/FormDialog';
import { ConfirmDialog } from '../components/ConfirmDialog';
import { Product } from '../types';
import { productsService } from '../../lib/firebaseUtils';
import { uploadFile, validateFile, FILE_TYPES } from '../../lib/storageUtils';
import { firestoreToRegular } from '../../lib/typeConverters';
import { useProducts } from '../../hooks/useFirestoreCollection';
import { toast } from 'sonner';

// Mock data - replace with API calls
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Advanced Analytics Tool',
    description: 'Comprehensive analytics platform for business intelligence',
    price: 99.99,
    category: 'Software',
    images: ['/images/product1.jpg'],
    isActive: true,
    order: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    createdBy: 'admin',
    updatedBy: 'admin',
  },
  {
    id: '2',
    name: 'Cloud Storage Solution',
    description: 'Secure and scalable cloud storage for enterprises',
    price: 49.99,
    category: 'Cloud Services',
    images: ['/images/product2.jpg'],
    isActive: true,
    order: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
    createdBy: 'admin',
    updatedBy: 'admin',
  },
];

const productSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().min(1, 'Description is required'),
  price: z.number().optional(),
  category: z.string().min(1, 'Category is required'),
  images: z.array(z.string()).min(1, 'At least one image is required'),
  isActive: z.boolean(),
});

const formFields = [
  { name: 'name', label: 'Product Name', type: 'text' as const, required: true },
  { name: 'description', label: 'Description', type: 'textarea' as const, required: true },
  { name: 'price', label: 'Price', type: 'number' as const },
  {
    name: 'category',
    label: 'Category',
    type: 'select' as const,
    required: true,
    options: [
      { value: 'Software', label: 'Software' },
      { value: 'Hardware', label: 'Hardware' },
      { value: 'Cloud Services', label: 'Cloud Services' },
      { value: 'Consulting', label: 'Consulting' },
    ],
  },
  { name: 'images', label: 'Images', type: 'file' as const, required: true, multiple: true },
  { name: 'isActive', label: 'Active', type: 'switch' as const },
];

export const ProductsPage: React.FC = () => {
  const { data: firestoreProducts, loading, error } = useProducts();
  const [searchQuery, setSearchQuery] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Convert Firestore products to regular Product type
  const products: Product[] = firestoreProducts?.map(firestoreToRegular) || [];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const columns = [
    {
      key: 'name' as keyof Product,
      label: 'Name',
      sortable: true,
    },
    {
      key: 'category' as keyof Product,
      label: 'Category',
      sortable: true,
    },
    {
      key: 'price' as keyof Product,
      label: 'Price',
      render: (value: number) => value ? `$${value}` : 'N/A',
    },
    {
      key: 'isActive' as keyof Product,
      label: 'Status',
      render: (value: boolean) => (
        <Badge variant={value ? 'default' : 'secondary'}>
          {value ? 'Active' : 'Inactive'}
        </Badge>
      ),
    },
  ];

  const handleCreate = () => {
    setSelectedProduct(null);
    setIsEditing(false);
    setDialogOpen(true);
  };

  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
    setIsEditing(true);
    setDialogOpen(true);
  };

  const handleDelete = (product: Product) => {
    setSelectedProduct(product);
    setConfirmOpen(true);
  };

  const handleSubmit = async (data: any) => {
    setSubmitting(true);
    try {
      let imageUrls: string[] = [];

      // Handle file uploads if images are provided
      if (data.images && data.images.length > 0) {
        const uploadPromises = data.images.map(async (file: File) => {
          const validation = validateFile(file, [...FILE_TYPES.IMAGES], 5); // 5MB limit
          if (!validation.isValid) {
            throw new Error(validation.error);
          }
          const result = await uploadFile(file, 'products/');
          return result.downloadURL;
        });

        imageUrls = await Promise.all(uploadPromises);
      }

      const productData = {
        ...data,
        images: imageUrls,
        order: isEditing ? selectedProduct?.order : (products.length + 1),
      };

      if (isEditing && selectedProduct) {
        await productsService.update(selectedProduct.id, productData);
        toast.success('Product updated successfully');
      } else {
        await productsService.create(productData);
        toast.success('Product created successfully');
      }

      setDialogOpen(false);
      setSelectedProduct(null);
      setIsEditing(false);
    } catch (error: any) {
      console.error('Failed to save product:', error);
      toast.error('Failed to save product', {
        description: error.message || 'An unexpected error occurred',
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleConfirmDelete = async () => {
    if (!selectedProduct) return;

    setSubmitting(true);
    try {
      await productsService.delete(selectedProduct.id);
      toast.success('Product deleted successfully');
      setConfirmOpen(false);
      setSelectedProduct(null);
    } catch (error: any) {
      console.error('Failed to delete product:', error);
      toast.error('Failed to delete product', {
        description: error.message || 'An unexpected error occurred',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Products</h1>
          <p className="text-muted-foreground">
            Manage your product catalog and offerings
          </p>
        </div>
        <Button onClick={handleCreate}>
          <Plus className="h-4 w-4 mr-2" />
          Add Product
        </Button>
      </div>

      <DataTable
        data={filteredProducts}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onSearch={setSearchQuery}
        searchPlaceholder="Search products..."
        loading={loading || submitting}
      />

      <FormDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        title={isEditing ? 'Edit Product' : 'Add New Product'}
        description={isEditing ? 'Update product information' : 'Create a new product listing'}
        fields={formFields}
        schema={productSchema}
        defaultValues={selectedProduct || { isActive: true, images: [] }}
        onSubmit={handleSubmit}
        submitLabel={isEditing ? 'Update' : 'Create'}
        loading={submitting}
      />

      <ConfirmDialog
        open={confirmOpen}
        onOpenChange={setConfirmOpen}
        title="Delete Product"
        description={`Are you sure you want to delete "${selectedProduct?.name}"? This action cannot be undone.`}
        confirmLabel="Delete"
        onConfirm={handleConfirmDelete}
        loading={submitting}
        variant="destructive"
      />
    </div>
  );
};