
import React, { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard';
import { Award, Briefcase, Layers, Music, Image } from 'lucide-react';

const ServicesSection = () => {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('services-section');
      if (section) {
        const sectionPosition = section.getBoundingClientRect();
        if (sectionPosition.top < window.innerHeight * 0.75) {
          setAnimate(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on component mount
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <section 
      id="services-section" 
      className="py-20 bg-orange-500 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div 
          className={`text-center mb-12 transition-all duration-1000 transform ${
            animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">Our Services</h2>
          <p className="text-xl text-white">We Shape the Perfect Solution</p>
          <p className="mt-4 max-w-2xl mx-auto text-white">
            To redefine excellence by creating perfect solutions that inspire our customers and uplift our team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {[
            {
              title: "Government",
              icon: <Award size={28} className="text-white" />,
              description: "Exceptional decoration services for government exhibitions and events.",
              link: "/services/government",
              delay: 0
            },
            {
              title: "Corporate",
              icon: <Briefcase size={28} className="text-white" />,
              description: "Custom stall fabrication and design for corporate events.",
              link: "/services/corporate",
              delay: 100
            },
            {
              title: "Wedding",
              icon: <Image size={28} className="text-white" />,
              description: "Creating captivating wedding exhibition booths and decorations.",
              link: "/services/wedding",
              delay: 200
            },
            {
              title: "Stall Design Fabrication",
              icon: <Layers size={28} className="text-white" />,
              description: "Innovative exhibition design and stall fabrication services.",
              link: "/services/stall-design-fabrication",
              delay: 300
            },
            {
              title: "Other Event",
              icon: <Music size={28} className="text-white" />,
              description: "Comprehensive solutions for various event types.",
              link: "/services/other-event",
              delay: 400
            },
          ].map((service, index) => (
            <div 
              key={index}
              className={`transition-all duration-1000 transform ${
                animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${service.delay}ms` }}
            >
              <ServiceCard 
                title={service.title}
                icon={service.icon}
                description={service.description}
                link={service.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
