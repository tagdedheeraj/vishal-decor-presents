
import React, { useState } from 'react';
import { getDisplayImages } from '@/components/gallery/data';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import ImagePopup from '@/components/gallery/ImagePopup';

interface ServiceGalleryProps {
  serviceCategory: string;
}

const ServiceGallery: React.FC<ServiceGalleryProps> = ({ serviceCategory }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const images = getDisplayImages(serviceCategory);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handlePrevious = () => {
    setSelectedImageIndex(prev => 
      prev !== null ? (prev > 0 ? prev - 1 : images.length - 1) : 0
    );
  };

  const handleNext = () => {
    setSelectedImageIndex(prev => 
      prev !== null ? (prev < images.length - 1 ? prev + 1 : 0) : 0
    );
  };

  return (
    <div className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Gallery</h2>
        <GalleryGrid
          images={images}
          activeTab={serviceCategory}
          onImageClick={handleImageClick}
        />
        <ImagePopup
          open={isPopupOpen}
          onOpenChange={setIsPopupOpen}
          currentImageIndex={selectedImageIndex || 0}
          images={images}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      </div>
    </div>
  );
};

export default ServiceGallery;
