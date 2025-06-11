import { ArrowRight } from "lucide-react";

const PagesSection = () => (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-900">Pages that inspire action</h3>
        <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-xl">📊</span>
          </div>
        </div>
      </div>
      
      <p className="text-gray-600 mb-4 text-sm">
        Customize your page with ease, track user engagement, and turn visits into conversions.
      </p>
      
      <button className="flex items-center space-x-2 text-blue-600 font-medium hover:text-blue-700">
        <span>Get started</span>
        <ArrowRight size={16} />
      </button>
    </div>
  );

  export default PagesSection