
// TypeScript interfaces for gallery data structures

export interface ImageCollection {
  readonly images: readonly string[];
  readonly category: string;
  readonly subCategory?: string;
}

export interface SubCategoryImages {
  readonly [subCategory: string]: readonly string[];
}

export interface CategoryConfig {
  readonly name: string;
  readonly hasSubCategories: boolean;
  readonly subCategories?: readonly string[];
}

export interface GalleryCategory {
  readonly category: string;
  readonly subCategory?: string;
  readonly images: readonly string[];
}

// Wedding subcategory types
export type WeddingSubCategory = 
  | 'Chori'
  | 'Gate'
  | 'Mandap'
  | 'Passage'
  | 'Stage';

// Government events subcategory types
export type GovernmentSubCategory =
  | '51 Shaktipith Mohatsav - Ambaji'
  | 'Ahmedabad Shopping Festival - River Front'
  | 'Ambardi Lions Safari Park - Dhari'
  | 'Azadika Amrut Mohatsav - Baroda'
  | 'Birsa Munda Janma Jayanti - Ahmedabad'
  | 'Dinosaur Park Inauguration - Balasinor'
  | 'Indo - Israel Meet - Dholera'
  | 'Indo - Japan Culture Road Show - Ahmedabd'
  | 'Madhavpur Ghed Festival - Madhavpur'
  | 'Namaste Trump Road Show - Ahmedabad'
  | 'Narivandna Utsav - Ahmedabad'
  | 'National Mango Festival - Gandhinagar'
  | 'Rann Utsav - Dhordo'
  | 'UAE President Welcome - Ahmedabad';

// Convocation subcategory types
export type ConvocationSubCategory =
  | 'EDI Fashion Show'
  | 'GBU'
  | 'IIMA'
  | 'IIT';

// Main category types
export type MainCategory = 
  | 'Govt. Events - Exhibitions'
  | 'Convocation-Institutional'
  | 'Wedding'
  | 'Stall Design & Fabrication'
  | 'Institution'
  | 'Corporate'
  | 'Other Events';

export type SubCategory = WeddingSubCategory | GovernmentSubCategory | ConvocationSubCategory;

// Image display function parameters
export interface ImageDisplayParams {
  activeTab: MainCategory;
  subCategory?: SubCategory;
}

// Gallery configuration
export interface GalleryConfig {
  readonly categories: readonly CategoryConfig[];
  readonly defaultCategory: MainCategory;
}
