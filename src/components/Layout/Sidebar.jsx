import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Home, Briefcase, Bus, User, Settings as SettingsIcon, DollarSign } from 'lucide-react'; // Ensure all icons are imported

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [usersOpen, setUsersOpen] = useState(false);

  const menuItems = [
    { name: 'Dashboard', path: '/', icon: <Home size={20} /> },
    { name: 'Agency', path: '/agency', icon: <Briefcase size={20} /> },
    { name: 'Buses', path: '/buses', icon: <Bus size={20} /> },
    {
      name: 'Users',
      icon: <User size={20} />,
      submenu: [
        { name: 'Customers', path: '/users/customers' },
        { name: 'Drivers', path: '/users/drivers' },
      ],
    },
    { name: 'Reservations', path: '/reservations', icon: <DollarSign size={20} /> },
    { name: 'Payments', path: '/payments', icon: <DollarSign size={20} /> },
    { name: 'Settings', path: '/settings', icon: <SettingsIcon size={20} /> },
  ];

  return (
    <aside className={`bg-blue-600 text-white min-h-screen p-4 transition-transform duration-300 ${isSidebarOpen ? 'w-64' : 'w-16'} relative`}>
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="absolute top-4 left-4 p-2 bg-blue-700 text-white rounded-full transition-transform duration-300 hover:bg-blue-800"
      >
        {isSidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
      </button>
      <nav className="mt-12"> {/* Adjust margin to position content properly */}
        <ul>
          {menuItems.map((item) => (
            <li key={item.name} className="mb-2">
              {item.submenu ? (
                <div>
                  <button
                    onClick={() => setUsersOpen(!usersOpen)}
                    className={`flex items-center justify-between w-full p-2 rounded hover:bg-blue-700 transition-colors ${isSidebarOpen ? 'pl-4' : 'pl-2'}`}
                  >
                    <div className="flex items-center space-x-4">
                      {item.icon}
                      {isSidebarOpen && <span className="text-base font-medium">{item.name}</span>}
                    </div>
                    {usersOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  {usersOpen && (
                    <ul className="ml-4 mt-2">
                      {item.submenu.map((subItem) => (
                        <li key={subItem.name} className="mb-2">
                          <Link
                            to={subItem.path}
                            className={`block p-2 rounded hover:bg-blue-700 transition-colors ${isSidebarOpen ? 'pl-6' : 'pl-4'}`}
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  to={item.path}
                  className={`flex items-center p-2 rounded hover:bg-blue-700 transition-colors ${isSidebarOpen ? 'pl-4' : 'pl-2'}`}
                >
                  {item.icon}
                  {isSidebarOpen && <span className="text-base font-medium ml-4">{item.name}</span>}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
