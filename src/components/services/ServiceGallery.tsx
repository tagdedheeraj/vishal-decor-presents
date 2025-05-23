
import React, { useState } from 'react';
import { getDisplayImages } from '@/components/gallery/data';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import ImagePopup from '@/components/gallery/ImagePopup';

interface ServiceGalleryProps {
  serviceCategory: string;
}

const ServiceGallery: React.FC<ServiceGalleryProps> = ({ serviceCategory }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const images = getDisplayImages(serviceCategory);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleClosePopup = () => {
    setSelectedImageIndex(null);
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
        {selectedImageIndex !== null && (
          <ImagePopup
            images={images}
            initialIndex={selectedImageIndex}
            onClose={handleClosePopup}
          />
        )}
      </div>
    </div>
  );
};

export default ServiceGallery;
