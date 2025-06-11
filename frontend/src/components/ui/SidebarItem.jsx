const SidebarItem = ({ icon: Icon, label, active, badge }) => (
    <div className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-colors ${active ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
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

export default SidebarItem;