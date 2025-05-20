
import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { Dialog, DialogContent } from "@/components/ui/dialog";

const VideoSection = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="py-20 relative overflow-hidden h-[600px]">
      {/* Replace the VideoMap with a background image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <img 
          src="/lovable-uploads/95146a72-40fc-425a-b02b-818c29b48849.png"
          alt="Vishal Decor Event Background"
          className="absolute inset-0 w-full h-full object-cover z-[-1]"
        />
      </div>
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
  );
};

export default VideoSection;
