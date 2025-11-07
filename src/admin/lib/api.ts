// API integration examples for the admin panel

// Base API configuration
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://api.example.com';

// Generic API response type
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
  errors?: string[];
}

// REST API Client
export class RestApiClient {
  private baseURL: string;
  private token?: string;

  constructor(baseURL: string = API_BASE_URL) {
    this.baseURL = baseURL;
  }

  setToken(token: string) {
    this.token = token;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseURL}${endpoint}`;

    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...(this.token && { Authorization: `Bearer ${this.token}` }),
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'API request failed');
      }

      return data;
    } catch (error) {
      console.error('API request error:', error);
      throw error;
    }
  }

  // Generic CRUD operations
  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint);
  }

  async post<T>(endpoint: string, data: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async put<T>(endpoint: string, data: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'DELETE',
    });
  }

  // Pagination support
  async getPaginated<T>(
    endpoint: string,
    page: number = 1,
    limit: number = 10,
    filters?: Record<string, any>
  ): Promise<ApiResponse<{ data: T[]; total: number; page: number; limit: number }>> {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      ...filters,
    });

    return this.request(`${endpoint}?${params}`);
  }
}

// Firebase API Client (example implementation)
export class FirebaseApiClient {
  private db: any; // Would be firebase.firestore.Firestore in real implementation

  constructor(firebaseConfig?: any) {
    // Initialize Firebase if config provided
    if (firebaseConfig) {
      // firebase.initializeApp(firebaseConfig);
      // this.db = firebase.firestore();
    }
  }

  // Example CRUD operations with Firebase
  async getCollection<T>(collectionName: string): Promise<T[]> {
    try {
      // const snapshot = await this.db.collection(collectionName).get();
      // return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      // Mock implementation
      console.log(`Getting collection: ${collectionName}`);
      return [];
    } catch (error) {
      console.error('Firebase get error:', error);
      throw error;
    }
  }

  async addDocument<T>(collectionName: string, data: Omit<T, 'id'>): Promise<string> {
    try {
      // const docRef = await this.db.collection(collectionName).add(data);
      // return docRef.id;

      // Mock implementation
      console.log(`Adding document to ${collectionName}:`, data);
      return Date.now().toString();
    } catch (error) {
      console.error('Firebase add error:', error);
      throw error;
    }
  }

  async updateDocument<T>(
    collectionName: string,
    id: string,
    data: Partial<T>
  ): Promise<void> {
    try {
      // await this.db.collection(collectionName).doc(id).update(data);

      // Mock implementation
      console.log(`Updating document ${id} in ${collectionName}:`, data);
    } catch (error) {
      console.error('Firebase update error:', error);
      throw error;
    }
  }

  async deleteDocument(collectionName: string, id: string): Promise<void> {
    try {
      // await this.db.collection(collectionName).doc(id).delete();

      // Mock implementation
      console.log(`Deleting document ${id} from ${collectionName}`);
    } catch (error) {
      console.error('Firebase delete error:', error);
      throw error;
    }
  }

  // Real-time listeners
  onCollectionChange<T>(
    collectionName: string,
    callback: (data: T[]) => void
  ): () => void {
    // const unsubscribe = this.db
    //   .collection(collectionName)
    //   .onSnapshot((snapshot) => {
    //     const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    //     callback(data);
    //   });

    // return unsubscribe;

    // Mock implementation
    console.log(`Listening to collection: ${collectionName}`);
    return () => {};
  }
}

// API service instances
export const restApi = new RestApiClient();
export const firebaseApi = new FirebaseApiClient();

// Content management API functions
export const contentApi = {
  // Products
  async getProducts(page = 1, limit = 10, filters?: any) {
    return restApi.getPaginated('/admin/products', page, limit, filters);
  },

  async createProduct(data: any) {
    return restApi.post('/admin/products', data);
  },

  async updateProduct(id: string, data: any) {
    return restApi.put(`/admin/products/${id}`, data);
  },

  async deleteProduct(id: string) {
    return restApi.delete(`/admin/products/${id}`);
  },

  // Testimonials
  async getTestimonials(page = 1, limit = 10) {
    return restApi.getPaginated('/admin/testimonials', page, limit);
  },

  async createTestimonial(data: any) {
    return restApi.post('/admin/testimonials', data);
  },

  async updateTestimonial(id: string, data: any) {
    return restApi.put(`/admin/testimonials/${id}`, data);
  },

  async deleteTestimonial(id: string) {
    return restApi.delete(`/admin/testimonials/${id}`);
  },

  // Team Members
  async getTeamMembers() {
    return restApi.get('/admin/team');
  },

  async createTeamMember(data: any) {
    return restApi.post('/admin/team', data);
  },

  async updateTeamMember(id: string, data: any) {
    return restApi.put(`/admin/team/${id}`, data);
  },

  async deleteTeamMember(id: string) {
    return restApi.delete(`/admin/team/${id}`);
  },

  // File upload
  async uploadFile(file: File, type: 'image' | 'document' = 'image') {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('type', type);

    const response = await fetch(`${API_BASE_URL}/admin/upload`, {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('auth_token')}`,
      },
    });

    return response.json();
  },
};

// Authentication API
export const authApi = {
  async login(credentials: { email: string; password: string }) {
    return restApi.post('/auth/login', credentials);
  },

  async logout() {
    return restApi.post('/auth/logout', {});
  },

  async refreshToken() {
    return restApi.post('/auth/refresh', {});
  },

  async getProfile() {
    return restApi.get('/auth/profile');
  },
};

// Dashboard API
export const dashboardApi = {
  async getMetrics() {
    return restApi.get('/admin/dashboard/metrics');
  },

  async getActivityFeed(limit = 10) {
    return restApi.get(`/admin/dashboard/activity?limit=${limit}`);
  },

  async getChartsData(period = '30d') {
    return restApi.get(`/admin/dashboard/charts?period=${period}`);
  },
};

// Error handling utility
export class ApiError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public errors?: string[]
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

// Request interceptor for error handling
export const setupApiInterceptors = () => {
  // Add request/response interceptors if needed
  // This would typically be done with axios interceptors
  // For fetch, we can create a wrapper
};

// Usage examples:
/*
// REST API Usage
import { contentApi, restApi } from './api';

// Set auth token
restApi.setToken(localStorage.getItem('auth_token'));

// CRUD operations
const products = await contentApi.getProducts(1, 10, { category: 'software' });
const newProduct = await contentApi.createProduct({
  name: 'New Product',
  description: 'Description',
  price: 99.99,
  category: 'Software'
});

// Firebase Usage
import { firebaseApi } from './api';

const products = await firebaseApi.getCollection('products');
const unsubscribe = firebaseApi.onCollectionChange('products', (data) => {
  console.log('Products updated:', data);
});
*/