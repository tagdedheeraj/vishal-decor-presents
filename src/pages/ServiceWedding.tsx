
import React from 'react';
import ServiceTabs from '@/components/ui/ServiceTabs';
import ServiceGallery from '@/components/services/ServiceGallery';

const ServiceWedding = () => {
  const serviceContent = {
    title: "Wedding",
    content: "We specialize in crafting captivating and immersive wedding exhibition booths that authentically represent your brand and captivate engaged couples. Our team combines creativity with strategic design to ensure your presence at bridal expos leaves a lasting impression."
  };

  return (
    <main>
      {/* Page Header Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/lovable-uploads/88967152-7df3-4af1-8122-7acc4318b6a0.png')" }}
        ></div>
        <div className="absolute inset-0 bg-navy bg-opacity-75 z-0"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Wedding Services</h1>
          <p className="text-xl text-white mb-6">Creating Memorable Wedding Experiences</p>
        </div>
      </section>

      {/* Service Content */}
      <ServiceTabs activeTab="wedding" serviceContent={serviceContent} />
      
      {/* Gallery Section */}
      <ServiceGallery serviceCategory="Wedding" />
    </main>
  );
};

export default ServiceWedding;
