
// Gallery data categories and images

export const categories = [
  'Government Event', 
  'Exhibition', 
  'Institution', 
  'Wedding', 
  'Stall Fabrication'
];

export const placeholderImages = [
  'https://images.unsplash.com/photo-1511578314322-379afb476865',
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87',
  'https://images.unsplash.com/photo-1531058020387-3be344556be6',
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622',
  'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf',
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30',
];

// Wedding specific images
export const weddingImages = [
  '/lovable-uploads/a351efdf-bf1e-44ec-b7ab-fa446874d6ee.png',
  '/lovable-uploads/5e394b3f-bac5-4682-8727-da1f35841f6c.png',
  '/lovable-uploads/ca55657b-bced-4c22-94b9-184ccb0d50b5.png',
  '/lovable-uploads/c8285544-6645-47ce-a8f7-c3c65ed8f624.png',
  '/lovable-uploads/81b6a9d2-9928-4627-baa9-7df766babd25.png',
  '/lovable-uploads/391a7656-4feb-4201-9de0-e764fac1262b.png',
];

// Government Event specific images
export const governmentImages = [
  '/lovable-uploads/1c08e6af-be17-4b8a-9211-5c6e516ea3f8.png', // Cultural performance with backdrop
  '/lovable-uploads/7734053c-3a7b-437d-bd65-09b4a3b3cf55.png', // Government event stage with officials' photos
  '/lovable-uploads/bfb77914-9e0c-4880-9a4c-18b10398fe7b.png', // Lamp lighting ceremony
  '/lovable-uploads/8c7b69f7-57c5-4e01-ad19-fddac5f1f2ed.png', // Cultural event with flag
  '/lovable-uploads/3e889393-cd73-4229-be1b-f9edee733cfa.png', // Tribal festival inauguration
  '/lovable-uploads/7def0f14-80e1-4782-a12e-b737622c4a54.png', // Heritage tourism policy launch entrance
  '/lovable-uploads/f802bb79-6835-4d41-b469-abdd68ff4e3e.png', // Policy document launch
  '/lovable-uploads/f795c471-6a1c-470f-8be9-f61c86a54c9a.png', // Agriculture market stalls
  '/lovable-uploads/2230d4cb-95c1-4476-b0ca-e505c5989060.png', // Night event stage with LED screen
  '/lovable-uploads/a4c78739-c5f0-4529-8120-bda33ba0c277.png', // Outdoor event setup with VVIP section
];

// Institution specific images
export const institutionImages = [
  '/lovable-uploads/14e4e6f6-f8d2-49e3-995c-5983fc2e5a3d.png', // Convocation with officials at podium
  '/lovable-uploads/27319270-def0-4a66-963b-dcecf1487927.png', // University entrance with standees
  '/lovable-uploads/325691d8-b847-479d-8a9b-76215afc98af.png', // University graduation group photo
  '/lovable-uploads/8df2f2af-081d-40d3-97ea-a13f81dad2b7.png', // Aerial view of institution event
  '/lovable-uploads/faed8f9b-47fa-4899-88d7-a411f36d0132.png', // Officials at institution ceremony
  '/lovable-uploads/fccbad39-1c4e-4a5b-972d-16f20afbfd47.png', // Shopping festival entrance
  '/lovable-uploads/88055602-b115-4e04-b73b-32a8c0c05e84.png', // Illuminated structure display
  '/lovable-uploads/7cbdac2a-ece3-4665-a889-f56b1064ab6d.png', // Fashion show stage
  '/lovable-uploads/42d7aaa7-a595-4742-9d17-8a883a3b15ad.png', // Outdoor event stage setup
  '/lovable-uploads/b5ef5927-bc9f-4346-8620-49acb88e6215.png', // Event branding walls
  '/lovable-uploads/b3ab6db1-4321-411c-ab92-8b22cf31520f.png'  // Shopping festival entrance gate
];

// Helper function to get images based on active tab
export const getDisplayImages = (activeTab: string): string[] => {
  if (activeTab === 'Wedding') return weddingImages;
  if (activeTab === 'Institution') return institutionImages;
  if (activeTab === 'Government Event') return governmentImages;
  return placeholderImages;
};
