
import React from 'react';
import VideoMap from '@/components/ui/VideoMap';
import ClientLogoCarousel from '@/components/ui/ClientLogoCarousel';

const ClientsSection = () => {
  return (
    <section className="py-12 relative overflow-hidden h-[400px]">
      <VideoMap />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white text-shadow">Our Clients</h2>
          <p className="text-lg text-white text-shadow">Trusted by leading organizations</p>
        </div>
        <div className="max-w-6xl mx-auto h-48">
          <ClientLogoCarousel />
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
