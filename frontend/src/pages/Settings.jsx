import React from 'react'
import Sidebar from '../components/settings/Sidebar'
import SettingsMain from '../components/settings/SettingsMain'

const Settings = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar - Fixed, no scroll */}
      <div className="w-64 bg-gray-100 border-r overflow-y-auto flex-shrink-0 h-[90%] fixed">
        <Sidebar />
      </div>

      {/* Main Content - Scrollable */}
      <div className="flex-1 ml-64 overflow-y-auto">
        <SettingsMain />
      </div>
    </div>
  )
}

export default Settings
