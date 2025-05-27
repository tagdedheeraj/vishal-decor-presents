
import React from 'react';
import ServiceTabs from '@/components/ui/ServiceTabs';
import StallDesignGallery from '@/components/services/StallDesignGallery';

const ServiceStallDesignFabrication = () => {
  const serviceContent = {
    title: "Stall Design Fabrication",
    content: "Innovative is Engaged in providing stall fabrication services such as exhibition design services, designing exhibition services and decorating exhibition designing services. We also offer interiors turnkey projects, maintenance jobs and space planning services."
  };

  return (
    <main>
      {/* Page Header Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: "url('/lovable-uploads/c20dd798-b182-4315-93c5-77fde7c94909.png')" }}
        ></div>
        <div className="absolute inset-0 bg-navy bg-opacity-70 z-0"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Stall Design & Fabrication</h1>
          <p className="text-xl text-white mb-6">Creating Impressive Exhibition Spaces</p>
        </div>
      </section>

      {/* Service Content */}
      <ServiceTabs activeTab="stall-design-fabrication" serviceContent={serviceContent} />
      
      {/* Gallery Section */}
      <StallDesignGallery />
    </main>
  );
};

export default ServiceStallDesignFabrication;
