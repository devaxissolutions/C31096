import { Timestamp } from 'firebase/firestore';

// Firestore document base interface
export interface FirestoreBase {
  id: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  createdBy: string;
  updatedBy: string;
}

// Firestore versions of existing types
export interface FirestoreProduct extends Omit<Product, 'createdAt' | 'updatedAt'>, FirestoreBase {
  // Inherits all Product fields except dates, which are now Timestamps
}

export interface FirestoreTestimonial extends Omit<Testimonial, 'createdAt' | 'updatedAt' | 'publicationDate'>, FirestoreBase {
  publicationDate: Timestamp;
}

export interface FirestoreTeamMember extends Omit<TeamMember, 'createdAt' | 'updatedAt'>, FirestoreBase {}

export interface FirestoreInnovation extends Omit<Innovation, 'createdAt' | 'updatedAt' | 'publicationDate'>, FirestoreBase {
  publicationDate: Timestamp;
}

export interface FirestoreGalleryItem extends Omit<GalleryItem, 'createdAt' | 'updatedAt'>, FirestoreBase {}

export interface FirestoreCompanyStat extends Omit<CompanyStat, 'createdAt' | 'updatedAt'>, FirestoreBase {}

export interface FirestoreContactInfo extends Omit<ContactInfo, 'createdAt' | 'updatedAt'>, FirestoreBase {}

export interface FirestoreHeroSection extends Omit<HeroSection, 'createdAt' | 'updatedAt'>, FirestoreBase {}

export interface FirestoreAboutSection extends Omit<AboutSection, 'createdAt' | 'updatedAt'>, FirestoreBase {}

export interface FirestoreFeature extends Omit<Feature, 'createdAt' | 'updatedAt'>, FirestoreBase {}

export interface FirestoreCTASection extends Omit<CTASection, 'createdAt' | 'updatedAt'>, FirestoreBase {}

// Import existing types for reference
import type {
  Product,
  Testimonial,
  TeamMember,
  Innovation,
  GalleryItem,
  CompanyStat,
  ContactInfo,
  HeroSection,
  AboutSection,
  Feature,
  CTASection,
} from '../admin/types';