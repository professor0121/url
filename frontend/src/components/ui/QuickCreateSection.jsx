import { Link, QrCode } from 'lucide-react';

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
export default QuickCreateSection;