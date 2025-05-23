
// Main gallery data index file that exports everything needed

// Export categories and helper functions
export { 
  categories,
  hasSubCategories,
  getSubCategories,
  weddingSubCategories,
  govtEventsSubCategories,
  placeholderImages 
} from './categories';

// Export wedding images
export {
  weddingImages,
  choriWeddingImages,
  gateWeddingImages,
  mandapWeddingImages,
  passageWeddingImages,
  stageWeddingImages
} from './weddingImages';

// Export government event images
export {
  governmentImages,
  exhibitionImages,
  uaePresidentWelcomeImages,
  nationalMangoFestivalImages,
  rannUtsavImages
} from './governmentImages';

// Export other category images
export {
  institutionImages,
  stallFabricationImages
} from './otherImages';

// Helper function to get images based on active tab
export const getDisplayImages = (activeTab: string, subCategory?: string): string[] => {
  if (activeTab === 'Wedding') {
    if (subCategory === 'Chori') {
      return choriWeddingImages;
    } else if (subCategory === 'Gate') {
      return gateWeddingImages;
    } else if (subCategory === 'Mandap') {
      return mandapWeddingImages;
    } else if (subCategory === 'Passage') {
      return passageWeddingImages;
    } else if (subCategory === 'Stage') {
      return stageWeddingImages;
    }
    return subCategory === 'All' || !subCategory 
      ? [...weddingImages, ...choriWeddingImages, ...gateWeddingImages, ...mandapWeddingImages, ...passageWeddingImages, ...stageWeddingImages] 
      : weddingImages;
  }
  
  if (activeTab === 'Institution') return institutionImages;
  
  if (activeTab === 'Govt. Events - Exhibitions') {
    if (subCategory === 'UAE President Welcome - Ahmedabad') {
      return uaePresidentWelcomeImages;
    }
    if (subCategory === 'National Mango Festival - Gandhinagar') {
      return nationalMangoFestivalImages;
    }
    if (subCategory === 'Rann Utsav - Dhordo') {
      return rannUtsavImages;
    }
    return subCategory === 'All' || !subCategory 
      ? [...governmentImages, ...uaePresidentWelcomeImages, ...nationalMangoFestivalImages, ...rannUtsavImages]
      : governmentImages;
  }
  
  if (activeTab === 'Stall Fabrication') return stallFabricationImages;
  
  return placeholderImages;
};
