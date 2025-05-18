
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Home } from 'lucide-react';

const Footer = () => {
  // Client logo placeholders - replace with actual client images in production
  const clientLogos = ['logo1.png', 'logo2.png', 'logo3.png', 'logo4.png', 'logo5.png'];

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Animated Client Logos */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {clientLogos.map((logo, index) => (
            <div key={index} className="w-24 h-24 bg-white rounded-full p-2 flip-animation" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-navy font-bold">Logo {index + 1}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
              <li><Link to="/clients" className="hover:text-gold transition-colors">Clients</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/government" className="hover:text-gold transition-colors">Government</Link></li>
              <li><Link to="/services/corporate" className="hover:text-gold transition-colors">Corporate</Link></li>
              <li><Link to="/services/stall-design-fabrication" className="hover:text-gold transition-colors">Stall Design Fabrication</Link></li>
              <li><Link to="/services/wedding" className="hover:text-gold transition-colors">Wedding</Link></li>
              <li><Link to="/services/other-event" className="hover:text-gold transition-colors">Other Event</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Home className="mr-2 h-5 w-5 mt-1 text-gold" />
                <span>B-401, Samudra Complex, Nr. Girish Cold Drinks Cross Road, C.G. Road, Navrangpura Ahmedabad, Gujarat, India 380009</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-gold" />
                <a href="mailto:digital.vishaldecor@gmail.com" className="hover:text-gold transition-colors">digital.vishaldecor@gmail.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-gold" />
                <span>+91 97253 04050 | +91 88664 44000</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gold transition-colors">
                <span className="text-navy font-bold">FB</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gold transition-colors">
                <span className="text-navy font-bold">IG</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gold transition-colors">
                <span className="text-navy font-bold">YT</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center">
          <p>Copyright © 2025 Vishaldecor | All rights reserved.</p>
          <p className="mt-2">
            Design by <a href="https://socilet.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">socilet</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
