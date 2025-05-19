
import React from 'react';
import ImageSlider from '@/components/ui/ImageSlider';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, icon, description, link }: { title: string; icon: string; description: string; link: string }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 service-card">
    <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mb-4 mx-auto">
      <span className="text-white text-2xl">{icon}</span>
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
  return (
    <main>
      {/* Hero Section with Image Slider */}
      <section>
        <ImageSlider />
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Services</h2>
            <p className="text-xl text-gray-600">We Shape the Perfect Solution</p>
            <p className="mt-4 max-w-2xl mx-auto">
              To redefine excellence by creating perfect solutions that inspire our customers and uplift our team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            <ServiceCard 
              title="Government" 
              icon="🏛️" 
              description="Exceptional decoration services for government exhibitions and events."
              link="/services/government"
            />
            <ServiceCard 
              title="Corporate" 
              icon="🏢" 
              description="Custom stall fabrication and design for corporate events."
              link="/services/corporate"
            />
            <ServiceCard 
              title="Stall Design Fabrication" 
              icon="🎨" 
              description="Innovative exhibition design and stall fabrication services."
              link="/services/stall-design-fabrication"
            />
            <ServiceCard 
              title="Other Event" 
              icon="🎭" 
              description="Comprehensive solutions for various event types."
              link="/services/other-event"
            />
            <ServiceCard 
              title="Wedding" 
              icon="💍" 
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
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Leading Decore & Event Management Company</h2>
            <p className="text-xl text-gray-300">Watch our government event showcase</p>
          </div>
          <div className="max-w-4xl mx-auto aspect-w-16 aspect-h-9">
            <div className="w-full h-0 pb-[56.25%] relative">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Vishal Decor Event Showcase"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Clients</h2>
            <p className="text-xl text-gray-600">Trusted by leading organizations</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {[...Array(10)].map((_, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg flex items-center justify-center">
                <div className="text-xl font-bold text-gray-500">Client {index + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
