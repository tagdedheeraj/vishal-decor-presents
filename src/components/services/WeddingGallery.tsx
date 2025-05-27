
import React, { useState } from 'react';
import { getDisplayImages, weddingSubCategories } from '@/components/gallery/data';
import { MainCategory, WeddingSubCategory } from '@/components/gallery/data/types';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import ImagePopup from '@/components/gallery/ImagePopup';
import GalleryTabs from '@/components/gallery/GalleryTabs';

const WeddingGallery: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeSubCategory, setActiveSubCategory] = useState<string>(weddingSubCategories[0]);
  
  const images = getDisplayImages('Wedding' as MainCategory, activeSubCategory);

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

  const handleSubCategoryChange = (subCategory: string) => {
    setActiveSubCategory(subCategory);
  };

  return (
    <div className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Wedding Gallery</h2>
        
        {/* Wedding Sub-category Tabs */}
        <GalleryTabs
          categories={['Wedding']}
          activeTab="Wedding"
          onTabChange={() => {}}
          subCategories={[...weddingSubCategories]}
          activeSubCategory={activeSubCategory}
          onSubCategoryChange={handleSubCategoryChange}
        />
        
        <GalleryGrid
          images={[...images]}
          activeTab="Wedding"
          activeSubCategory={activeSubCategory}
          onImageClick={handleImageClick}
        />
        <ImagePopup
          open={isPopupOpen}
          onOpenChange={setIsPopupOpen}
          currentImageIndex={selectedImageIndex || 0}
          images={[...images]}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      </div>
    </div>
  );
};

export default WeddingGallery;
