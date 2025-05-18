
import React from 'react';
import ImageSlider from '@/components/ui/ImageSlider';

const Clients = () => {
  return (
    <main>
      {/* Hero Section with Image Slider */}
      <section>
        <ImageSlider />
      </section>

      {/* Clients Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Clients</h2>
            <p className="text-xl text-gray-600">Trusted by leading organizations</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[...Array(20)].map((_, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow"
              >
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="font-bold text-gray-600">Logo {index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Clients;
