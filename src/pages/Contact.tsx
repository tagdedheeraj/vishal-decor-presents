
import React from 'react';
import ImageSlider from '@/components/ui/ImageSlider';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <main>
      {/* Hero Section with Image Slider */}
      <section>
        <ImageSlider />
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About</h2>
              <p className="mb-8 text-gray-700">
                We are committed to providing our customers with not service while offering our emod tempor incididunt ut labore employees the best training.
              </p>

              <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="mr-4 h-6 w-6 text-gold" />
                  <div>
                    <h4 className="font-bold">Address</h4>
                    <p className="text-gray-700">
                      B-401, SAMUDRA COMPLEX, NR. GIRISH COLD DRINK CROSS ROAD C.G. ROAD, NAVRANGPURA Ahmedabad, Gujarat, India 380009
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="mr-4 h-6 w-6 text-gold" />
                  <div>
                    <h4 className="font-bold">Contact</h4>
                    <p className="text-gray-700">
                      +91 88664 44000<br />
                      +91 97253 04050
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="mr-4 h-6 w-6 text-gold" />
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <p className="text-gray-700">digital.vishaldecor@gmail.com</p>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="mt-8 h-80 bg-gray-200 rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9268773278946!2d72.5619!3d23.03006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84e8f8295a89%3A0x87e0935c07a996f1!2sC.%20G.%20Road%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1652258324126!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Vishal Decor & Event Location"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                      placeholder="Subject"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  
                  <Button className="bg-gold hover:bg-gold-dark text-white w-full">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
