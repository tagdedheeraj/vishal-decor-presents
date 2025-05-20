
import React from 'react';
import ServiceCard from './ServiceCard';
import { Award, Briefcase, Layers, Music, Image } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section className="py-20 bg-orange-500">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">Our Services</h2>
          <p className="text-xl text-white">We Shape the Perfect Solution</p>
          <p className="mt-4 max-w-2xl mx-auto text-white">
            To redefine excellence by creating perfect solutions that inspire our customers and uplift our team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          <ServiceCard 
            title="Government" 
            icon={<Award size={28} className="text-white" />} 
            description="Exceptional decoration services for government exhibitions and events."
            link="/services/government"
          />
          <ServiceCard 
            title="Corporate" 
            icon={<Briefcase size={28} className="text-white" />} 
            description="Custom stall fabrication and design for corporate events."
            link="/services/corporate"
          />
          <ServiceCard 
            title="Stall Design Fabrication" 
            icon={<Layers size={28} className="text-white" />} 
            description="Innovative exhibition design and stall fabrication services."
            link="/services/stall-design-fabrication"
          />
          <ServiceCard 
            title="Other Event" 
            icon={<Music size={28} className="text-white" />} 
            description="Comprehensive solutions for various event types."
            link="/services/other-event"
          />
          <ServiceCard 
            title="Wedding" 
            icon={<Image size={28} className="text-white" />} 
            description="Creating captivating wedding exhibition booths and decorations."
            link="/services/wedding"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
