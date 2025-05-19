
import React from 'react';
import ImageSlider from '@/components/ui/ImageSlider';
import ClientLogoCarousel from '@/components/ui/ClientLogoCarousel';

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
          
          {/* Client Logo Carousel */}
          <div className="max-w-5xl mx-auto">
            <ClientLogoCarousel />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Clients;
