// Authentication types
export type UserRole = 'admin' | 'editor' | 'viewer';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  createdAt: Date;
  lastLogin?: Date;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

// Content management types
export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
}

export interface Product extends BaseEntity {
  name: string;
  description: string;
  price?: number;
  category: string;
  images: string[];
  isActive: boolean;
  order: number;
}

export interface Testimonial extends BaseEntity {
  clientName: string;
  company: string;
  rating: number;
  review: string;
  photo?: string;
  isActive: boolean;
  order: number;
}

export interface TeamMember extends BaseEntity {
  name: string;
  position: string;
  bio: string;
  photo: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
  isActive: boolean;
  order: number;
}

export interface Innovation extends BaseEntity {
  title: string;
  description: string;
  images: string[];
  publicationDate: Date;
  category: string;
  isActive: boolean;
  order: number;
}

export interface GalleryItem extends BaseEntity {
  title: string;
  image: string;
  altText: string;
  caption?: string;
  category: string;
  isActive: boolean;
  order: number;
}

export interface CompanyStat extends BaseEntity {
  title: string;
  value: string;
  description?: string;
  icon?: string;
  isActive: boolean;
  order: number;
}

export interface ContactInfo extends BaseEntity {
  type: 'address' | 'phone' | 'email' | 'social' | 'hours';
  label: string;
  value: string;
  icon?: string;
  isActive: boolean;
  order: number;
}

// Homepage sections
export interface HeroSection extends BaseEntity {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  ctaText: string;
  ctaLink: string;
  isActive: boolean;
}

export interface AboutSection extends BaseEntity {
  title: string;
  content: string;
  image?: string;
  isActive: boolean;
}

export interface Feature extends BaseEntity {
  title: string;
  description: string;
  icon?: string;
  isActive: boolean;
  order: number;
}

export interface CTASection extends BaseEntity {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
  isActive: boolean;
}

// API response types
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Form types
export interface LoginForm {
  email: string;
  password: string;
}

export interface ProductForm {
  name: string;
  description: string;
  price?: number;
  category: string;
  images: string[];
  isActive: boolean;
}

export interface TestimonialForm {
  clientName: string;
  company: string;
  rating: number;
  review: string;
  photo?: string;
  isActive: boolean;
}

export interface TeamMemberForm {
  name: string;
  position: string;
  bio: string;
  photo: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
  isActive: boolean;
}

// Dashboard types
export interface DashboardMetrics {
  totalVisitors: number;
  totalRevenue: number;
  totalContentItems: number;
  activeUsers: number;
}

export interface ActivityItem {
  id: string;
  type: 'create' | 'update' | 'delete';
  entity: string;
  entityId: string;
  description: string;
  user: string;
  timestamp: Date;
}

// Filter and search types
export interface SearchFilters {
  query?: string;
  category?: string;
  isActive?: boolean;
  dateRange?: {
    start: Date;
    end: Date;
  };
}

export interface SortOption {
  field: string;
  direction: 'asc' | 'desc';
}