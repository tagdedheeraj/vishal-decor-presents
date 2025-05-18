
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
    image: '/slide1.jpg',
    caption: 'We build your dream around you',
  },
  {
    image: '/slide2.jpg',
    caption: 'Your vision. Our innovation',
  },
  {
    image: '/slide3.jpg',
    caption: 'Where creativity meets perfection',
  },
];

// Using placeholder images for now
const placeholderImages = [
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30',
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622',
  'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf',
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
              backgroundImage: `url(${placeholderImages[index % placeholderImages.length]}?auto=format&fit=crop&w=1920&h=1080)`,
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-shadow animate-fade-in-down">
              {slide.caption}
            </h2>
            <Link to="/about">
              <Button className="bg-gold hover:bg-gold-dark text-white animate-fade-in-up" size="lg">
                Read More
              </Button>
            </Link>
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <button 
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-70 transition"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-70 transition"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-gold' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
