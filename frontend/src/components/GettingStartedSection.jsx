 import { Check } from "lucide-react";

 const GettingStartedSection = () => (
    <div className="bg-white rounded-lg p-6 shadow-sm mt-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Getting started with Bitly</h3>
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold">40%</span>
          <div className="w-16 h-2 bg-gray-200 rounded-full">
            <div className="w-6 h-2 bg-green-500 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
          <Check className="text-white" size={14} />
        </div>
        <span className="text-gray-600 line-through">Make a Bitly Link</span>
      </div>
    </div>
  );

  export default GettingStartedSection