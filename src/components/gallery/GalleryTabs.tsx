
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

      {/* Sub Category Tabs - Only show if subCategories are provided */}
      {subCategories && subCategories.length > 0 && (
        <div className="flex justify-center">
          <div className="w-full max-w-4xl overflow-x-auto pb-3">
            <Tabs 
              defaultValue={activeSubCategory || "All"} 
              value={activeSubCategory}
              onValueChange={onSubCategoryChange}
              className="w-full"
            >
              <TabsList className="w-full h-auto flex-wrap bg-gray-50 p-1 justify-start sm:justify-center">
                {subCategories.map((subCategory) => (
                  <TabsTrigger 
                    key={subCategory} 
                    value={subCategory}
                    className={`py-2 px-3 text-xs sm:text-sm whitespace-nowrap my-1 mx-0.5 ${
                      activeSubCategory === subCategory ? 'bg-orange-500 text-white' : ''
                    }`}
                  >
                    {subCategory}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryTabs;
