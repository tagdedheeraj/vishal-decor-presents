
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface GalleryTabsProps {
  categories: string[];
  activeTab: string;
  onTabChange: (category: string) => void;
  subCategories?: string[];
  activeSubCategory?: string;
  onSubCategoryChange?: (subCategory: string) => void;
}

const GalleryTabs: React.FC<GalleryTabsProps> = ({ 
  categories, 
  activeTab, 
  onTabChange, 
  subCategories,
  activeSubCategory,
  onSubCategoryChange
}) => {
  return (
    <div className="space-y-6">
      {/* Main Category Tabs */}
      <div className="flex flex-wrap justify-center mb-6">
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

      {/* Sub Category Tabs - Professional Style */}
      {subCategories && subCategories.length > 0 && (
        <div className="flex justify-center mb-8">
          <div className="w-full max-w-6xl">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-2">
              <div className="flex flex-wrap gap-2 justify-center">
                {subCategories.map((subCategory) => (
                  <button
                    key={subCategory}
                    onClick={() => onSubCategoryChange?.(subCategory)}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 whitespace-nowrap ${
                      activeSubCategory === subCategory
                        ? 'bg-orange-500 text-white shadow-md transform scale-105'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:shadow-sm'
                    }`}
                  >
                    {subCategory}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryTabs;
