import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ServiceCard = ({ title, description, link }: { title: string; description: string; link: string }) => (
  <div className="bg-white rounded-lg shadow-lg p-8 service-card text-center">
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-600 mb-6">{description}</p>
    <Link to={link}>
      <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-none">Know More</Button>
    </Link>
  </div>
);

const Services = () => {
  return (
    <main>
      {/* Page Header Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-navy bg-opacity-90 z-0"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Services</h1>
          <p className="text-xl text-white mb-6">We Shape the Perfect Solution</p>
        </div>
        
        {/* Button positioned at the bottom like the about page */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <Button 
            className="bg-orange-500 hover:bg-orange-dark text-white py-6 px-10 rounded-none"
            size="lg"
          >
            Services
          </Button>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-20 bg-orange-500 bg-opacity-5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold text-lg font-medium">check our services list</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">what we're offering</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Government" 
              description="​At Vishal Decor & Event, we specialize in delivering exceptional" 
              link="/services/government"
            />
            <ServiceCard 
              title="Corporate" 
              description="At Vishal Decor & Event we specialize in custom stall fabrication" 
              link="/services/corporate"
            />
            <ServiceCard 
              title="Stall Design Fabrication" 
              description="Innovative is Engaged in providing stall fabrication services such as exhibition" 
              link="/services/stall-design-fabrication"
            />
            <ServiceCard 
              title="Other Event" 
              description="We specialize in crafting captivating and immersive wedding exhibition booths that" 
              link="/services/other-event"
            />
            <ServiceCard 
              title="Wedding" 
              description="We specialize in crafting captivating and immersive wedding exhibition booths that" 
              link="/services/wedding"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
