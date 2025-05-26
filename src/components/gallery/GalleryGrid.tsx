
import React, { useState } from 'react';

interface GalleryGridProps {
  images: string[];
  activeTab: string;
  activeSubCategory?: string;
  onImageClick: (index: number) => void;
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ images, activeTab, activeSubCategory, onImageClick }) => {
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  // Track when each image has loaded
  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => ({
      ...prev,
      [index]: true
    }));
  };

  // Determine what text to display on the image
  const getDisplayText = () => {
    if (activeSubCategory) {
      return activeSubCategory;
    }
    return activeTab;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((img, index) => (
        <div 
          key={index} 
          className="overflow-hidden rounded-lg shadow-lg group cursor-pointer"
          onClick={() => onImageClick(index)}
        >
          <div className="relative pb-[75%]">
            {/* Show skeleton while loading */}
            {!loadedImages[index] && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            
            <img
              src={img}
              alt={`${getDisplayText()} image ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                loadedImages[index] ? 'opacity-100' : 'opacity-0'
              }`}
              loading="lazy"
              onLoad={() => handleImageLoad(index)}
              decoding="async"
              fetchPriority={index < 6 ? "high" : "low"}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              style={{
                contentVisibility: 'auto',
                containIntrinsicSize: '300px 225px'
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center">
              <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white text-lg font-bold">{getDisplayText()}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;
