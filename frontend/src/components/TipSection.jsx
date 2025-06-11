import { Target, X } from "lucide-react";
  
  
  const TipSection = ({ onClose ,title,description }) => (
    <div className="bg-white rounded-lg p-6 shadow-sm mt-6 border-l-4 border-red-400">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
            <Target className="text-red-500" size={20} />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600">
                {description}
            </p>
          </div>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
          <X size={20} />
        </button>
      </div>
    </div>
  );

  export default TipSection;