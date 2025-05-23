
import React from 'react';
import ServiceTabs from '@/components/ui/ServiceTabs';
import ServiceGallery from '@/components/services/ServiceGallery';

const ServiceOtherEvent = () => {
  const serviceContent = {
    title: "Other Event",
    content: "We specialize in crafting captivating and immersive wedding exhibition booths that authentically represent your brand and captivate engaged couples. Our team combines creativity with strategic design to ensure your presence at bridal expos leaves a lasting impression."
  };

  return (
    <main>
      {/* Page Header Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: "url('/lovable-uploads/7382795b-e82c-4c82-b18d-49074c811dcc.png')" }}
        ></div>
        <div className="absolute inset-0 bg-navy bg-opacity-70 z-0"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Other Events</h1>
          <p className="text-xl text-white mb-6">Comprehensive Solutions for Various Event Types</p>
        </div>
      </section>

      {/* Service Content */}
      <ServiceTabs activeTab="other-event" serviceContent={serviceContent} />
      
      {/* Gallery Section */}
      <ServiceGallery serviceCategory="Other Events" />
    </main>
  );
};

export default ServiceOtherEvent;
