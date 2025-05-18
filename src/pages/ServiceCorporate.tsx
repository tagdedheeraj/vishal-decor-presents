
import React from 'react';
import ImageSlider from '@/components/ui/ImageSlider';
import ServiceTabs from '@/components/ui/ServiceTabs';

const ServiceCorporate = () => {
  const serviceContent = {
    title: "Corporate",
    content: "At Vishal Decor & Event we specialize in custom stall fabrication and design, transforming your brand's vision into engaging and functional exhibition spaces. Our comprehensive services include The Design Firm: Crafting unique stall designs that align with your brand identity and effectively showcase your products or services. Utilizing high grade materials and advanced techniques to ensure durable and visually appealing structures. Also we provide end to end project management on-site installation, ensuring a seamless experience. Our commitment to excellence ensures that your exhibition presence is not only noticed but also leaves a lasting impression."
  };

  return (
    <main>
      {/* Hero Section with Image Slider */}
      <section>
        <ImageSlider />
      </section>

      {/* Service Content */}
      <ServiceTabs activeTab="corporate" serviceContent={serviceContent} />
    </main>
  );
};

export default ServiceCorporate;
