import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-cream/95 shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/fb0e2e81-768f-474e-a868-a068ec13db8c.png" 
              alt="Vishal Decor Logo" 
              className="h-12" 
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${isActive('/') ? 'text-black font-medium' : 'text-orange-500 hover:text-black hover:font-medium'}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors ${isActive('/about') ? 'text-black font-medium' : 'text-orange-500 hover:text-black hover:font-medium'}`}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className={`transition-colors ${isActive('/services') ? 'text-black font-medium' : 'text-orange-500 hover:text-black hover:font-medium'}`}
            >
              Services
            </Link>
            <Link 
              to="/gallery" 
              className={`transition-colors ${isActive('/gallery') ? 'text-black font-medium' : 'text-orange-500 hover:text-black hover:font-medium'}`}
            >
              Gallery
            </Link>
            <Link 
              to="/clients" 
              className={`transition-colors ${isActive('/clients') ? 'text-black font-medium' : 'text-orange-500 hover:text-black hover:font-medium'}`}
            >
              Clients
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors ${isActive('/contact') ? 'text-black font-medium' : 'text-orange-500 hover:text-black hover:font-medium'}`}
            >
              Contact
            </Link>
          </nav>
          
          {/* Social Media Icons - removed LinkedIn and Youtube */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-black transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-black transition-colors">
              <Instagram size={20} />
            </a>
          </div>
          
          {/* Mobile Navigation Trigger */}
          <div className="lg:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              className="text-orange-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-cream py-4">
          <nav className="flex flex-col">
            <Link 
              to="/" 
              className={`py-2 px-4 transition-colors ${isActive('/') ? 'text-black font-medium' : 'text-orange-500 hover:text-black hover:font-medium'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`py-2 px-4 transition-colors ${isActive('/about') ? 'text-black font-medium' : 'text-orange-500 hover:text-black hover:font-medium'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className={`py-2 px-4 transition-colors ${isActive('/services') ? 'text-black font-medium' : 'text-orange-500 hover:text-black hover:font-medium'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/gallery" 
              className={`py-2 px-4 transition-colors ${isActive('/gallery') ? 'text-black font-medium' : 'text-orange-500 hover:text-black hover:font-medium'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              to="/clients" 
              className={`py-2 px-4 transition-colors ${isActive('/clients') ? 'text-black font-medium' : 'text-orange-500 hover:text-black hover:font-medium'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Clients
            </Link>
            <Link 
              to="/contact" 
              className={`py-2 px-4 transition-colors ${isActive('/contact') ? 'text-black font-medium' : 'text-orange-500 hover:text-black hover:font-medium'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
            {/* Social icons for mobile - removed LinkedIn and Youtube */}
            <div className="flex items-center space-x-4 px-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-black transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-black transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
