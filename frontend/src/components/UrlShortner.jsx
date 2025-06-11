import React, { useState } from 'react';
import { 
  Home, 
  Link, 
  QrCode, 
  BarChart3, 
  Megaphone, 
  Globe, 
  Settings, 
  Plus,
  Search,
  HelpCircle,
  User,
  Target,
  ArrowRight,
  Check,
  Copy,
  ChevronUp,
  X
} from 'lucide-react';

const BitlyDashboard = () => {
  const [url, setUrl] = useState('');
  const [showTip, setShowTip] = useState(true);

  const Sidebar = () => (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      <div className="p-4">
        <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
          Create new
        </button>
      </div>
      
      <nav className="flex-1 px-4">
        <div className="space-y-1">
          <SidebarItem icon={Home} label="Home" active />
          <SidebarItem icon={Link} label="Links" />
          <SidebarItem icon={QrCode} label="QR Codes" badge="Try it" />
          <SidebarItem icon={BarChart3} label="Pages" />
          <SidebarItem icon={BarChart3} label="Analytics" badge="Try it" />
          <SidebarItem icon={Megaphone} label="Campaigns" />
          <SidebarItem icon={Globe} label="Custom domains" />
        </div>
      </nav>
      
      <div className="p-4 border-t border-gray-200">
        <SidebarItem icon={Settings} label="Settings" />
      </div>
    </div>
  );

  const SidebarItem = ({ icon: Icon, label, active, badge }) => (
    <div className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-colors ${
      active ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
    }`}>
      <div className="flex items-center space-x-3">
        <Icon size={20} />
        <span className="font-medium">{label}</span>
      </div>
      {badge && (
        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
          {badge}
        </span>
      )}
    </div>
  );

  const Header = () => (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">b</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-500">
            <span className="cursor-pointer hover:text-gray-700">←</span>
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
          <HelpCircle className="text-gray-400 cursor-pointer hover:text-gray-600" size={24} />
          <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">A</span>
          </div>
          <span className="text-gray-700 font-medium">Abhishek Kushwaha</span>
          <ChevronUp className="text-gray-400" size={16} />
        </div>
      </div>
    </div>
  );

  const MainContent = () => (
    <div className="flex-1 bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Your Connections Platform</h1>
          <div className="flex items-center space-x-2 text-teal-600">
            <span className="text-2xl">✨</span>
            <span className="text-sm">Get custom links and a complimentary domain. </span>
            <button className="underline font-medium hover:text-teal-700">Upgrade now</button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <QuickCreateSection url={url} setUrl={setUrl} />
            {showTip && <TipSection onClose={() => setShowTip(false)} />}
            <GettingStartedSection />
          </div>
          
          <div className="space-y-6">
            <PagesSection />
            <CustomLinksSection />
          </div>
        </div>
      </div>
    </div>
  );

  const QuickCreateSection = ({ url, setUrl }) => (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Quick create</h2>
      <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
        <span>You can create 4 more short links this month.</span>
        <div className="w-4 h-4 bg-gray-400 rounded-full flex items-center justify-center">
          <span className="text-white text-xs">?</span>
        </div>
      </div>

      <div className="flex items-center space-x-4 mb-6">
        <button className="flex items-center space-x-2 px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition-colors">
          <Link size={20} />
          <span className="font-medium">Short link</span>
        </button>
        <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors">
          <QrCode size={20} />
          <span className="font-medium">QR Code</span>
        </button>
      </div>

      <div className="mb-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
          <span>Domain: bit.ly</span>
          <div className="w-4 h-4 bg-gray-800 rounded flex items-center justify-center">
            <span className="text-white text-xs">🔒</span>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Enter your destination URL
        </label>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com/my-long-url"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
        Create your Bitly link
      </button>
    </div>
  );

  const TipSection = ({ onClose }) => (
    <div className="bg-white rounded-lg p-6 shadow-sm mt-6 border-l-4 border-red-400">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
            <Target className="text-red-500" size={20} />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-2">Bring people to your content</h3>
            <p className="text-gray-600">
              Create and share unique links and QR Codes to attract attention, connect with more followers, and drive traffic to your content.
            </p>
          </div>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
          <X size={20} />
        </button>
      </div>
    </div>
  );

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
  );

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <MainContent />
      </div>
    </div>
  );
};

export default BitlyDashboard;