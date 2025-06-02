
import React from 'react';
import { Wrench, Clock, Mail, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Maintenance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <AlertTriangle className="mx-auto h-24 w-24 text-red-500 mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Website Maintenance
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            वेबसाइट को वापस लाइव करने के लिए due amount clear करिये
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/lovable-uploads/c84c3afc-1bd6-4e33-83b0-50d54b3cb554.png" 
              alt="Vishal Decor Logo" 
              className="h-16 w-auto"
            />
          </div>
          
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Vishal Decor And Events Pvt Ltd
          </h2>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <div className="flex items-center justify-center mb-4">
              <AlertTriangle className="h-8 w-8 text-red-500 mr-3" />
              <h3 className="text-xl font-bold text-red-800">Payment Required</h3>
            </div>
            <p className="text-red-700 text-lg font-medium">
              वेबसाइट को वापस लाइव करने के लिए due amount clear करिये
            </p>
            <p className="text-red-600 text-sm mt-2">
              To bring the website back online, please clear the due amount
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="flex items-start space-x-3">
              <Clock className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900">Immediate Action Required</h3>
                <p className="text-gray-600 text-sm">
                  Website will be restored once payment is processed.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Mail className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900">Contact for Payment</h3>
                <p className="text-gray-600 text-sm">
                  Please contact us immediately to resolve this issue.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-gray-500 text-sm">
          <p>Please clear your due amount to restore website access.</p>
          <p className="mt-2">
            © 2025 Vishal Decor And Events Pvt Ltd | All rights reserved
          </p>
        </div>

        <div className="mt-8">
          <Button 
            onClick={() => window.location.reload()} 
            variant="outline"
            className="bg-white hover:bg-gray-50"
          >
            Refresh Page
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
