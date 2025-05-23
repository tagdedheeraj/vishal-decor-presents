
import React, { useState, useEffect } from 'react';
import GalleryTabs from '@/components/gallery/GalleryTabs';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import ImagePopup from '@/components/gallery/ImagePopup';
import { 
  categories, 
  getDisplayImages, 
  hasSubCategories, 
  getSubCategories 
} from '@/components/gallery/GalleryData';
import { Button } from '@/components/ui/button';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('Government Event');
  const [activeSubCategory, setActiveSubCategory] = useState<string>('All');
  const [popupOpen, setPopupOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setActiveTab(category);
    // Reset sub-category when changing main category
    setActiveSubCategory('All');
  };

  // Get sub-categories if available for the current tab
  const subCategories = hasSubCategories(activeTab) ? getSubCategories(activeTab) : [];
  
  // Get images based on active tab and sub-category
  const displayImages = getDisplayImages(activeTab, activeSubCategory);

  // Open the popup with the selected image
  const openImagePopup = (index: number) => {
    setCurrentImageIndex(index);
    setPopupOpen(true);
  };

  // Navigate to the previous image
  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? displayImages.length - 1 : prevIndex - 1
    );
  };

  // Navigate to the next image
  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === displayImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <main>
      {/* Page Header Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-navy bg-opacity-90 z-0">
          <img 
            src="/lovable-uploads/a4af9d91-6680-43f1-99c1-e11d3eb2d1dd.png" 
            alt="Decorated venue seating" 
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          {/* Removed the heading */}
        </div>
        
        {/* Button positioned at the bottom like the about page */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <Button 
            className="bg-orange-500 hover:bg-orange-dark text-white py-6 px-10 rounded-none"
            size="lg"
          >
            Gallery
          </Button>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Gallery</h2>
            <p className="text-xl text-gray-600">Explore our creative work</p>
          </div>

          {/* Gallery Tabs Component */}
          <GalleryTabs 
            categories={categories} 
            activeTab={activeTab} 
            onTabChange={handleCategoryChange}
            subCategories={subCategories}
            activeSubCategory={activeSubCategory}
            onSubCategoryChange={setActiveSubCategory}
          />

          {/* Gallery Grid Component */}
          <GalleryGrid 
            images={displayImages} 
            activeTab={activeTab} 
            onImageClick={openImagePopup} 
          />
        </div>
      </section>

      {/* Image Popup Component */}
      <ImagePopup 
        open={popupOpen}
        onOpenChange={setPopupOpen}
        currentImageIndex={currentImageIndex}
        images={displayImages}
        onPrevious={goToPreviousImage}
        onNext={goToNextImage}
      />
    </main>
  );
};

export default Gallery;
