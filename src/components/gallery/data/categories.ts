
// Gallery main categories and helper functions

// Main gallery categories
export const categories = [
  'Govt. Events - Exhibitions', 
  'Wedding',
  'Convocation-Institutional',
  'Stall Fabrication'
];

// Helper function to check if a category has subcategories
export const hasSubCategories = (category: string): boolean => {
  return category === 'Wedding' || category === 'Govt. Events - Exhibitions' || category === 'Convocation-Institutional';
};

// Helper function to get subcategories for a category
export const getSubCategories = (category: string): string[] => {
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
export const weddingSubCategories = [
  'Chori',
  'Gate',
  'Mandap',
  'Passage',
  'Stage'
];

// Government Events - Exhibitions subcategories (reordered as requested)
export const govtEventsSubCategories = [
  '51 Shaktipith Mohatsav - Ambaji',
  'Ahmedabad Shopping Festival - River Front',
  'Ambardi Lions Safari Park - Dhari',
  'Birsa Munda Janma Jayanti - Ahmedabad',
  'Indo - Israel Meet - Dholera',
  'Indo - Japan Culture Road Show - Ahmedabd',
  'Madhavpur Ghed Festival - Madhavpur',
  'Namaste Trump Road Show - Ahmedabad',
  'Narivandna Utsav - Ahmedabad',
  'National Mango Festival - Gandhinagar',
  'Rann Utsav - Dhordo',
  'UAE President Welcome - Ahmedabad'
];

// Convocation-Institutional subcategories (removed 'All' and 'EDI Fashion Show')
export const convocationSubCategories = [
  'GBU',
  'IIMA',
  'IIT'
];

// Placeholder images for default usage
export const placeholderImages = [
  'https://images.unsplash.com/photo-1511578314322-379afb476865',
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87',
  'https://images.unsplash.com/photo-1531058020387-3be344556be6',
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622',
  'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf',
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30',
];
