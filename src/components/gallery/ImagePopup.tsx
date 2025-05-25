
import React, { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface ImagePopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  currentImageIndex: number;
  images: string[];
  onPrevious: () => void;
  onNext: () => void;
}

const ImagePopup: React.FC<ImagePopupProps> = ({
  open,
  onOpenChange,
  currentImageIndex,
  images,
  onPrevious,
  onNext,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      onPrevious();
      setIsLoading(true);
    } else if (e.key === 'ArrowRight') {
      onNext();
      setIsLoading(true);
    } else if (e.key === 'Escape') {
      onOpenChange(false);
    }
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="max-w-4xl p-0 bg-transparent border-none shadow-none" 
        onKeyDown={handleKeyDown}
        onInteractOutside={() => onOpenChange(false)}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Close button */}
          <Button 
            variant="ghost" 
            className="absolute right-4 top-4 z-50 rounded-full p-2 bg-black/50 hover:bg-black/70 text-white"
            onClick={() => onOpenChange(false)}
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </Button>

          {/* Image container */}
          <div className="w-full h-[80vh] flex items-center justify-center relative">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 border-t-4 border-orange-500 border-solid rounded-full animate-spin"></div>
              </div>
            )}
            
            <img 
              src={images[currentImageIndex]} 
              alt={`Expanded gallery image ${currentImageIndex + 1}`}
              className={`max-h-full max-w-full object-contain ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity`}
              onLoad={handleImageLoad}
              onError={handleImageLoad}
              loading="lazy"
              decoding="async"
            />
            
            {/* Navigation buttons */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between items-center px-4">
              <Button 
                variant="ghost" 
                className="rounded-full p-2 bg-black/50 hover:bg-black/70 text-white"
                onClick={() => {
                  setIsLoading(true);
                  onPrevious();
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="sr-only">Previous</span>
              </Button>
              
              <Button 
                variant="ghost" 
                className="rounded-full p-2 bg-black/50 hover:bg-black/70 text-white"
                onClick={() => {
                  setIsLoading(true);
                  onNext();
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="sr-only">Next</span>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImagePopup;
