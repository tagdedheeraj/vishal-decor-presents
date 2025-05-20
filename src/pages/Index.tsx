
import React, { useEffect } from 'react';
import ImageSlider from '@/components/ui/ImageSlider';
import IntroductionSection from '@/components/home/IntroductionSection';
import MissionVisionSection from '@/components/home/MissionVisionSection';
import VideoSection from '@/components/home/VideoSection';
import ServicesSection from '@/components/home/ServicesSection';
import ClientsSection from '@/components/home/ClientsSection';

const Index = () => {
  // Reset scroll position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      {/* Hero Section with Image Slider */}
      <section>
        <ImageSlider />
      </section>

      {/* Introduction Section */}
      <IntroductionSection />

      {/* Mission Vision Section */}
      <MissionVisionSection />

      {/* YouTube Video Section */}
      <VideoSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Clients Section */}
      <ClientsSection />
    </main>
  );
};

export default Index;
