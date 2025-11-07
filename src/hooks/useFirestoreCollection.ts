import { useState, useEffect } from 'react';
import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
  QueryConstraint,
  Unsubscribe,
} from 'firebase/firestore';
import { db } from '../lib/firebaseConfig';
import { FirestoreBase } from '../lib/firestoreTypes';

interface UseFirestoreCollectionOptions {
  filters?: { field: string; operator: string; value: any }[];
  sortBy?: { field: string; direction: 'asc' | 'desc' };
  enabled?: boolean;
}

interface UseFirestoreCollectionResult<T> {
  data: T[];
  loading: boolean;
  error: Error | null;
  refetch: () => void;
}

export function useFirestoreCollection<T extends FirestoreBase>(
  collectionName: string,
  options: UseFirestoreCollectionOptions = {}
): UseFirestoreCollectionResult<T> {
  const { filters = [], sortBy, enabled = true } = options;

  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!enabled) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    const constraints: QueryConstraint[] = [];

    // Apply filters
    filters.forEach(filter => {
      constraints.push(where(filter.field, filter.operator as any, filter.value));
    });

    // Apply sorting
    if (sortBy) {
      constraints.push(orderBy(sortBy.field, sortBy.direction));
    }

    const q = query(collection(db, collectionName), ...constraints);

    const unsubscribe: Unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const documents = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        } as T));

        setData(documents);
        setLoading(false);
      },
      (err) => {
        console.error(`Error listening to ${collectionName}:`, err);
        setError(err as Error);
        setLoading(false);
      }
    );

    // Cleanup subscription on unmount or when dependencies change
    return () => unsubscribe();
  }, [collectionName, JSON.stringify(filters), JSON.stringify(sortBy), enabled]);

  const refetch = () => {
    // Since we're using real-time listeners, refetching isn't needed
    // But we can trigger a reload by temporarily disabling and re-enabling
    setLoading(true);
    setTimeout(() => setLoading(false), 100);
  };

  return { data, loading, error, refetch };
}

// Specialized hooks for specific collections
export function useProducts(options?: UseFirestoreCollectionOptions) {
  return useFirestoreCollection<import('../lib/firestoreTypes').FirestoreProduct>('products', {
    sortBy: { field: 'order', direction: 'asc' },
    ...options,
  });
}

export function useTestimonials(options?: UseFirestoreCollectionOptions) {
  return useFirestoreCollection<import('../lib/firestoreTypes').FirestoreTestimonial>('testimonials', {
    filters: [{ field: 'isActive', operator: '==', value: true }],
    sortBy: { field: 'order', direction: 'asc' },
    ...options,
  });
}

export function useTeamMembers(options?: UseFirestoreCollectionOptions) {
  return useFirestoreCollection<import('../lib/firestoreTypes').FirestoreTeamMember>('team_members', {
    filters: [{ field: 'isActive', operator: '==', value: true }],
    sortBy: { field: 'order', direction: 'asc' },
    ...options,
  });
}

export function useGallery(options?: UseFirestoreCollectionOptions) {
  return useFirestoreCollection<import('../lib/firestoreTypes').FirestoreGalleryItem>('gallery', {
    filters: [{ field: 'isActive', operator: '==', value: true }],
    sortBy: { field: 'order', direction: 'asc' },
    ...options,
  });
}

export function useCompanyStats(options?: UseFirestoreCollectionOptions) {
  return useFirestoreCollection<import('../lib/firestoreTypes').FirestoreCompanyStat>('company_stats', {
    filters: [{ field: 'isActive', operator: '==', value: true }],
    sortBy: { field: 'order', direction: 'asc' },
    ...options,
  });
}

export function useContactInfo(options?: UseFirestoreCollectionOptions) {
  return useFirestoreCollection<import('../lib/firestoreTypes').FirestoreContactInfo>('contact_info', {
    filters: [{ field: 'isActive', operator: '==', value: true }],
    sortBy: { field: 'order', direction: 'asc' },
    ...options,
  });
}

export function useHomepageSections(options?: UseFirestoreCollectionOptions) {
  return useFirestoreCollection<import('../lib/firestoreTypes').FirestoreHeroSection>('homepage_sections', {
    filters: [{ field: 'isActive', operator: '==', value: true }],
    ...options,
  });
}