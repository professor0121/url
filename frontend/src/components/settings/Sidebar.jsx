import { NavLink } from "react-router-dom";

const SettingsSidebar = () => {
  return (
    <aside className="w-64 bg-gray-100 h-full p-4 border-r">
      <nav className="mb-6">
        <div className="text-sm font-semibold text-gray-600 mb-2">Your settings</div>
        <ul className="space-y-1">
          <li>
            <NavLink to="/settings/profile" className="block px-3 py-2 rounded hover:bg-gray-200" activeClassName="bg-gray-300">
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings/integrations" className="block px-3 py-2 rounded hover:bg-gray-200" activeClassName="bg-gray-300">
              Integrations
            </NavLink>
          </li>
        </ul>
      </nav>

      <nav className="mb-6">
        <div className="text-sm font-semibold text-gray-600 mb-2">Account settings</div>
        <ul className="space-y-1">
          {[
            { label: "Account details", path: "details" },
            { label: "Billing and usage", path: "billing" },
            { label: "Users", path: "users" },
            { label: "Groups", path: "groups" },
            { label: "Single sign-on", path: "sso" },
            { label: "Account discovery", path: "account-discovery" },
            { label: "Mobile deep links", path: "deeplinks" },
            { label: "Webhooks", path: "webhooks" },
            { label: "Bulk upload", path: "bulk-upload" },
            { label: "Activity log", path: "activity-log" },
          ].map(({ label, path }) => (
            <li key={path}>
              <NavLink to={`/settings/${path}`} className="block px-3 py-2 rounded hover:bg-gray-200" activeClassName="bg-gray-300">
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <nav>
        <div className="text-sm font-semibold text-gray-600 mb-2">Developer settings</div>
        <ul className="space-y-1">
          <li>
            <NavLink to="/settings/api" className="block px-3 py-2 rounded hover:bg-gray-200" activeClassName="bg-gray-300">
              API
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SettingsSidebar;
