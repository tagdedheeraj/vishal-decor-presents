
import React from 'react';

const About = () => {
  return (
    <main>
      {/* Page Header Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: "url('/lovable-uploads/8d4af39d-0594-4344-83df-ad312744db22.png')" }}
        ></div>
        <div className="absolute inset-0 bg-navy bg-opacity-70 z-0"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">About Us</h1>
          <p className="text-xl text-white mb-6">Discover Our Story and Vision</p>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-gold text-xl font-medium mb-2">WELCOME TO</h2>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">VISHAL DECOR & EVENT PVT LTD</h1>
            <h3 className="text-xl md:text-2xl font-semibold mb-6">STEP BEYOND YOUR EXPECTATIONS.</h3>
            <p className="text-lg font-medium mb-8">LET'S CREATE EVERY OCCASION & MOMENT MORE THAN PERFECT!</p>
            
            <div className="text-left space-y-6">
              <p>
                We specialize in crafting seamless and unforgettable events for government agencies, corporate clients, and social celebrations. With a proven track record of excellence, we bring a strategic and personalized approach to every occasion—whether it's a high-profile government function, a dynamic corporate conference, or an elegant private gathering. Our experienced team blends creativity with precision, ensuring every detail is flawlessly executed from concept to completion. Committed to quality, professionalism, and innovation, we transform ideas into experiences that leave lasting impressions.
              </p>
              <p>
                Vishal Décor And Event Pvt. Ltd is the venture of creating experiences and our staunch belief is that an event may be forgotten, but an experience will last for a lifetime. We incorporate integrity and creativity to enhance the event experience and create inspiring and intoxicating celebrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Excellent planning and implementation</li>
                  <li>A technical pool of result-oriented professionals</li>
                  <li>On time implementation</li>
                  <li>Stretching your budget to its farthest</li>
                  <li>Holistic solutions either customized bespoke services or in packaged format</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Excellent client servicing</li>
                  <li>25 years' experience of services</li>
                  <li>In house production facilities and long established vendor relation</li>
                  <li>All India Approach: Events, Conferences, trade fairs and Exhibition, weddings</li>
                  <li>Rich and varied experience in the industry</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
