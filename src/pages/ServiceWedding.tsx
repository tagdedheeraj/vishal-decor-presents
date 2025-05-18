
import React from 'react';
import ImageSlider from '@/components/ui/ImageSlider';
import ServiceTabs from '@/components/ui/ServiceTabs';

const ServiceWedding = () => {
  const serviceContent = {
    title: "Wedding",
    content: "We specialize in crafting captivating and immersive wedding exhibition booths that authentically represent your brand and captivate engaged couples. Our team combines creativity with strategic design to ensure your presence at bridal expos leaves a lasting impression."
  };

  return (
    <main>
      {/* Hero Section with Image Slider */}
      <section>
        <ImageSlider />
      </section>

      {/* Service Content */}
      <ServiceTabs activeTab="wedding" serviceContent={serviceContent} />
    </main>
  );
};

export default ServiceWedding;
