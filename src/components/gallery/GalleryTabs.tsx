
import React from 'react';

interface GalleryTabsProps {
  categories: string[];
  activeTab: string;
  onTabChange: (category: string) => void;
}

const GalleryTabs: React.FC<GalleryTabsProps> = ({ categories, activeTab, onTabChange }) => {
  return (
    <div className="flex flex-wrap justify-center mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onTabChange(category)}
          className={`px-4 py-2 mx-2 mb-2 rounded-full transition-colors ${
            activeTab === category
              ? 'bg-gold text-white'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default GalleryTabs;
