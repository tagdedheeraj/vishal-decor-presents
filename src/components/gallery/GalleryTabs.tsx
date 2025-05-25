
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
    <div className="space-y-8">
      {/* Main Category Tabs */}
      <div className="flex flex-wrap justify-center mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onTabChange(category)}
            className={`px-6 py-3 mx-2 mb-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
              activeTab === category
                ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/25'
                : 'bg-white text-gray-700 border border-gray-200 hover:border-orange-300 hover:shadow-md hover:text-orange-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Sub Category Tabs - Enhanced Professional Style */}
      {subCategories && subCategories.length > 0 && (
        <div className="flex justify-center mb-12">
          <div className="w-full max-w-7xl">
            <div className="bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-2xl shadow-lg p-6">
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Browse Categories</h3>
                <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full"></div>
              </div>
              
              <div className="flex flex-wrap gap-3 justify-center">
                {subCategories.map((subCategory) => (
                  <button
                    key={subCategory}
                    onClick={() => onSubCategoryChange?.(subCategory)}
                    className={`px-5 py-3 text-sm font-medium rounded-xl transition-all duration-300 whitespace-nowrap border ${
                      activeSubCategory === subCategory
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/25 transform scale-105 border-orange-500'
                        : 'bg-white text-gray-600 border-gray-200 hover:bg-orange-50 hover:text-orange-700 hover:border-orange-300 hover:shadow-md hover:transform hover:scale-102'
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
