
import React from 'react';
import ImageSlider from '@/components/ui/ImageSlider';
import ClientLogoCarousel from '@/components/ui/ClientLogoCarousel';
import VideoMap from '@/components/ui/VideoMap';

const Clients = () => {
  return (
    <main>
      {/* Hero Section with Image Slider */}
      <section>
        <ImageSlider />
      </section>

      {/* Clients Section */}
      <section className="py-20 relative overflow-hidden h-[600px]">
        <VideoMap />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white text-shadow">Our Clients</h2>
            <p className="text-xl text-white text-shadow">Trusted by leading organizations</p>
          </div>
          
          {/* Client Logo Carousel */}
          <div className="max-w-6xl mx-auto h-64">
            <ClientLogoCarousel />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Clients;
