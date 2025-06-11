import  {Search,HelpCircle,ChevronUp} from "lucide-react"
const Header = () => {
  return (
    <div className="fixed w-full bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">b</span>
              </div>
              
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                />
              </div>
              <button className="bg-teal-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-teal-700 transition-colors">
                Upgrade
              </button>
              
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                <HelpCircle className="text-gray-400 cursor-pointer hover:text-gray-600" size={24} />
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">A</span>
              </div>
              <span className="text-gray-700 font-medium">Abhishek Kushwaha</span>
              <ChevronUp className="text-gray-400" size={16} />
            </div>
          </div>
        </div>
  )
};
export default Header;
