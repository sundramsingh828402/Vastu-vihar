export type PropertyCategory = 'all' | 'residential' | 'commercial' | 'plots';

export type PropertyType = 
  | 'Luxury Villa'
  | 'Duplex Bungalow'
  | 'Premium 2BHK'
  | 'Luxury 3BHK'
  | 'Penthouse'
  | 'Commercial Retail'
  | 'Office Suite'
  | 'Gated Residential Plot'
  | 'Commercial Plot';

export interface Property {
  id: string;
  title: string;
  subtitle: string;
  category: 'residential' | 'commercial' | 'plots';
  type: PropertyType;
  price: string;
  priceRaw: number; // in INR for filtering
  location: string;
  landmark: string;
  area: string; // e.g. "1,850 sq.ft" or "2.5 Katha"
  carpetArea?: string;
  facing: string; // e.g. "North-East (Ishan)"
  possession: string;
  status: 'Ready to Move' | 'Under Construction' | 'Immediate Registry';
  bhk?: string;
  bathrooms?: number;
  parking?: string;
  images: string[];
  description: string;
  highlights: string[];
  amenities: string[];
  floorPlanDetails?: {
    groundFloor?: string;
    firstFloor?: string;
    terrace?: string;
  };
  brochureName: string;
  isFeatured?: boolean;
}

export interface SearchFilters {
  category: PropertyCategory;
  budgetRange: string;
  minPrice?: number;
  maxPrice?: number;
  bhk: string;
  searchQuery: string;
  status: string;
}

export interface InquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  propertyInterest: string;
  message: string;
  visitDate?: string;
  visitTime?: string;
}
