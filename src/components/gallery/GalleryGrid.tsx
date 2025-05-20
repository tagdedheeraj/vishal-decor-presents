
import React from 'react';

interface GalleryGridProps {
  images: string[];
  activeTab: string;
  onImageClick: (index: number) => void;
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ images, activeTab, onImageClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((img, index) => (
        <div 
          key={index} 
          className="overflow-hidden rounded-lg shadow-lg group cursor-pointer"
          onClick={() => onImageClick(index)}
        >
          <div className="relative pb-[75%]">
            <img
              src={img}
              alt={`${activeTab} image ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center">
              <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                <p className="text-white text-lg font-bold">{activeTab}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;
