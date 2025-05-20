
import React, { useState, useEffect } from 'react';

type ClientLogoProps = {
  src: string;
  alt: string;
};

const ClientLogo: React.FC<ClientLogoProps> = ({ src, alt }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);
  
  useEffect(() => {
    // Preload the image
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.onerror = () => {
      console.error(`Failed to load image: ${src}`);
      setImgSrc('data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==');
      setImageLoaded(true);
    };
    img.src = src;
  }, [src]);

  return (
    <div className="p-2 bg-white rounded-lg shadow hover:shadow-md transition-shadow flex items-center justify-center h-20">
      <img 
        src={imgSrc} 
        alt={alt}
        className={`max-h-16 max-w-full object-contain transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        loading="eager"
      />
    </div>
  );
};

export default ClientLogo;
