import { Link, useLocation } from "react-router-dom";
import SidebarItem from "./ui/SidebarItem";
import {
  Home,
  Link as LinkIcon,
  QrCode,
  BarChart3,
  Megaphone,
  Globe,
  Settings,
  BookOpen,
} from "lucide-react";

// Navigation items
const sidebarLinks = [
  { label: "Home", icon: Home, to: "/" },
  { label: "Links", icon: LinkIcon, to: "/links" },
  { label: "QR Codes", icon: QrCode, to: "/qr", badge: "Try it" },
  { label: "Pages", icon: BookOpen, to: "/pages" },
  { label: "Analytics", icon: BarChart3, to: "/analytics", badge: "Try it" },
  { label: "Campaigns", icon: Megaphone, to: "/campaigns" },
  { label: "Custom domains", icon: Globe, to: "/domains" },
];

const settingsLink = { label: "Settings", icon: Settings, to: "/settings" };

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 flex flex-col z-40 overflow-y-auto">
      <div className="p-4">
        <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
          Create new
        </button>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {sidebarLinks.map((item, idx) => (
          <Link to={item.to} key={idx}>
            <SidebarItem
              icon={item.icon}
              label={item.label}
              badge={item.badge}
              active={location.pathname === item.to}
            />
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-200">
        <Link to={settingsLink.to}>
          <SidebarItem
            icon={settingsLink.icon}
            label={settingsLink.label}
            active={location.pathname === settingsLink.to}
          />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
