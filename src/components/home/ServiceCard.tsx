
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

type ServiceCardProps = {
  title: string;
  icon: React.ReactNode;
  description: string;
  link: string;
};

const ServiceCard = ({ title, icon, description, link }: ServiceCardProps) => (
  <div className="bg-white rounded-lg shadow-lg p-6 service-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
    <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mb-4 mx-auto transform transition-transform hover:scale-110 duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-center mb-2">{title}</h3>
    <p className="text-gray-600 text-center mb-4">{description}</p>
    <div className="text-center">
      <Link to={link}>
        <Button 
          variant="outline" 
          className="border-gold text-navy hover:bg-gold hover:text-white transition-all duration-300 transform hover:scale-105"
        >
          Read More
        </Button>
      </Link>
    </div>
  </div>
);

export default ServiceCard;
