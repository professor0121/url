import React from 'react';
import { BarChart3, Palette, Eye } from 'lucide-react';

export default function QRCodePage() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Content Area */}
    
        <div className='w-full flex justify-center align-center'>
            <img className='h-[300px] ' src="/images/bitly.png" alt="" />
        </div>
        {/* Title and Description */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Connect your audience with a simple scan
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Create a QR Code from any short link. Then edit, customize, and track 
            your QR Codes here.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center space-y-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition-colors duration-200 text-sm">
            Create a Bitly Code
          </button>
          <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}