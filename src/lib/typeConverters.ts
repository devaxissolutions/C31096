import { Timestamp } from 'firebase/firestore';

// Convert Firestore Timestamp to Date
export function timestampToDate(timestamp: Timestamp): Date {
  return timestamp.toDate();
}

// Convert Date to Firestore Timestamp
export function dateToTimestamp(date: Date): Timestamp {
  return Timestamp.fromDate(date);
}

// Convert Firestore document to regular object with Date fields
export function firestoreToRegular<T extends { createdAt: Timestamp; updatedAt: Timestamp }>(
  firestoreDoc: T
): Omit<T, 'createdAt' | 'updatedAt'> & { createdAt: Date; updatedAt: Date } {
  return {
    ...firestoreDoc,
    createdAt: timestampToDate(firestoreDoc.createdAt),
    updatedAt: timestampToDate(firestoreDoc.updatedAt),
  };
}

// Convert regular object to Firestore document with Timestamp fields
export function regularToFirestore<T extends { createdAt: Date; updatedAt: Date }>(
  regularDoc: T
): Omit<T, 'createdAt' | 'updatedAt'> & { createdAt: Timestamp; updatedAt: Timestamp } {
  return {
    ...regularDoc,
    createdAt: dateToTimestamp(regularDoc.createdAt),
    updatedAt: dateToTimestamp(regularDoc.updatedAt),
  };
}