import React, { useState } from 'react';
import { Search, MoreHorizontal, Share2, BarChart3, Edit, Calendar, Eye, TrendingUp, Info } from 'lucide-react';

export default function BitlyPages() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">Bitly Pages</h1>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
              Create Page
            </button>
          </div>
          
          {/* Search and Plan Info */}
          <div className="flex items-center justify-between mt-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search pages"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <span>Your plan includes 1 more page</span>
              <Info className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Item */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-start space-x-4">
            {/* Page Thumbnail */}
            <div className="w-24 h-32 bg-gradient-to-b from-amber-100 to-amber-200 rounded-lg overflow-hidden flex-shrink-0 border border-gray-200">
              <div className="w-full h-full flex flex-col justify-center items-center p-2">
                <div className="w-8 h-8 bg-gray-800 rounded-full mb-2 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">ONLY</span>
                </div>
                <div className="space-y-1 w-full">
                  <div className="h-1 bg-gray-400 rounded w-full"></div>
                  <div className="h-1 bg-gray-400 rounded w-3/4"></div>
                  <div className="h-1 bg-gray-400 rounded w-1/2"></div>
                </div>
              </div>
            </div>

            {/* Page Details */}
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    bit.ly/m/mainihioogghdghiensoeiraoεir
                  </h3>
                  <div className="flex items-center space-x-6 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>Mar 6, 2025</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>Updated 3 months ago</span>
                    </div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <BarChart3 className="w-4 h-4" />
                    <span className="text-sm font-medium">Activity</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <Edit className="w-4 h-4" />
                    <span className="text-sm font-medium">Edit</span>
                  </button>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center space-x-8 text-sm">
                <div className="flex items-center space-x-1 text-gray-600">
                  <Eye className="w-4 h-4" />
                  <span className="font-semibold text-gray-900">0</span>
                  <span>views</span>
                </div>
                <div className="flex items-center space-x-1 text-gray-600">
                  <TrendingUp className="w-4 h-4" />
                  <span className="font-semibold text-gray-900">0</span>
                  <span>engagements</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* End Message */}
        <div className="text-center py-12">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px bg-gray-300 flex-1"></div>
            <span className="px-4 text-gray-500 font-medium">You've reached the end of your Pages</span>
            <div className="h-px bg-gray-300 flex-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}