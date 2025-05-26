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
  azadikaAmrutMohatsavImages,
  birsaMundaJanmaJayantiImages,
  uaePresidentWelcomeImages,
  nationalMangoFestivalImages,
  rannUtsavImages,
  indoIsraelMeetDholeraImages,
  indoJapanCultureRoadShowImages,
  madhavpurGhedFestivalImages,
  namasteTrumpRoadShowImages,
  narivandnaUtsavImages,
  ahmedabadShoppingFestivalImages,
  shaktiPithMohatsavImages,
  ambardiLionsSafariParkImages
} from './governmentImages';

// Import convocation images
import {
  convocationImages,
  gbuConvocationImages,
  iimaConvocationImages,
  iitConvocationImages
} from './convocationImages';

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
  convocationSubCategories,
  placeholderImages 
} from './categories';

// Corporate images - Using institution images for now since they're relevant
export const corporateImages = [
  ...institutionImages
];

// Other events images - Using a mix of different event types
export const otherEventsImages = [
  '/lovable-uploads/faed8f9b-47fa-4899-88d7-a411f36d0132.png',
  '/lovable-uploads/7cbdac2a-ece3-4665-a889-f56b1064ab6d.png',
  '/lovable-uploads/42d7aaa7-a595-4742-9d17-8a883a3b15ad.png',
  '/lovable-uploads/b5ef5927-bc9f-4346-8620-49acb88e6215.png',
];

// Export all imported items
export {
  categories,
  hasSubCategories,
  getSubCategories,
  weddingSubCategories,
  govtEventsSubCategories,
  convocationSubCategories,
  placeholderImages,
  weddingImages,
  choriWeddingImages,
  gateWeddingImages,
  mandapWeddingImages,
  passageWeddingImages,
  stageWeddingImages,
  governmentImages,
  exhibitionImages,
  azadikaAmrutMohatsavImages,
  birsaMundaJanmaJayantiImages,
  uaePresidentWelcomeImages,
  nationalMangoFestivalImages,
  rannUtsavImages,
  indoIsraelMeetDholeraImages,
  indoJapanCultureRoadShowImages,
  madhavpurGhedFestivalImages,
  namasteTrumpRoadShowImages,
  narivandnaUtsavImages,
  ahmedabadShoppingFestivalImages,
  shaktiPithMohatsavImages,
  ambardiLionsSafariParkImages,
  convocationImages,
  gbuConvocationImages,
  iimaConvocationImages,
  iitConvocationImages,
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
    // Default to all wedding images when no subcategory or invalid subcategory
    return [...weddingImages, ...choriWeddingImages, ...gateWeddingImages, ...mandapWeddingImages, ...passageWeddingImages, ...stageWeddingImages];
  }
  
  if (activeTab === 'Institution') return institutionImages;
  if (activeTab === 'Corporate') return corporateImages;
  if (activeTab === 'Other Events') return otherEventsImages;
  
  if (activeTab === 'Govt. Events - Exhibitions') {
    if (subCategory === 'Birsa Munda Janma Jayanti - Ahmedabad') {
      return birsaMundaJanmaJayantiImages;
    }
    if (subCategory === 'UAE President Welcome - Ahmedabad') {
      return uaePresidentWelcomeImages;
    }
    if (subCategory === 'National Mango Festival - Gandhinagar') {
      return nationalMangoFestivalImages;
    }
    if (subCategory === 'Rann Utsav - Dhordo') {
      return rannUtsavImages;
    }
    if (subCategory === 'Indo - Israel Meet - Dholera') {
      return indoIsraelMeetDholeraImages;
    }
    if (subCategory === 'Indo - Japan Culture Road Show - Ahmedabd') {
      return indoJapanCultureRoadShowImages;
    }
    if (subCategory === 'Madhavpur Ghed Festival - Madhavpur') {
      return madhavpurGhedFestivalImages;
    }
    if (subCategory === 'Namaste Trump Road Show - Ahmedabad') {
      return namasteTrumpRoadShowImages;
    }
    if (subCategory === 'Narivandna Utsav - Ahmedabad') {
      return narivandnaUtsavImages;
    }
    if (subCategory === 'Ahmedabad Shopping Festival - River Front') {
      return ahmedabadShoppingFestivalImages;
    }
    if (subCategory === '51 Shaktipith Mohatsav - Ambaji') {
      return shaktiPithMohatsavImages;
    }
    if (subCategory === 'Ambardi Lions Safari Park - Dhari') {
      return ambardiLionsSafariParkImages;
    }
    // Default to all government images when no subcategory
    return [...governmentImages, ...birsaMundaJanmaJayantiImages, ...uaePresidentWelcomeImages, ...nationalMangoFestivalImages, ...rannUtsavImages, ...indoIsraelMeetDholeraImages, ...indoJapanCultureRoadShowImages, ...madhavpurGhedFestivalImages, ...namasteTrumpRoadShowImages, ...narivandnaUtsavImages, ...ahmedabadShoppingFestivalImages, ...shaktiPithMohatsavImages, ...ambardiLionsSafariParkImages];
  }
  
  if (activeTab === 'Convocation-Institutional') {
    if (subCategory === 'GBU') {
      return gbuConvocationImages;
    }
    if (subCategory === 'IIMA') {
      return iimaConvocationImages;
    }
    if (subCategory === 'IIT') {
      return iitConvocationImages;
    }
    // Default to all convocation images when no subcategory or invalid subcategory
    return [...convocationImages, ...gbuConvocationImages, ...iimaConvocationImages, ...iitConvocationImages];
  }
  
  if (activeTab === 'Stall Fabrication') return stallFabricationImages;
  
  return placeholderImages;
};
