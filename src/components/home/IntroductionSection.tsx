
import React, { useState, useEffect } from 'react';

const IntroductionSection = () => {
  const [introVisible, setIntroVisible] = useState(false);

  // Add effect to trigger animation when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroVisible(true);
    }, 300);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 
            className={`text-2xl font-medium text-gold mb-2 transition-all duration-700 delay-300 transform ${
              introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Our Introductions
          </h2>
          <h3 
            className={`text-3xl md:text-4xl font-bold mb-6 transition-all duration-700 delay-500 transform ${
              introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            WELCOME TO VISHAL DECOR & EVENT PVT LTD
          </h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            className={`transition-all duration-1000 delay-100 transform ${
              introVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24'
            }`}
          >
            <img 
              src="/lovable-uploads/80b51345-67cb-4af8-9739-ec4b36c04bff.png" 
              alt="Vishal Decor & Event Speaker" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <p 
              className={`mb-4 transition-all duration-700 delay-700 transform ${
                introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Vishal Décor And Event Pvt. Ltd. is your one-stop destination for all event solutions. We transform our clients' imaginations into stunning realities, delivering events that leave lasting impressions.
            </p>
            <p 
              className={`mb-4 transition-all duration-700 delay-900 transform ${
                introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              With a passion for creativity and innovation, we bring fresh ideas and unique concepts to every project—ensuring no two events are ever the same.
            </p>
            <p 
              className={`mb-4 transition-all duration-700 delay-1100 transform ${
                introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              From Exhibitions and Trade Fairs to Corporate Events, Government Functions, Road Shows, Agenda-Based Conferences, Product Launches, and a variety of private celebrations such as Weddings, Social Gatherings, and Religious Functions, we handle it all with precision and flair.
            </p>
            <p 
              className={`transition-all duration-700 delay-1300 transform ${
                introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Backed by over 25 years of experience, our legacy of excellence is reflected in the glowing smiles of our clients—captured beautifully in our gallery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
