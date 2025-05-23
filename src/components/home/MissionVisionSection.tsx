
import React, { useState, useEffect } from 'react';
import { Target, Lightbulb, Book } from 'lucide-react';

const MissionVisionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('mission-vision-section');
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
    <section 
      id="mission-vision-section" 
      className="py-20 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 165, 0, 0.7), rgba(255, 165, 0, 0.7)), url('/lovable-uploads/1e373ac6-4c61-4a7e-9a12-c2e02e89c839.png')`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 
            className={`text-3xl md:text-4xl font-bold text-white mb-4 transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Mission & Vision
          </h2>
          <div 
            className={`w-24 h-1 bg-white mx-auto transition-all duration-700 delay-300 transform ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}
          ></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* The Tenet */}
          <div 
            className={`bg-white rounded-lg shadow-lg p-8 transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            } text-center flex flex-col items-center hover:shadow-xl hover:-translate-y-2`}
          >
            <Target className={`h-12 w-12 text-orange-DEFAULT mb-4 transition-transform duration-500 ${
              isVisible ? 'rotate-0' : '-rotate-90'
            }`} />
            <h3 className="text-2xl font-bold mb-4 text-orange-500">The Tenet</h3>
            <p className="mb-4">
              Vishal Decor derives its tenet from the promoter's passion and belief in communication and marketing as a tool for building and sustaining image and brand.
            </p>
            <p>
              Delivering effective, ethical and enlightening solutions is Vishal Decor's core tenet. This dictates and moulds its policies. In sync with its tenet, Vishal Decor does not work for companies involved in alcohol, tobacco, meat processing, lotteries or environmentally hazardous undertakings.
            </p>
          </div>
          
          {/* The Mission */}
          <div 
            className={`bg-white rounded-lg shadow-lg p-8 transition-all duration-700 delay-300 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            } text-center flex flex-col items-center hover:shadow-xl hover:-translate-y-2`}
          >
            <Lightbulb className={`h-12 w-12 text-orange-DEFAULT mb-4 transition-all duration-500 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`} />
            <h3 className="text-2xl font-bold mb-4 text-orange-500">The Mission</h3>
            <p className="mb-4">
              Vishal Decor is organized on total 'Quality' principles which are directed towards their clients through powerful and effective implementation of projects in a very subtle way.
            </p>
            <p>
              Vishal Decor's strategic mission recognizes that to thrive tomorrow, the company must be successful today in generating beneficial results for their clients by delivering value that exceeds their expectation.
            </p>
          </div>
          
          {/* Synopsis */}
          <div 
            className={`bg-white rounded-lg shadow-lg p-8 transition-all duration-700 delay-600 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            } text-center flex flex-col items-center hover:shadow-xl hover:-translate-y-2`}
          >
            <Book className={`h-12 w-12 text-orange-DEFAULT mb-4 transition-all duration-500 ${
              isVisible ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'
            }`} />
            <h3 className="text-2xl font-bold mb-4 text-orange-500">Synopsis</h3>
            <p className="mb-4">
              With years of experience to fall back on, organizing and managing large size special events, corporate events, exhibitions and experiential marketing activities are like second nature to the seasoned team of Vishal Decor.
            </p>
            <p>
              Vishal Decor keeps the client updated on the progress of the assignment. This becomes possible due to years of expertise and focused planning. Owing to its various mechanisms in place, Vishal Decor is always in a position to give minute-by-minute feedback, updates and reports from any part of the world. In short, Vishal Decor ensures that you stay on track.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
