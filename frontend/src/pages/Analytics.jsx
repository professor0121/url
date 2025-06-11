import React, { useState } from 'react';
import { Plus, Calendar, Filter, X, Sparkles } from 'lucide-react';

export default function BitlyAnalytics() {
    const [dateRange, setDateRange] = useState({ start: '06/05/2025', end: '06/11/2025' });

    const countryStats = [
        { id: 1, country: "United States", clicks: 205, percentage: 57.3 },
        { id: 2, country: "Japan", clicks: 6, percentage: 1.7 },
        { id: 3, country: "Mexico", clicks: 19, percentage: 5.3 },
        { id: 4, country: "Russian Federation", clicks: 5, percentage: 1.4 },
        { id: 5, country: "India", clicks: 27, percentage: 7.5 },
        { id: 6, country: "Canada", clicks: 80, percentage: 22.3 },
        { id: 7, country: "United Kingdom", clicks: 205, percentage: 57.3 },
        { id: 8, country: "France", clicks: 80, percentage: 22.3 },
        { id: 9, country: "Germany", clicks: 80, percentage: 22.3 },
        { id: 10, country: "Spain", clicks: 80, percentage: 22.3 },
    ];


    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex items-center justify-between">
                        <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2">
                            <Plus className="w-4 h-4" />
                            <span>Add module</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Free Preview Banner */}
            <div className="bg-cyan-50 border-l-4 border-cyan-400 mx-6 mt-6 p-4 rounded-r-lg">
                <div className="flex items-start space-x-3">
                    <Sparkles className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <div>
                        <h3 className="text-cyan-800 font-semibold mb-1">Free preview</h3>
                        <p className="text-cyan-700">
                            This is an example of our new Analytics dashboard using sample data.{' '}
                            <button className="underline hover:no-underline font-medium">
                                Upgrade
                            </button>{' '}
                            to display your data in real-time and make this report actionable.
                        </p>
                    </div>
                </div>
            </div>

            {/* Filters Section */}
            <div className="max-w-7xl mx-auto px-6 py-6">
                <div className="flex items-center justify-between">
                    {/* Date Range Picker */}
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2">
                            <Calendar className="w-4 h-4 text-gray-500" />
                            <input
                                type="text"
                                value={dateRange.start}
                                onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
                                className="text-sm text-gray-700 bg-transparent border-none outline-none w-20"
                            />
                            <span className="text-gray-400">→</span>
                            <input
                                type="text"
                                value={dateRange.end}
                                onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
                                className="text-sm text-gray-700 bg-transparent border-none outline-none w-20"
                            />
                            <button className="text-gray-400 hover:text-gray-600">
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Add Filters Button */}
                        <button className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors">
                            <Filter className="w-4 h-4 text-gray-500" />
                            <span className="text-sm text-gray-700">Add filters</span>
                        </button>
                    </div>

                    {/* Data Scope */}
                    <div className="text-sm text-gray-600">
                        Showing data for all links and QR Codes
                    </div>
                </div>
            </div>

            {/* Main Content Area - Placeholder for modules */}
            <div className="max-w-7xl mx-auto px-6 pb-12">
               

                {/* Analytics Dashboard Modules */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Top performing date by clicks + scans */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">Top performing date by clicks + scans</h3>
                            <button className="text-gray-400 hover:text-gray-600">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                </svg>
                            </button>
                        </div>
                        <div className="text-center py-8">
                            <div className="text-2xl font-bold text-gray-900 mb-1">📈 May 23, 2025</div>
                            <div className="text-sm text-gray-600 mb-1">46 Clicks + scans</div>
                            <div className="text-xs text-gray-500">Jun 05 - Jun 11, 2025</div>
                        </div>
                    </div>

                    {/* Clicks + scans by device */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">Clicks + scans by device</h3>
                            <div className="flex space-x-2">
                                <button className="text-gray-400 hover:text-gray-600">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </button>
                                <button className="text-gray-400 hover:text-gray-600">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center justify-center mb-6">
                            <div className="relative w-48 h-48">
                                <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="35" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                                    <circle cx="50" cy="50" r="35" fill="none" stroke="#06b6d4" strokeWidth="8" strokeDasharray="76.9 219.9" strokeLinecap="round" />
                                    <circle cx="50" cy="50" r="35" fill="none" stroke="#3b82f6" strokeWidth="8" strokeDasharray="43.96 219.9" strokeDashoffset="-76.9" strokeLinecap="round" />
                                    <circle cx="50" cy="50" r="35" fill="none" stroke="#8b5cf6" strokeWidth="8" strokeDasharray="30.7 219.9" strokeDashoffset="-120.86" strokeLinecap="round" />
                                    <circle cx="50" cy="50" r="35" fill="none" stroke="#f97316" strokeWidth="8" strokeDasharray="21.98 219.9" strokeDashoffset="-151.56" strokeLinecap="round" />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-gray-900">381</div>
                                        <div className="text-sm text-gray-600">Clicks + Scans</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2 text-sm">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                                    <span className="text-gray-700">Desktop</span>
                                </div>
                                <span className="font-medium">146</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span className="text-gray-700">E-Reader</span>
                                </div>
                                <span className="font-medium">101</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                    <span className="text-gray-700">Tablet</span>
                                </div>
                                <span className="font-medium">70</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                                    <span className="text-gray-700">Mobile</span>
                                </div>
                                <span className="font-medium">50</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                    <span className="text-gray-700">Unknown</span>
                                </div>
                                <span className="font-medium">14</span>
                            </div>
                        </div>
                    </div>

                    {/* Clicks + scans over time */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">Clicks + scans over time</h3>
                            <div className="flex space-x-2">
                                <button className="text-gray-400 hover:text-gray-600">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </button>
                                <button className="text-gray-400 hover:text-gray-600">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="h-48 flex items-end justify-center space-x-1 px-4">
                            <svg className="w-full h-32" viewBox="0 0 400 120">
                                <polyline
                                    points="20,100 40,80 60,85 80,70 100,75 120,60 140,65 160,45 180,50 200,35 220,40 240,55 260,60 280,45 300,50 320,65 340,70 360,80 380,85"
                                    fill="none"
                                    stroke="#06b6d4"
                                    strokeWidth="2"
                                />
                                <g className="text-xs fill-gray-500">
                                    <text x="20" y="115">6/5</text>
                                    <text x="60" y="115">6/6</text>
                                    <text x="100" y="115">6/7</text>
                                    <text x="140" y="115">6/8</text>
                                    <text x="180" y="115">6/9</text>
                                    <text x="220" y="115">6/10</text>
                                    <text x="260" y="115">6/11</text>
                                </g>
                            </svg>
                        </div>
                    </div>

                    {/* Clicks + scans by referrer */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">Clicks + scans by referrer</h3>
                            <div className="flex space-x-2">
                                <button className="text-gray-400 hover:text-gray-600">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </button>
                                <button className="text-gray-400 hover:text-gray-600">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="flex items-end justify-center space-x-2 h-32 px-4">
                            <div className="flex flex-col items-center space-y-2">
                                <div className="w-8 h-16 bg-teal-500 rounded-t"></div>
                                <span className="text-xs text-gray-600">LinkedIn</span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <div className="w-8 h-8 bg-teal-400 rounded-t"></div>
                                <span className="text-xs text-gray-600">Facebook</span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <div className="w-8 h-12 bg-teal-500 rounded-t"></div>
                                <span className="text-xs text-gray-600">Google</span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <div className="w-8 h-6 bg-teal-400 rounded-t"></div>
                                <span className="text-xs text-gray-600">Twitter</span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <div className="w-8 h-10 bg-teal-500 rounded-t"></div>
                                <span className="text-xs text-gray-600">Bitly</span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <div className="w-8 h-8 bg-teal-400 rounded-t"></div>
                                <span className="text-xs text-gray-600">Direct</span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <div className="w-8 h-4 bg-teal-300 rounded-t"></div>
                                <span className="text-xs text-gray-600">Other</span>
                            </div>
                        </div>
                    </div>

                    {/* Top performing location by clicks + scans */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">Top performing location by clicks + scans</h3>
                            <button className="text-gray-400 hover:text-gray-600">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                </svg>
                            </button>
                        </div>
                        <div className="text-center py-8">
                            <div className="text-2xl font-bold text-gray-900 mb-1">🇺🇸 United States & United Kingdom</div>
                            <div className="text-sm text-gray-600 mb-1">205 Clicks + scans</div>
                            <div className="text-xs text-gray-500">Jun 05 - Jun 11, 2025</div>
                        </div>
                    </div>

                    {/* Clicks + scans by location - Map */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">Clicks + scans by location</h3>
                            <div className="flex space-x-2">
                                <button className="text-gray-400 hover:text-gray-600">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </button>
                                <button className="text-gray-400 hover:text-gray-600">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="h-48 bg-gray-50 rounded-lg flex items-center justify-center">
                            <svg className="w-full h-full" viewBox="0 0 400 200">
                                <g fill="#e5e7eb" stroke="#d1d5db" strokeWidth="0.5">
                                    <path d="M50,50 Q100,30 150,50 Q200,30 250,50 Q300,30 350,50 L350,150 Q300,170 250,150 Q200,170 150,150 Q100,170 50,150 Z" fill="#6ee7b7" />
                                    <path d="M320,60 Q340,50 360,60 L360,90 Q340,100 320,90 Z" fill="#6ee7b7" />
                                    <circle cx="80" cy="100" r="20" fill="#34d399" />
                                    <circle cx="180" cy="120" r="15" fill="#10b981" />
                                    <circle cx="280" cy="80" r="12" fill="#059669" />
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Clicks + scans by location - Table */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">Clicks + scans by location</h3>
                        <div className="flex space-x-2">
                            <button className="text-gray-400 hover:text-gray-600">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </button>
                            <button className="text-gray-400 hover:text-gray-600">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="flex space-x-4 mb-4">
                        <button className="px-4 py-2 bg-gray-100 text-gray-900 rounded-lg font-medium">Countries</button>
                        <button className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">Cities</button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="text-left py-3 px-4 font-medium text-gray-700">#</th>
                                    <th className="text-left py-3 px-4 font-medium text-gray-700">Country</th>
                                    <th className="text-right py-3 px-4 font-medium text-gray-700">Clicks + scans</th>
                                    <th className="text-right py-3 px-4 font-medium text-gray-700">%</th>
                                </tr>
                            </thead>
                            <tbody>
                                {countryStats.map((item) => (
                                    <tr key={item.id} className="border-b border-gray-100">
                                        <td className="py-3 px-4 text-gray-600">{item.id}</td>
                                        <td className="py-3 px-4 font-medium">{item.country}</td>
                                        <td className="py-3 px-4 text-right font-medium">{item.clicks}</td>
                                        <td className="py-3 px-4 text-right text-gray-600">{item.percentage}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>


                    <div className="flex items-center justify-center space-x-2 mt-6">
                        <button className="text-gray-400 hover:text-gray-600">‹</button>
                        <button className="w-8 h-8 bg-blue-600 text-white rounded font-medium">1</button>
                        <button className="w-8 h-8 text-gray-600 hover:bg-gray-100 rounded">2</button>
                        <button className="text-gray-400 hover:text-gray-600">›</button>
                    </div>
                </div>
            </div>
        </div>
    );
}