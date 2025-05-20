
import React from 'react';
import ServiceTabs from '@/components/ui/ServiceTabs';

const ServiceGovernment = () => {
  const serviceContent = {
    title: "Government",
    content: "Vishal Decor & Event takes pride in serving government departments across various states of India. We specialize in organizing impactful government events including conferences, seminars, inaugurations, and public programs. Our team excels at handling protocol requirements, security arrangements, and ensuring flawless execution of government functions with attention to detail. From heritage tourism policy launches to ministerial conferences, we deliver professional event management services tailored to the unique requirements of government organizations."
  };

  return (
    <main>
      {/* Page Header Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: "url('/lovable-uploads/4262bc9c-81e6-4c6f-a90d-c8b76f8f9f02.png')" }}
        ></div>
        <div className="absolute inset-0 bg-navy bg-opacity-70 z-0"></div>
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
