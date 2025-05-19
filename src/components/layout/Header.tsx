
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-cream' : 'transparent-header'}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <h1 className="text-orange text-2xl md:text-3xl font-bold">VISHAL <span className="text-gold">DECOR</span></h1>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-orange hover:text-gold transition-colors">Home</Link>
            <Link to="/about" className="text-orange hover:text-gold transition-colors">About</Link>
            <Link to="/services" className="text-orange hover:text-gold transition-colors">Services</Link>
            <Link to="/gallery" className="text-orange hover:text-gold transition-colors">Gallery</Link>
            <Link to="/clients" className="text-orange hover:text-gold transition-colors">Clients</Link>
            <Link to="/contact" className="text-orange hover:text-gold transition-colors">Contact</Link>
          </nav>
          
          {/* Social Media Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-orange hover:text-gold transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-orange hover:text-gold transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-orange hover:text-gold transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-orange hover:text-gold transition-colors">
              <Youtube size={20} />
            </a>
          </div>
          
          {/* Mobile Navigation Trigger */}
          <div className="lg:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              className="text-orange"
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
        <div className="lg:hidden bg-cream bg-opacity-95 py-4">
          <nav className="flex flex-col">
            <Link to="/" className="text-orange hover:text-gold py-2 px-4 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/about" className="text-orange hover:text-gold py-2 px-4 transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/services" className="text-orange hover:text-gold py-2 px-4 transition-colors" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link to="/gallery" className="text-orange hover:text-gold py-2 px-4 transition-colors" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
            <Link to="/clients" className="text-orange hover:text-gold py-2 px-4 transition-colors" onClick={() => setIsMenuOpen(false)}>Clients</Link>
            <Link to="/contact" className="text-orange hover:text-gold py-2 px-4 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            
            {/* Social icons for mobile */}
            <div className="flex items-center space-x-4 px-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-orange hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-orange hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-orange hover:text-gold transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-orange hover:text-gold transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
