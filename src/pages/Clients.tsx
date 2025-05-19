
import React from 'react';
import ClientLogoCarousel from '@/components/ui/ClientLogoCarousel';
import VideoMap from '@/components/ui/VideoMap';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Clients = () => {
  return (
    <main>
      {/* Page Header Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-navy bg-opacity-90 z-0"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Clients</h1>
          <p className="text-xl text-white mb-6">Trusted by Leading Organizations Across India</p>
          <div className="flex justify-center">
            <Link to="/contact">
              <Button className="bg-orange hover:bg-orange-dark text-white">Contact Us</Button>
            </Link>
          </div>
        </div>
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
