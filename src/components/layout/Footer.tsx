
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Contact Info - Now First */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-DEFAULT">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 mt-1 text-orange-DEFAULT flex-shrink-0" />
                <span>B-401, Samudra Complex, Nr. Girish Cold Drinks Cross Road, C.G. Road, Navrangpura Ahmedabad, Gujarat, India 380009</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-orange-DEFAULT flex-shrink-0" />
                <a href="mailto:digital.vishaldecor@gmail.com" className="hover:text-orange-light transition-colors">digital.vishaldecor@gmail.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-orange-DEFAULT flex-shrink-0" />
                <span>+91 97253 04050 | +91 88664 44000</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-DEFAULT">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-orange-light transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-orange-light transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-orange-light transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="hover:text-orange-light transition-colors">Gallery</Link></li>
              <li><Link to="/clients" className="hover:text-orange-light transition-colors">Clients</Link></li>
              <li><Link to="/contact" className="hover:text-orange-light transition-colors">Contact</Link></li>
            </ul>
            
            {/* Orange separator line - visible only on desktop */}
            <div className="hidden lg:block absolute right-0 top-0 bottom-0">
              <Separator className="h-full w-[1px] bg-orange-DEFAULT opacity-50" orientation="vertical" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-DEFAULT">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/government" className="hover:text-orange-light transition-colors">Government</Link></li>
              <li><Link to="/services/corporate" className="hover:text-orange-light transition-colors">Corporate</Link></li>
              <li><Link to="/services/stall-design-fabrication" className="hover:text-orange-light transition-colors">Stall Design Fabrication</Link></li>
              <li><Link to="/services/wedding" className="hover:text-orange-light transition-colors">Wedding</Link></li>
              <li><Link to="/services/other-event" className="hover:text-orange-light transition-colors">Other Event</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-white">Copyright © 2025 Vishaldecor | All rights reserved.</p>
          <p className="mt-2 text-white">
            Design by <a href="https://socilet.com" target="_blank" rel="noopener noreferrer" className="text-orange-DEFAULT hover:underline">hp design studio</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
