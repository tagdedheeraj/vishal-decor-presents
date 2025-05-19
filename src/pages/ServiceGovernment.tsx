
import React from 'react';
import ServiceTabs from '@/components/ui/ServiceTabs';

const ServiceGovernment = () => {
  const serviceContent = {
    title: "Government",
    content: "​At Vishal Decor & Event, we specialize in delivering exceptional decoration services for government exhibitions and events. Our expertise lies in transforming venues into immersive environments that effectively communicate governmental messages and values. Our commitment to excellence ensures that every detail is planned and executed. We provide good results in government exhibitions that are both approachable, stunning and superior too."
  };

  return (
    <main>
      {/* Page Header Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-navy bg-opacity-90 z-0"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Government Services</h1>
          <p className="text-xl text-white mb-6">Expert Event Management for Government Organizations</p>
        </div>
      </section>

      {/* Service Content */}
      <ServiceTabs activeTab="government" serviceContent={serviceContent} />
    </main>
  );
};

export default ServiceGovernment;
