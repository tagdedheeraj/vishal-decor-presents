
// Main gallery data index file that exports everything needed

// Import wedding images
import {
  weddingImages,
  choriWeddingImages,
  gateWeddingImages,
  mandapWeddingImages,
  passageWeddingImages,
  stageWeddingImages
} from './weddingImages';

// Import government event images
import {
  governmentImages,
  exhibitionImages,
  uaePresidentWelcomeImages,
  nationalMangoFestivalImages,
  rannUtsavImages,
  heritageTourismPolicyLaunchImages
} from './governmentImages';

// Import other category images
import {
  institutionImages,
  stallFabricationImages
} from './otherImages';

// Import categories and helper functions
import { 
  categories,
  hasSubCategories,
  getSubCategories,
  weddingSubCategories,
  govtEventsSubCategories,
  placeholderImages 
} from './categories';

// Export all imported items
export {
  categories,
  hasSubCategories,
  getSubCategories,
  weddingSubCategories,
  govtEventsSubCategories,
  placeholderImages,
  weddingImages,
  choriWeddingImages,
  gateWeddingImages,
  mandapWeddingImages,
  passageWeddingImages,
  stageWeddingImages,
  governmentImages,
  exhibitionImages,
  uaePresidentWelcomeImages,
  nationalMangoFestivalImages,
  rannUtsavImages,
  heritageTourismPolicyLaunchImages,
  institutionImages,
  stallFabricationImages
};

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
    if (subCategory === 'Heritage Tourism Policy Launch - Hotel Leela - Gandhinagar') {
      return heritageTourismPolicyLaunchImages;
    }
    return subCategory === 'All' || !subCategory 
      ? [...governmentImages, ...uaePresidentWelcomeImages, ...nationalMangoFestivalImages, ...rannUtsavImages, ...heritageTourismPolicyLaunchImages]
      : governmentImages;
  }
  
  if (activeTab === 'Stall Fabrication') return stallFabricationImages;
  
  return placeholderImages;
};
