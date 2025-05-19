
import React, { useState } from 'react';
import ImageSlider from '@/components/ui/ImageSlider';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Play, Award, Briefcase, Layers, Music, Image } from 'lucide-react';
import VideoMap from '@/components/ui/VideoMap';
import ClientLogoCarousel from '@/components/ui/ClientLogoCarousel';

const ServiceCard = ({ title, icon, description, link }: { title: string; icon: React.ReactNode; description: string; link: string }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 service-card">
    <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mb-4 mx-auto">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-center mb-2">{title}</h3>
    <p className="text-gray-600 text-center mb-4">{description}</p>
    <div className="text-center">
      <Link to={link}>
        <Button variant="outline" className="border-gold text-navy hover:bg-gold hover:text-white">
          Read More
        </Button>
      </Link>
    </div>
  </div>
);

const Index = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <main>
      {/* Hero Section with Image Slider */}
      <section>
        <ImageSlider />
      </section>

      {/* Services Section */}
      <section className="py-20 bg-orange-500">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">Our Services</h2>
            <p className="text-xl text-white">We Shape the Perfect Solution</p>
            <p className="mt-4 max-w-2xl mx-auto text-white">
              To redefine excellence by creating perfect solutions that inspire our customers and uplift our team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            <ServiceCard 
              title="Government" 
              icon={<Award size={28} className="text-white" />} 
              description="Exceptional decoration services for government exhibitions and events."
              link="/services/government"
            />
            <ServiceCard 
              title="Corporate" 
              icon={<Briefcase size={28} className="text-white" />} 
              description="Custom stall fabrication and design for corporate events."
              link="/services/corporate"
            />
            <ServiceCard 
              title="Stall Design Fabrication" 
              icon={<Layers size={28} className="text-white" />} 
              description="Innovative exhibition design and stall fabrication services."
              link="/services/stall-design-fabrication"
            />
            <ServiceCard 
              title="Other Event" 
              icon={<Music size={28} className="text-white" />} 
              description="Comprehensive solutions for various event types."
              link="/services/other-event"
            />
            <ServiceCard 
              title="Wedding" 
              icon={<Image size={28} className="text-white" />} 
              description="Creating captivating wedding exhibition booths and decorations."
              link="/services/wedding"
            />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/lovable-uploads/80b51345-67cb-4af8-9739-ec4b36c04bff.png" 
                alt="Vishal Decor & Event Speaker" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl font-medium text-gold mb-2">Our Introductions</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">WELCOME TO VISHAL DECOR & EVENT PVT LTD</h3>
              <p className="mb-4">
                Vishal Décor And Event Pvt. Ltd. is your one-stop destination for all event solutions. We transform our clients' imaginations into stunning realities, delivering events that leave lasting impressions.
              </p>
              <p className="mb-4">
                With a passion for creativity and innovation, we bring fresh ideas and unique concepts to every project—ensuring no two events are ever the same.
              </p>
              <p className="mb-4">
                From Exhibitions and Trade Fairs to Corporate Events, Government Functions, Road Shows, Agenda-Based Conferences, Product Launches, and a variety of private celebrations such as Weddings, Social Gatherings, and Religious Functions, we handle it all with precision and flair.
              </p>
              <p>
                Backed by over 25 years of experience, our legacy of excellence is reflected in the glowing smiles of our clients—captured beautifully in our gallery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section className="py-20 relative overflow-hidden h-[600px]">
        <VideoMap />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white text-shadow">Leading Decore & Event Management Company</h2>
            <p className="text-xl text-white text-shadow">Watch our government event showcase</p>
          </div>
          <div className="max-w-4xl mx-auto flex items-center justify-center">
            <button 
              onClick={() => setVideoOpen(true)}
              className="relative group"
              aria-label="Play video"
            >
              <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center
                group-hover:scale-110 transition-transform duration-300">
                <div className="relative w-20 h-20 rounded-full bg-primary flex items-center justify-center
                  animate-pulse group-hover:animate-none">
                  <Play className="h-10 w-10 text-white fill-white ml-2" />
                </div>
              </div>
              <span className="block mt-4 text-white font-medium text-shadow">Watch Video</span>
            </button>
          </div>
        </div>

        <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
          <DialogContent className="sm:max-w-[900px] p-0 bg-black">
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/UFhINns9l4s?autoplay=${videoOpen ? '1' : '0'}`}
                title="Vishal Decor Event Showcase"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </DialogContent>
        </Dialog>
      </section>

      {/* Clients Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Clients</h2>
            <p className="text-xl text-gray-600">Trusted by leading organizations</p>
          </div>
          <div className="max-w-6xl mx-auto h-64">
            <ClientLogoCarousel />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
