
// Gallery main categories and helper functions

import type { 
  MainCategory, 
  WeddingSubCategory, 
  GovernmentSubCategory, 
  ConvocationSubCategory,
  CategoryConfig 
} from './types';

// Main gallery categories
export const categories: readonly MainCategory[] = [
  'Govt. Events - Exhibitions',
  'Convocation-Institutional', 
  'Wedding',
  'Stall Design & Fabrication'
] as const;

// Helper function to check if a category has subcategories
export const hasSubCategories = (category: MainCategory): boolean => {
  return category === 'Wedding' || category === 'Govt. Events - Exhibitions' || category === 'Convocation-Institutional';
};

// Helper function to get subcategories for a category
export const getSubCategories = (category: MainCategory): readonly string[] => {
  if (category === 'Wedding') {
    return weddingSubCategories;
  }
  if (category === 'Govt. Events - Exhibitions') {
    return govtEventsSubCategories;
  }
  if (category === 'Convocation-Institutional') {
    return convocationSubCategories;
  }
  return [];
};

// Wedding subcategories (removed 'All')
export const weddingSubCategories: readonly WeddingSubCategory[] = [
  'Chori',
  'Gate',
  'Mandap',
  'Passage',
  'Stage'
] as const;

// Government Events - Exhibitions subcategories (added Azadika Amrut Mohatsav - Baroda after Ambardi Lions Safari Park - Dhari)
export const govtEventsSubCategories: readonly GovernmentSubCategory[] = [
  '51 Shaktipith Mohatsav - Ambaji',
  'Ahmedabad Shopping Festival - River Front',
  'Ambardi Lions Safari Park - Dhari',
  'Azadika Amrut Mohatsav - Baroda',
  'Birsa Munda Janma Jayanti - Ahmedabad',
  'Dinosaur Park Inauguration - Balasinor',
  'Indo - Israel Meet - Dholera',
  'Indo - Japan Culture Road Show - Ahmedabd',
  'Madhavpur Ghed Festival - Madhavpur',
  'Namaste Trump Road Show - Ahmedabad',
  'Narivandna Utsav - Ahmedabad',
  'National Mango Festival - Gandhinagar',
  'Rann Utsav - Dhordo',
  'UAE President Welcome - Ahmedabad'
] as const;

// Convocation-Institutional subcategories (added EDI Fashion Show)
export const convocationSubCategories: readonly ConvocationSubCategory[] = [
  'EDI Fashion Show',
  'GBU',
  'IIMA',
  'IIT'
] as const;

// Placeholder images for default usage
export const placeholderImages: readonly string[] = [
  'https://images.unsplash.com/photo-1511578314322-379afb476865',
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87',
  'https://images.unsplash.com/photo-1531058020387-3be344556be6',
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622',
  'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf',
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30',
] as const;
