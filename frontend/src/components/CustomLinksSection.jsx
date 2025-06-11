  import { Copy } from "lucide-react";

  const CustomLinksSection = () => (
    <div className="space-y-4">
      <div className="bg-gray-100 rounded-lg p-4 border border-gray-200">
        <div className="flex items-center space-x-2 text-gray-600">
          <Copy size={16} />
          <span className="text-sm">bit.ly/2BNGkd</span>
          <Copy size={14} className="cursor-pointer hover:text-gray-800" />
        </div>
      </div>
      
      <div className="bg-white rounded-lg p-4 border border-gray-200">
        <div className="flex items-center space-x-2">
          <Copy size={16} className="text-gray-600" />
          <span className="text-blue-600 font-medium">yourbrnd.co/link</span>
        </div>
      </div>
    </div>
  )

  export default CustomLinksSection