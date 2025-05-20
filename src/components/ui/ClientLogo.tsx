
import React from 'react';

type ClientLogoProps = {
  src: string;
  alt: string;
};

const ClientLogo: React.FC<ClientLogoProps> = ({ src, alt }) => {
  return (
    <div className="p-2 bg-white rounded-lg shadow hover:shadow-md transition-shadow flex items-center justify-center h-20">
      <img 
        src={src} 
        alt={alt}
        className="max-h-16 max-w-full object-contain" 
        loading="eager" // Changed from lazy to eager loading
        onError={(e) => {
          // Use a transparent placeholder if image fails to load
          (e.target as HTMLImageElement).src = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
          console.error(`Failed to load image: ${src}`);
        }}
      />
    </div>
  );
};

export default ClientLogo;
