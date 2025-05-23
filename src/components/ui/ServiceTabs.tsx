
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';

interface ServiceContent {
  title: string;
  content: string;
}

interface ServiceTabsProps {
  activeTab?: string;
  serviceContent: ServiceContent;
}

const ServiceTabs: React.FC<ServiceTabsProps> = ({ activeTab = 'government', serviceContent }) => {
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState(activeTab);

  return (
    <div>
      {/* Hero Section with Contact Info */}
      <div className="bg-navy py-6 text-white text-center">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <Phone className="mr-2 h-5 w-5" />
            <span>Contact: +91 9426519496 | 9376753001</span>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="bg-gray-100 border-b">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto justify-center">
            <Link 
              to="/services/government" 
              className={`px-6 py-4 whitespace-nowrap text-center ${location.pathname === '/services/government' ? 'border-b-2 border-gold font-medium' : ''}`}
            >
              Government
            </Link>
            <Link 
              to="/services/corporate" 
              className={`px-6 py-4 whitespace-nowrap text-center ${location.pathname === '/services/corporate' ? 'border-b-2 border-gold font-medium' : ''}`}
            >
              Corporate
            </Link>
            <Link 
              to="/services/wedding" 
              className={`px-6 py-4 whitespace-nowrap text-center ${location.pathname === '/services/wedding' ? 'border-b-2 border-gold font-medium' : ''}`}
            >
              Wedding
            </Link>
            <Link 
              to="/services/stall-design-fabrication" 
              className={`px-6 py-4 whitespace-nowrap text-center ${location.pathname === '/services/stall-design-fabrication' ? 'border-b-2 border-gold font-medium' : ''}`}
            >
              Stall Design Fabrication
            </Link>
            <Link 
              to="/services/other-event" 
              className={`px-6 py-4 whitespace-nowrap text-center ${location.pathname === '/services/other-event' ? 'border-b-2 border-gold font-medium' : ''}`}
            >
              Other Event
            </Link>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{serviceContent.title}</h2>
            <div className="prose max-w-none">
              <p>{serviceContent.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTabs;
