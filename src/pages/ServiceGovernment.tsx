
import React, { useState, useEffect } from 'react';
import ServiceTabs from '@/components/ui/ServiceTabs';
import GalleryTabs from '@/components/gallery/GalleryTabs';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import ImagePopup from '@/components/gallery/ImagePopup';
import { 
  getDisplayImages, 
  hasSubCategories, 
  getSubCategories 
} from '@/components/gallery/data/index';
import { MainCategory } from '@/components/gallery/data/types';

const ServiceGovernment = () => {
  const serviceContent = {
    title: "Government",
    content: "Vishal Decor & Event takes pride in serving government departments across various states of India. We specialize in organizing impactful government events including conferences, seminars, inaugurations, and public programs. Our team excels at handling protocol requirements, security arrangements, and ensuring flawless execution of government functions with attention to detail. From heritage tourism policy launches to ministerial conferences, we deliver professional event management services tailored to the unique requirements of government organizations."
  };

  const [activeSubCategory, setActiveSubCategory] = useState<string>('');
  const [popupOpen, setPopupOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const activeTab: MainCategory = 'Govt. Events - Exhibitions';

  // Set default subcategory on component mount
  useEffect(() => {
    if (hasSubCategories(activeTab) && !activeSubCategory) {
      const subCategories = getSubCategories(activeTab);
      if (subCategories.length > 0) {
        setActiveSubCategory(subCategories[0]);
      }
    }
  }, [activeTab, activeSubCategory]);

  // Get sub-categories for the government events tab
  const subCategories = hasSubCategories(activeTab) ? getSubCategories(activeTab) : [];
  
  // Get images based on active sub-category
  const displayImages = getDisplayImages(activeTab, activeSubCategory);

  // Preload first few images for faster initial load
  useEffect(() => {
    const preloadImages = displayImages.slice(0, 6);
    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, [displayImages]);

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
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: "url('/lovable-uploads/4262bc9c-81e6-4c6f-a90d-c8b76f8f9f02.png')" }}
        ></div>
        <div className="absolute inset-0 bg-navy bg-opacity-70 z-0"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Government Services</h1>
          <p className="text-xl text-white mb-6">Expert Event Management for Government Organizations</p>
        </div>
      </section>

      {/* Service Content */}
      <ServiceTabs activeTab="government" serviceContent={serviceContent} />
      
      {/* Gallery Section with Govt. Events - Exhibitions Tab */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Govt. Events - Exhibitions</h2>
            <p className="text-xl text-gray-600">Explore our government event portfolio</p>
          </div>

          {/* Gallery Tabs Component for Sub-categories */}
          <GalleryTabs 
            categories={[activeTab]} 
            activeTab={activeTab} 
            onTabChange={() => {}} // No need to change main tab since it's fixed
            subCategories={[...subCategories]}
            activeSubCategory={activeSubCategory}
            onSubCategoryChange={setActiveSubCategory}
          />

          {/* Sub Category Title */}
          {activeSubCategory && (
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800">{activeSubCategory}</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mt-2 rounded-full"></div>
            </div>
          )}

          {/* Gallery Grid Component */}
          <GalleryGrid 
            images={[...displayImages]} 
            activeTab={activeTab} 
            activeSubCategory={activeSubCategory}
            onImageClick={openImagePopup} 
          />
        </div>
      </section>

      {/* Image Popup Component */}
      <ImagePopup 
        open={popupOpen}
        onOpenChange={setPopupOpen}
        currentImageIndex={currentImageIndex}
        images={[...displayImages]}
        onPrevious={goToPreviousImage}
        onNext={goToNextImage}
      />
    </main>
  );
};

export default ServiceGovernment;
