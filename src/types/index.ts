export interface ServiceItem {
  id: string;
  name: string;
  category: 'women-hair' | 'men-grooming' | 'skin-aesthetics' | 'hands-feet';
  price: string;
  duration: string;
  description: string;
  consultationNote?: string;
  benefits?: string[];
  popular?: boolean;
  image: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  rating: number;
  date: string;
  content: string;
  verified: boolean;
  service: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'hair' | 'makeup' | 'nails' | 'ambiance';
  image: string;
  subtitle: string;
  featured?: boolean;
}

export interface BridalPackage {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  price: string;
  idealFor: string;
  features: string[];
  popular?: boolean;
  image: string;
}

export interface BookingState {
  category: string;
  selectedServices: string[];
  date: string;
  timeSlot: string;
  clientName: string;
  clientPhone: string;
  specialNotes: string;
}
