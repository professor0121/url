import React, { useState } from 'react';
import { Search, Calendar, Filter, Lock, Share, Copy, Edit, MoreHorizontal, BarChart3, Tag, Eye, EyeOff } from 'lucide-react';

const BitlyLinksPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLinks, setSelectedLinks] = useState([]);
  const [showFilter, setShowFilter] = useState('Active');

  const links = [
    {
      id: 1,
      title: 'URL Shortener | Shorten URLs with a Custom Link Shortener | Bitly',
      shortUrl: 'bit.ly/43Ftzd',
      originalUrl: 'https://bitly.com/pages/products/url-shortener',
      createdDate: 'Jun 11, 2025',
      clicks: 0,
      tags: []
    }
  ];

  const handleSelectLink = (linkId) => {
    setSelectedLinks(prev => 
      prev.includes(linkId) 
        ? prev.filter(id => id !== linkId)
        : [...prev, linkId]
    );
  };

  const handleSelectAll = () => {
    setSelectedLinks(selectedLinks.length === links.length ? [] : links.map(link => link.id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">Bitly Links</h1>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
            Create link
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search links"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Calendar className="w-4 h-4" />
            Filter by created date
          </button>
          
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="w-4 h-4" />
            Add filters
          </button>
        </div>
      </div>

      {/* Action Bar */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">
              {selectedLinks.length} selected
            </span>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1 px-3 py-1 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                <Lock className="w-4 h-4" />
                Export
              </button>
              <button className="flex items-center gap-1 px-3 py-1 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                <EyeOff className="w-4 h-4" />
                Hide
              </button>
              <button className="flex items-center gap-1 px-3 py-1 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                <Tag className="w-4 h-4" />
                Tag
              </button>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Show:</span>
            <select 
              value={showFilter}
              onChange={(e) => setShowFilter(e.target.value)}
              className="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option>Active</option>
              <option>Archived</option>
              <option>All</option>
            </select>
          </div>
        </div>
      </div>

      {/* Links List */}
      <div className="px-6 py-6">
        {links.map((link) => (
          <div key={link.id} className="bg-white rounded-lg border border-gray-200 p-6 mb-4 hover:shadow-sm transition-shadow">
            <div className="flex items-start gap-4">
              <input
                type="checkbox"
                checked={selectedLinks.includes(link.id)}
                onChange={() => handleSelectLink(link.id)}
                className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {link.title}
                </h3>
                <div className="text-blue-600 font-medium mb-2">
                  {link.shortUrl}
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  {link.originalUrl}
                </div>
                
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <BarChart3 className="w-4 h-4" />
                    Click data
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {link.createdDate}
                  </div>
                  <div className="flex items-center gap-1">
                    <Tag className="w-4 h-4" />
                    {link.tags.length === 0 ? 'No tags' : link.tags.join(', ')}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 flex-shrink-0">
                <button className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Copy className="w-4 h-4" />
                  Copy
                </button>
                <button className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Share className="w-4 h-4" />
                  Share
                </button>
                <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Promotional Banner */}
      <div className="px-6 py-4">
        <div className="bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <div className="text-teal-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.381z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-sm text-teal-800">
              Change a link's destination, even after you've shared it. Get redirects with every plan.{' '}
              <button className="underline font-medium hover:no-underline">
                View plans
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* End of Links Message */}
      <div className="text-center py-8">
        <div className="text-gray-500 text-sm">
          <span className="inline-block w-16 h-px bg-gray-300 mr-4"></span>
          You've reached the end of your links
          <span className="inline-block w-16 h-px bg-gray-300 ml-4"></span>
        </div>
      </div>
    </div>
  );
};

export default BitlyLinksPage;