
import React from 'react';
import ImageSlider from '@/components/ui/ImageSlider';
import ServiceTabs from '@/components/ui/ServiceTabs';

const ServiceGovernment = () => {
  const serviceContent = {
    title: "Government",
    content: "​At Vishal Decor & Event, we specialize in delivering exceptional decoration services for government exhibitions and events. Our expertise lies in transforming venues into immersive environments that effectively communicate governmental messages and values. Our commitment to excellence ensures that every detail is planned and executed. We provide good results in government exhibitions that are both approachable, stunning and superior too."
  };

  return (
    <main>
      {/* Hero Section with Image Slider */}
      <section>
        <ImageSlider />
      </section>

      {/* Service Content */}
      <ServiceTabs activeTab="government" serviceContent={serviceContent} />
    </main>
  );
};

export default ServiceGovernment;
