
import React, { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
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
];

const ClientLogoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(clientLogos.length / itemsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
    }, 3000); // 3 seconds interval

    return () => clearInterval(interval);
  }, [totalPages]);

  // Create sets of 4 logos for each page
  const logoPages = Array.from({ length: totalPages }, (_, i) => {
    const startIdx = i * itemsPerPage;
    return clientLogos.slice(startIdx, startIdx + itemsPerPage);
  });

  return (
    <Carousel
      opts={{
        align: "start",
        axis: "y", // Vertical scrolling
      }}
      className="w-full"
      orientation="vertical"
    >
      <CarouselContent className="h-[600px]">
        {logoPages.map((page, pageIndex) => (
          <CarouselItem key={pageIndex} className={`flex flex-col gap-6 pt-0 ${pageIndex === currentIndex ? 'animate-fade-in' : ''}`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {page.map((logo, logoIndex) => (
                <ClientLogo key={logoIndex} src={logo.src} alt={logo.alt} />
              ))}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ClientLogoCarousel;
