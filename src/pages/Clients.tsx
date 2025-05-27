
import React from 'react';
import ClientLogoCarousel from '@/components/ui/ClientLogoCarousel';
import VideoMap from '@/components/ui/VideoMap';
import { Button } from '@/components/ui/button';

const Clients = () => {
  return (
    <main>
      {/* Page Header Section with new background image */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-navy bg-opacity-90 z-0">
          <img 
            src="/lovable-uploads/a4af9d91-6680-43f1-99c1-e11d3eb2d1dd.png" 
            alt="Decorated venue seating" 
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          {/* Removed headings and Contact Us button */}
        </div>
        
        {/* Button positioned at the bottom like the about page */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <Button 
            className="bg-orange-500 hover:bg-orange-dark text-white py-6 px-10 rounded-none"
            size="lg"
          >
            Our Clients
          </Button>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-12 relative overflow-hidden h-[400px]">
        <VideoMap />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white text-shadow">Our Clients</h2>
            <p className="text-lg text-white text-shadow">Trusted by leading organizations</p>
          </div>
          
          {/* Client Logo Carousel */}
          <div className="max-w-6xl mx-auto h-48">
            <ClientLogoCarousel />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Clients;
