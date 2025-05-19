
import React from 'react';

type ClientLogoProps = {
  src: string;
  alt: string;
};

const ClientLogo: React.FC<ClientLogoProps> = ({ src, alt }) => {
  return (
    <div className="p-2 bg-white rounded-lg shadow hover:shadow-md transition-shadow flex items-center justify-center h-14">
      <img 
        src={src} 
        alt={alt} 
        className="max-h-10 max-w-full object-contain" 
      />
    </div>
  );
};

export default ClientLogo;
