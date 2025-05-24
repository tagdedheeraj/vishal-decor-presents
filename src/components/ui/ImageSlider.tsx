
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  image: string;
}

const slides: Slide[] = [
  {
    image: '/lovable-uploads/8b55598d-7489-468d-b4d8-7b6f69854a6e.png', // New first image
  },
  {
    image: '/lovable-uploads/4d5ec722-ae05-46fe-8dd3-d74a0e74c1c2.png', // New second image
  },
  {
    image: '/lovable-uploads/b2b08602-76d8-4796-a1b0-3c62fc4150bb.png', // New third image
  },
  {
    image: '/lovable-uploads/d6abd58a-98c8-4f4f-aab9-e4f3b2fe1a89.png', // New fourth image
  },
  {
    image: '/lovable-uploads/f60d16c4-01be-4e4c-a80a-9efe1da4c2f8.png', // New fifth image
  },
  {
    image: '/lovable-uploads/95682f42-d41f-4b33-a8ad-8f3ba75ae4b4.png', // Slider-1
  },
  {
    image: '/lovable-uploads/6a761729-28ce-4e7e-a789-865d8b8c6ae8.png', // Slider-2
  },
  {
    image: '/lovable-uploads/f51d081f-f9dd-42ce-a931-22a23a37bda5.png', // Slider-3
  },
  {
    image: '/lovable-uploads/fba4980f-6ac4-4ad9-ae5c-8c89485617d2.png', // Slider-4
  },
  {
    image: '/lovable-uploads/5030415c-450a-4b43-b6bb-c2d1f0780d09.png', // Slider-5
  },
];

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goToPrevious = () => {
    if (animating) return;
    setAnimating(true);
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setTimeout(() => setAnimating(false), 1000);
  };

  const goToNext = () => {
    if (animating) return;
    setAnimating(true);
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setTimeout(() => setAnimating(false), 1000);
  };

  useEffect(() => {
    const slideInterval = setInterval(goToNext, 4000); // Changed from 3000 to 4000 ms (4 seconds)
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transform transition-transform duration-2000"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              transform: index === currentIndex ? 'scale(1.05)' : 'scale(1)',
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4">
            <div className={`${index === currentIndex ? 'animate-fade-in-down' : 'opacity-0'}`}>
              <p className="text-xl md:text-2xl uppercase tracking-wider mb-2 font-light">WELCOME TO</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">VISHAL DECOR & EVENT PVT LTD</h1>
              <div className="w-24 h-0.5 bg-orange mx-auto mb-3"></div>
              <p className="text-lg md:text-xl uppercase tracking-wide font-light">STEP BEYOND YOUR EXPECTATIONS</p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <button 
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-orange bg-opacity-70 p-2 rounded-full text-white hover:bg-opacity-90 transition hover:scale-110"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-orange bg-opacity-70 p-2 rounded-full text-white hover:bg-opacity-90 transition hover:scale-110"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-orange scale-125' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>
      
      {/* Know About Us button - centered at bottom */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <Link to="/about">
          <Button 
            className="bg-orange-500 hover:bg-orange-dark text-white py-6 px-10 rounded-none"
            size="lg"
          >
            Know About Us
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ImageSlider;
