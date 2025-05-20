
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img 
                src="/lovable-uploads/fb0e2e81-768f-474e-a868-a068ec13db8c.png" 
                alt="Vishal Decor Logo" 
                className="h-16 mb-4" 
              />
              <p className="text-sm text-gray-300 mt-4">
                Creating unforgettable experiences through exceptional event decoration and planning since 2001.
              </p>
            </div>
            
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
              <Button variant="ghost" size="icon" className="rounded-full bg-orange-DEFAULT hover:bg-orange-dark h-8 w-8 p-1">
                <Linkedin size={16} className="text-white" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-DEFAULT">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm hover:text-orange-light transition-colors flex items-center">
                  <span className="bg-orange-DEFAULT h-1.5 w-1.5 rounded-full mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-orange-light transition-colors flex items-center">
                  <span className="bg-orange-DEFAULT h-1.5 w-1.5 rounded-full mr-2"></span>
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-orange-light transition-colors flex items-center">
                  <span className="bg-orange-DEFAULT h-1.5 w-1.5 rounded-full mr-2"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm hover:text-orange-light transition-colors flex items-center">
                  <span className="bg-orange-DEFAULT h-1.5 w-1.5 rounded-full mr-2"></span>
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/clients" className="text-sm hover:text-orange-light transition-colors flex items-center">
                  <span className="bg-orange-DEFAULT h-1.5 w-1.5 rounded-full mr-2"></span>
                  Clients
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-orange-light transition-colors flex items-center">
                  <span className="bg-orange-DEFAULT h-1.5 w-1.5 rounded-full mr-2"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-DEFAULT">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/government" className="text-sm hover:text-orange-light transition-colors flex items-center">
                  <span className="bg-orange-DEFAULT h-1.5 w-1.5 rounded-full mr-2"></span>
                  Government
                </Link>
              </li>
              <li>
                <Link to="/services/corporate" className="text-sm hover:text-orange-light transition-colors flex items-center">
                  <span className="bg-orange-DEFAULT h-1.5 w-1.5 rounded-full mr-2"></span>
                  Corporate
                </Link>
              </li>
              <li>
                <Link to="/services/stall-design-fabrication" className="text-sm hover:text-orange-light transition-colors flex items-center">
                  <span className="bg-orange-DEFAULT h-1.5 w-1.5 rounded-full mr-2"></span>
                  Stall Design Fabrication
                </Link>
              </li>
              <li>
                <Link to="/services/wedding" className="text-sm hover:text-orange-light transition-colors flex items-center">
                  <span className="bg-orange-DEFAULT h-1.5 w-1.5 rounded-full mr-2"></span>
                  Wedding
                </Link>
              </li>
              <li>
                <Link to="/services/other-event" className="text-sm hover:text-orange-light transition-colors flex items-center">
                  <span className="bg-orange-DEFAULT h-1.5 w-1.5 rounded-full mr-2"></span>
                  Other Event
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-DEFAULT">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 mt-0.5 text-orange-DEFAULT flex-shrink-0" />
                <span className="text-sm">B-401, Samudra Complex, Nr. Girish Cold Drinks Cross Road, C.G. Road, Navrangpura Ahmedabad, Gujarat, India 380009</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-orange-DEFAULT flex-shrink-0" />
                <a href="mailto:digital.vishaldecor@gmail.com" className="text-sm hover:text-orange-light transition-colors">digital.vishaldecor@gmail.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-orange-DEFAULT flex-shrink-0" />
                <span className="text-sm">+91 97253 04050 | +91 88664 44000</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-700 my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center pt-4">
          <p className="text-gray-400 text-sm mb-2 md:mb-0">Copyright © 2025 Vishaldecor | All rights reserved.</p>
          <p className="text-gray-400 text-sm">
            Design by <a href="https://socilet.com" target="_blank" rel="noopener noreferrer" className="text-orange-DEFAULT hover:underline">hv design studio</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
