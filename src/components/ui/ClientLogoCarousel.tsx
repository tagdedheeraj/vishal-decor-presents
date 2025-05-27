
import React, { useState, useEffect } from 'react';
import ClientLogo from './ClientLogo';

const clientLogos = [
  { src: "/lovable-uploads/bfad3cf2-b408-462b-a8d4-a2461625674b.png", alt: "Savaliya Builders" },
  { src: "/lovable-uploads/693d8a8f-7684-4dec-af62-3bc2a728d03f.png", alt: "Gujyotsav The Bridal Exhibition" },
  { src: "/lovable-uploads/2df01431-ff19-43d4-a82f-07e1fcfee044.png", alt: "The Grand Bhagwati" },
  { src: "/lovable-uploads/7baaca22-7b59-452e-abc9-cff0efc5d3f4.png", alt: "Zydus Cadila" },
  { src: "/lovable-uploads/c4759a18-02f7-4379-afe9-107f4923648c.png", alt: "JBR Nirmaan Pvt. Ltd." },
  { src: "/lovable-uploads/f86d8754-2613-4d81-be3c-10904b7cb94f.png", alt: "Towards a new dawn" },
  { src: "/lovable-uploads/4572575c-2f1a-4a09-9d58-4700d94a5a63.png", alt: "Vanbandhu Kalyan Yojana" },
  { src: "/lovable-uploads/8d4af39d-0594-4344-83df-ad312744db22.png", alt: "Gujarat Biotechnology University" },
  { src: "/lovable-uploads/14e39179-ac56-4bfe-94d6-25ffe8e16927.png", alt: "Swadeshi" },
  { src: "/lovable-uploads/ac61c5c4-a09d-435a-a83a-7f8b7a855e76.png", alt: "Gujarat Agro Industries Corporation Limited" },
  { src: "/lovable-uploads/26717dcf-c022-4092-b20d-b6930cc0f846.png", alt: "GCPT" },
  { src: "/lovable-uploads/35a5847c-996d-4c82-9820-81d204807c91.png", alt: "Ahmedabad Municipal Corporation" },
  { src: "/lovable-uploads/93a6f0d0-49f7-488f-8bcf-97376a605fa8.png", alt: "AAU" },
  { src: "/lovable-uploads/4d52191f-deac-4562-aea2-6983de0d14f2.png", alt: "Gujarat Tourism" },
  { src: "/lovable-uploads/e55428ab-968b-4bbf-a9d6-1e3a63528001.png", alt: "Navsari Agricultural University" },
  { src: "/lovable-uploads/e8f3ee38-4865-4612-83fd-7b4be9f4b9c0.png", alt: "Confederation of Indian Industry" },
  { src: "/lovable-uploads/70a3371d-617a-4569-866d-f70378902829.png", alt: "Indian Institute of Technology Gandhinagar" },
  { src: "/lovable-uploads/69065be8-ca95-4366-9ae3-a2867191e561.png", alt: "IIM" },
  { src: "/lovable-uploads/d95cc0e8-ee0c-4fcf-b03f-d9568e7befa7.png", alt: "Science City" },
  { src: "/lovable-uploads/2f6ac047-44ef-4817-8a16-9296f84cf90b.png", alt: "ABEC Asian Business Exhibition & Conferences Ltd." },
  { src: "/lovable-uploads/026bc53b-7de8-48d9-819d-f452a40983b0.png", alt: "4C Affairs" },
  { src: "/lovable-uploads/c8baaba3-dd73-4e08-8a0f-db6019a5e368.png", alt: "Cadila Pharmaceuticals Limited" },
  { src: "/lovable-uploads/4c287663-b59f-4d19-850e-a70f1b9df062.png", alt: "Pharmadev Infrastructure Limited" },
  { src: "/lovable-uploads/f36ade70-c79f-49a1-b6a2-5cadf64076ca.png", alt: "Divya Buildcon" },
  { src: "/lovable-uploads/20f2de2a-f755-4542-bcce-9af984e74ada.png", alt: "Gujarat - The Agri Business Destination" },
  { src: "/lovable-uploads/3e624599-7fff-4616-bebd-b34051be9a99.png", alt: "Marketing Unlimited" },
  { src: "/lovable-uploads/1cc066d4-1859-44e9-9392-718d5f4ba8c8.png", alt: "Rajyash - Excellence Endures" },
  { src: "/lovable-uploads/2a6dd2ab-6b1e-4da7-9a06-7352b1bffbb8.png", alt: "Ravi Group" },
];

const ClientLogoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  
  const itemsPerRow = 5;
  const rowsToShow = 2;
  const itemsPerSet = itemsPerRow * rowsToShow;
  const totalSets = Math.ceil(clientLogos.length / itemsPerSet);

  useEffect(() => {
    const interval = setInterval(() => {
      // Start the animation
      setAnimating(true);
      
      // After animation completes, change the index
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSets);
        setAnimating(false);
      }, 450); // slightly less than the animation duration
      
    }, 5000); // Update every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, [totalSets]);

  // Get the current logos to display (10 logos: 5 in each row)
  const startIdx = currentIndex * itemsPerSet;
  const currentLogos = clientLogos.slice(startIdx, startIdx + itemsPerSet);
  
  // Ensure we always have enough logos for display
  const firstRowLogos = currentLogos.slice(0, itemsPerRow);
  const secondRowLogos = currentLogos.slice(itemsPerRow, itemsPerSet);
  
  // Fill empty slots if needed
  while (firstRowLogos.length < itemsPerRow) {
    firstRowLogos.push(clientLogos[firstRowLogos.length % clientLogos.length]);
  }
  
  while (secondRowLogos.length < itemsPerRow) {
    secondRowLogos.push(clientLogos[(itemsPerRow + secondRowLogos.length) % clientLogos.length]);
  }
  
  return (
    <div className="overflow-hidden h-48 relative">
      <div className={`transition-all duration-500 ease-in-out absolute w-full
            ${animating ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
        {/* First row */}
        <div className="flex flex-row justify-between gap-4 mb-4">
          {firstRowLogos.map((logo, logoIndex) => (
            <div key={`${currentIndex}-row1-${logoIndex}`} className="w-1/5">
              <ClientLogo src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
        
        {/* Second row */}
        <div className="flex flex-row justify-between gap-4">
          {secondRowLogos.map((logo, logoIndex) => (
            <div key={`${currentIndex}-row2-${logoIndex}`} className="w-1/5">
              <ClientLogo src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogoCarousel;
