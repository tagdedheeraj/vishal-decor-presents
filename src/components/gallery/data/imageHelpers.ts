
// Helper functions for managing gallery images

import {
  weddingImages,
  choriWeddingImages,
  gateWeddingImages,
  mandapWeddingImages,
  passageWeddingImages,
  stageWeddingImages
} from './weddingImages';

import {
  governmentImages,
  azadikaAmrutMohatsavImages,
  birsaMundaJanmaJayantiImages,
  dinosaurParkInaugurationImages,
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

import {
  convocationImages,
  ediFashionShowImages,
  gbuConvocationImages,
  iimaConvocationImages,
  iitConvocationImages
} from './convocationImages';

import { institutionImages, stallFabricationImages } from './otherImages';
import { corporateImages, otherEventsImages } from './imageCollections';
import { placeholderImages } from './categories';

// Helper function to get wedding images based on subcategory
const getWeddingImages = (subCategory?: string): string[] => {
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
};

// Helper function to get government event images based on subcategory
const getGovernmentImages = (subCategory?: string): string[] => {
  if (subCategory === 'Birsa Munda Janma Jayanti - Ahmedabad') {
    return birsaMundaJanmaJayantiImages;
  }
  if (subCategory === 'Dinosaur Park Inauguration - Balasinor') {
    return dinosaurParkInaugurationImages;
  }
  if (subCategory === 'Azadika Amrut Mohatsav - Baroda') {
    return azadikaAmrutMohatsavImages;
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
  return [...governmentImages, ...azadikaAmrutMohatsavImages, ...birsaMundaJanmaJayantiImages, ...dinosaurParkInaugurationImages, ...uaePresidentWelcomeImages, ...nationalMangoFestivalImages, ...rannUtsavImages, ...indoIsraelMeetDholeraImages, ...indoJapanCultureRoadShowImages, ...madhavpurGhedFestivalImages, ...namasteTrumpRoadShowImages, ...narivandnaUtsavImages, ...ahmedabadShoppingFestivalImages, ...shaktiPithMohatsavImages, ...ambardiLionsSafariParkImages];
};

// Helper function to get convocation images based on subcategory
const getConvocationImages = (subCategory?: string): string[] => {
  if (subCategory === 'EDI Fashion Show') {
    return ediFashionShowImages;
  }
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
  return [...convocationImages, ...ediFashionShowImages, ...gbuConvocationImages, ...iimaConvocationImages, ...iitConvocationImages];
};

// Main helper function to get images based on active tab and subcategory
export const getDisplayImages = (activeTab: string, subCategory?: string): string[] => {
  if (activeTab === 'Wedding') {
    return getWeddingImages(subCategory);
  }
  
  if (activeTab === 'Institution') return institutionImages;
  if (activeTab === 'Corporate') return corporateImages;
  if (activeTab === 'Other Events') return otherEventsImages;
  
  if (activeTab === 'Govt. Events - Exhibitions') {
    return getGovernmentImages(subCategory);
  }
  
  if (activeTab === 'Convocation-Institutional') {
    return getConvocationImages(subCategory);
  }
  
  if (activeTab === 'Stall Design & Fabrication') return stallFabricationImages;
  
  return placeholderImages;
};
