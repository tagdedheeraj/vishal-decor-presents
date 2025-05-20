
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col items-center mb-6">
          {/* Logo */}
          <div className="mb-4">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/2f6ac047-44ef-4817-8a16-9296f84cf90b.png" 
                alt="Vishal Decor Logo" 
                className="h-16 object-contain"
              />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Contact Info */}
          <div className="md:pr-4">
            <h3 className="text-xl font-bold mb-3 text-orange-DEFAULT">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 mt-1 text-orange-DEFAULT flex-shrink-0" />
                <span className="text-sm">B-401, Samudra Complex, Nr. Girish Cold Drinks Cross Road, C.G. Road, Navrangpura Ahmedabad, Gujarat, India 380009</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-orange-DEFAULT flex-shrink-0" />
                <a href="mailto:digital.vishaldecor@gmail.com" className="text-sm hover:text-orange-light transition-colors">digital.vishaldecor@gmail.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-orange-DEFAULT flex-shrink-0" />
                <span className="text-sm">+91 97253 04050 | +91 88664 44000</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="relative">
            <h3 className="text-xl font-bold mb-3 text-orange-DEFAULT">Quick Links</h3>
            <ul className="space-y-2 mb-4">
              <li><Link to="/" className="text-sm hover:text-orange-light transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm hover:text-orange-light transition-colors">About</Link></li>
              <li><Link to="/services" className="text-sm hover:text-orange-light transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="text-sm hover:text-orange-light transition-colors">Gallery</Link></li>
              <li><Link to="/clients" className="text-sm hover:text-orange-light transition-colors">Clients</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-orange-light transition-colors">Contact</Link></li>
            </ul>
            
            {/* Separator only on medium screens and above */}
            <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[1px] bg-orange-DEFAULT"></div>
          </div>

          {/* Services */}
          <div className="md:pl-4">
            <h3 className="text-xl font-bold mb-3 text-orange-DEFAULT">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/government" className="text-sm hover:text-orange-light transition-colors">Government</Link></li>
              <li><Link to="/services/corporate" className="text-sm hover:text-orange-light transition-colors">Corporate</Link></li>
              <li><Link to="/services/stall-design-fabrication" className="text-sm hover:text-orange-light transition-colors">Stall Design Fabrication</Link></li>
              <li><Link to="/services/wedding" className="text-sm hover:text-orange-light transition-colors">Wedding</Link></li>
              <li><Link to="/services/other-event" className="text-sm hover:text-orange-light transition-colors">Other Event</Link></li>
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-700 my-4" />

        <div className="pt-4 text-center">
          <p className="text-white text-sm">Copyright © 2025 Vishaldecor | All rights reserved.</p>
          <p className="mt-2 text-white text-sm">
            Design by <a href="https://socilet.com" target="_blank" rel="noopener noreferrer" className="text-orange-DEFAULT hover:underline">hp design studio</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
