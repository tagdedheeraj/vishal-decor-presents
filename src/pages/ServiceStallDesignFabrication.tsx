
import React from 'react';
import ImageSlider from '@/components/ui/ImageSlider';
import ServiceTabs from '@/components/ui/ServiceTabs';

const ServiceStallDesignFabrication = () => {
  const serviceContent = {
    title: "Stall Design Fabrication",
    content: "Innovative is Engaged in providing stall fabrication services such as exhibition design services, designing exhibition services and decorating exhibition designing services. We also offer interiors turnkey projects, maintenance jobs and space planning services."
  };

  return (
    <main>
      {/* Hero Section with Image Slider */}
      <section>
        <ImageSlider />
      </section>

      {/* Service Content */}
      <ServiceTabs activeTab="stall-design-fabrication" serviceContent={serviceContent} />
    </main>
  );
};

export default ServiceStallDesignFabrication;
