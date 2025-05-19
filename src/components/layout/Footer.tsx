
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Contact Info - Now First */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-black">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 mt-1 text-black flex-shrink-0" />
                <span>B-401, Samudra Complex, Nr. Girish Cold Drinks Cross Road, C.G. Road, Navrangpura Ahmedabad, Gujarat, India 380009</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-black flex-shrink-0" />
                <a href="mailto:digital.vishaldecor@gmail.com" className="hover:text-black transition-colors">digital.vishaldecor@gmail.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-black flex-shrink-0" />
                <span>+91 97253 04050 | +91 88664 44000</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-black">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-black transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-black transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-black transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="hover:text-black transition-colors">Gallery</Link></li>
              <li><Link to="/clients" className="hover:text-black transition-colors">Clients</Link></li>
              <li><Link to="/contact" className="hover:text-black transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-black">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/government" className="hover:text-black transition-colors">Government</Link></li>
              <li><Link to="/services/corporate" className="hover:text-black transition-colors">Corporate</Link></li>
              <li><Link to="/services/stall-design-fabrication" className="hover:text-black transition-colors">Stall Design Fabrication</Link></li>
              <li><Link to="/services/wedding" className="hover:text-black transition-colors">Wedding</Link></li>
              <li><Link to="/services/other-event" className="hover:text-black transition-colors">Other Event</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-black">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                <span className="text-navy font-bold">FB</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                <span className="text-navy font-bold">IG</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                <span className="text-navy font-bold">YT</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center">
          <p>Copyright © 2025 Vishaldecor | All rights reserved.</p>
          <p className="mt-2">
            Design by <a href="https://socilet.com" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">hp design studio</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
