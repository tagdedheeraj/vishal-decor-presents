
import React, { useState } from 'react';

const categories = [
  'Government Event', 
  'Exhibition', 
  'Institution', 
  'Wedding', 
  'Stall Fabrication'
];

const placeholderImages = [
  'https://images.unsplash.com/photo-1511578314322-379afb476865',
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87',
  'https://images.unsplash.com/photo-1531058020387-3be344556be6',
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622',
  'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf',
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30',
];

// Wedding specific images
const weddingImages = [
  '/lovable-uploads/a351efdf-bf1e-44ec-b7ab-fa446874d6ee.png',
  '/lovable-uploads/5e394b3f-bac5-4682-8727-da1f35841f6c.png',
  '/lovable-uploads/ca55657b-bced-4c22-94b9-184ccb0d50b5.png',
  '/lovable-uploads/c8285544-6645-47ce-a8f7-c3c65ed8f624.png',
  '/lovable-uploads/81b6a9d2-9928-4627-baa9-7df766babd25.png',
  '/lovable-uploads/391a7656-4feb-4201-9de0-e764fac1262b.png',
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('Government Event');

  // Determine which images to display based on the active tab
  const displayImages = activeTab === 'Wedding' ? weddingImages : placeholderImages;

  return (
    <main>
      {/* Page Header Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-navy bg-opacity-90 z-0"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Gallery</h1>
          <p className="text-xl text-white mb-6">Explore Our Creative Work</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Gallery</h2>
            <p className="text-xl text-gray-600">Explore our creative work</p>
          </div>

          {/* Gallery Tabs */}
          <div className="flex flex-wrap justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
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

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeTab === 'Wedding' ? (
              // Display wedding images when Wedding tab is active
              weddingImages.map((img, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-lg group">
                  <div className="relative pb-[75%]">
                    <img
                      src={img}
                      alt={`Wedding decoration image ${index + 1}`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center">
                      <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                        <p className="text-white text-lg font-bold">Wedding Decoration</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              // Display placeholder images for other tabs
              [...Array(9)].map((_, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-lg group">
                  <div className="relative pb-[75%]">
                    <img
                      src={`${placeholderImages[index % placeholderImages.length]}?auto=format&fit=crop&w=800&h=600&q=80`}
                      alt={`Gallery image ${index + 1}`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center">
                      <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                        <p className="text-white text-lg font-bold">{activeTab}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
