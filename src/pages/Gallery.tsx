import React, { useState } from 'react';
import GalleryTabs from '@/components/gallery/GalleryTabs';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import ImagePopup from '@/components/gallery/ImagePopup';
import { categories, getDisplayImages } from '@/components/gallery/GalleryData';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('Government Event');
  const [popupOpen, setPopupOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const displayImages = getDisplayImages(activeTab);

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
        <div className="absolute inset-0 bg-navy bg-opacity-90 z-0"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Gallery</h1>
          <p className="text-xl text-white mb-6">Explore Our Creative Work</p>
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
            onTabChange={setActiveTab} 
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
