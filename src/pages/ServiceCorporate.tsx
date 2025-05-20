
import React from 'react';
import ServiceTabs from '@/components/ui/ServiceTabs';

const ServiceCorporate = () => {
  const serviceContent = {
    title: "Corporate",
    content: "At Vishal Decor & Event we specialize in custom stall fabrication and design, transforming your brand's vision into engaging and functional exhibition spaces. Our comprehensive services include The Design Firm: Crafting unique stall designs that align with your brand identity and effectively showcase your products or services. Utilizing high grade materials and advanced techniques to ensure durable and visually appealing structures. Also we provide end to end project management on-site installation, ensuring a seamless experience. Our commitment to excellence ensures that your exhibition presence is not only noticed but also leaves a lasting impression."
  };

  return (
    <main>
      {/* Page Header Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: "url('/lovable-uploads/32275733-4e69-4388-924a-99123aad70b8.png')" }}
        ></div>
        <div className="absolute inset-0 bg-navy bg-opacity-70 z-0"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Corporate Services</h1>
          <p className="text-xl text-white mb-6">Elevate Your Brand with Custom Exhibition Solutions</p>
        </div>
      </section>

      {/* Service Content */}
      <ServiceTabs activeTab="corporate" serviceContent={serviceContent} />
    </main>
  );
};

export default ServiceCorporate;
