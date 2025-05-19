
import React, { useState, useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';

const WhatsAppPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the popup button after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/919725304050`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {!isOpen ? (
        <button
          onClick={handleOpen}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center transition-all duration-300 animate-bounce"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      ) : (
        <div className="bg-white rounded-lg shadow-xl p-4 w-72 transition-all duration-300 animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-800">Chat with us</h3>
            <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
              <X className="h-5 w-5" />
            </button>
          </div>
          <p className="text-gray-600 mb-4">Hello! Need help with event planning? Chat with us on WhatsApp.</p>
          <button
            onClick={handleWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full w-full flex items-center justify-center gap-2"
          >
            <MessageCircle className="h-5 w-5" />
            <span>+91 97253 04050</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default WhatsAppPopup;
