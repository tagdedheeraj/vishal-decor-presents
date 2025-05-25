import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {/* Company Info with Logo */}
          <div>
            <div className="mb-4">
              <img 
                src="/lovable-uploads/42ad349b-3839-422e-8813-126713cc104e.png" 
                alt="Vishal Decor Logo" 
                className="h-16 w-auto mb-3"
              />
              <p className="text-sm text-gray-300 mt-4">
                Creating unforgettable experiences through exceptional event decoration and planning since 2001.
              </p>
            </div>
            
            {/* Social icons - removed LinkedIn */}
            <div className="flex space-x-3 mt-6">
              <Button variant="ghost" size="icon" className="rounded-full bg-orange-DEFAULT hover:bg-orange-dark h-8 w-8 p-1">
                <Facebook size={16} className="text-white" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-orange-DEFAULT hover:bg-orange-dark h-8 w-8 p-1">
                <Instagram size={16} className="text-white" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-orange-DEFAULT hover:bg-orange-dark h-8 w-8 p-1">
                <Twitter size={16} className="text-white" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-DEFAULT">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm hover:text-orange-500 transition-colors flex items-center">
                  <span className="bg-orange-DEFAULT h-1.5 w-1.5 rounded-full mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-orange-500 transition-colors flex items-center">
                  <span className="bg-orange-DEFAULT h-1.5 w-1.5 rounded-full mr-2"></span>
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-orange-500 transition-colors flex items-center">
                  <span className="bg-orange-DEFAULT h-1.5 w-1.5 rounded-full mr-2"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm hover:text-orange-500 transition-colors flex items-center">
                  <span className="bg-orange-DEFAULT h-1.5 w-1.5 rounded-full mr-2"></span>
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/clients" className="text-sm hover:text-orange-500 transition-colors flex items-center">
                  <span className="bg-orange-DEFAULT h-1.5 w-1.5 rounded-full mr-2"></span>
                  Clients
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-DEFAULT">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/government" className="text-sm hover:text-orange-500 transition-colors flex items-center">
                  <span className="bg-orange-DEFAULT h-1.5 w-1.5 rounded-full mr-2"></span>
                  Government
                </Link>
              </li>
              <li>
                <Link to="/services/corporate" className="text-sm hover:text-orange-500 transition-colors flex items-center">
                  <span className="bg-orange-DEFAULT h-1.5 w-1.5 rounded-full mr-2"></span>
                  Corporate
                </Link>
              </li>
              <li>
                <Link to="/services/stall-design-fabrication" className="text-sm hover:text-orange-500 transition-colors flex items-center">
                  <span className="bg-orange-DEFAULT h-1.5 w-1.5 rounded-full mr-2"></span>
                  Stall Design Fabrication
                </Link>
              </li>
              <li>
                <Link to="/services/wedding" className="text-sm hover:text-orange-500 transition-colors flex items-center">
                  <span className="bg-orange-DEFAULT h-1.5 w-1.5 rounded-full mr-2"></span>
                  Wedding
                </Link>
              </li>
              <li>
                <Link to="/services/other-event" className="text-sm hover:text-orange-500 transition-colors flex items-center">
                  <span className="bg-orange-DEFAULT h-1.5 w-1.5 rounded-full mr-2"></span>
                  Other Event
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-700 my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center pt-4">
          <p className="text-gray-400 text-sm mb-2 md:mb-0">Copyright © 2025 Vishaldecor | All rights reserved.</p>
          <p className="text-gray-400 text-sm">
            Design by <a href="https://socilet.com" target="_blank" rel="noopener noreferrer" className="text-orange-DEFAULT hover:text-orange-500">hv design studio</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
