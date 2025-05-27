
import React, { useState, useEffect } from 'react';

const IntroductionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('introduction-section');
      if (section) {
        const sectionPosition = section.getBoundingClientRect();
        if (sectionPosition.top < window.innerHeight * 0.75) {
          setIsVisible(true);
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
    <section id="introduction-section" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            className={`transition-all duration-1000 delay-100 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24'
            }`}
          >
            <img 
              src="/lovable-uploads/881e60be-f80c-4e3f-b196-26b3c8bb3e9b.png" 
              alt="Government Event with Prime Minister" 
              className={`rounded-lg shadow-lg transition-all duration-1000 ${
                isVisible ? 'filter-none scale-100' : 'blur-sm scale-95'
              }`}
            />
          </div>
          <div>
            <div className="mb-8 flex flex-col items-center text-center">
              <h2 
                className={`text-2xl font-medium text-gold mb-2 transition-all duration-700 delay-300 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                Our Introductions
              </h2>
            </div>
            <p 
              className={`mb-4 transition-all duration-700 delay-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Vishal Décor And Event Pvt. Ltd. is your one-stop destination for all event solutions. We transform our clients' imaginations into stunning realities, delivering events that leave lasting impressions.
            </p>
            <p 
              className={`mb-4 transition-all duration-700 delay-900 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              With a passion for creativity and innovation, we bring fresh ideas and unique concepts to every project—ensuring no two events are ever the same.
            </p>
            <p 
              className={`mb-4 transition-all duration-700 delay-1100 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              From Exhibitions and Trade Fairs to Corporate Events, Government Functions, Road Shows, Agenda-Based Conferences, Product Launches, and a variety of private celebrations such as Weddings, Social Gatherings, and Religious Functions, we handle it all with precision and flair.
            </p>
            <p 
              className={`transition-all duration-700 delay-1300 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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
