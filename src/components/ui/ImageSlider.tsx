
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  image: string;
  caption: string;
}

const slides: Slide[] = [
  {
    image: '/lovable-uploads/49147b52-8023-4f1e-a115-4f8810cffed1.png',
    caption: 'We build your dream around you',
  },
  {
    image: '/lovable-uploads/ec48c5ef-6f5a-48d9-9e47-2f7afc552716.png',
    caption: 'Your vision. Our innovation',
  },
  {
    image: '/lovable-uploads/5b939f6b-4243-4c19-b7b2-a343659e1656.png',
    caption: 'Where creativity meets perfection',
  },
];

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const slideInterval = setInterval(goToNext, 5000);
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-screen">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ 
              backgroundImage: `url(${slide.image})`,
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-shadow animate-fade-in-down">
              {slide.caption}
            </h2>
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <button 
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-orange bg-opacity-70 p-2 rounded-full text-white hover:bg-opacity-90 transition"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-orange bg-opacity-70 p-2 rounded-full text-white hover:bg-opacity-90 transition"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-orange' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
      
      {/* Know About Us button - now auto-width instead of full width */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <Link to="/about">
          <Button className="bg-orange hover:bg-orange-dark text-white py-6 rounded-none" size="lg">
            Know About Us
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ImageSlider;
