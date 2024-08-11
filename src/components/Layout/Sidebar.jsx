import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Sidebar = () => {
  const [usersOpen, setUsersOpen] = useState(false);

  const menuItems = [
    { name: 'Dashboard', path: '/' },
    { name: 'Agency', path: '/agency' },
    { name: 'Buses', path: '/buses' },
    {
      name: 'Users',
      submenu: [
        { name: 'Customers', path: '/users/customers' },
        { name: 'Drivers', path: '/users/drivers' },
      ],
    },
    { name: 'Reservations', path: '/reservations' },
    { name: 'Payments', path: '/payments' },
    { name: 'Settings', path: '/settings' },
  ];

  return (
    <aside className="bg-blue-600 text-white w-64 min-h-screen p-4">
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.name} className="mb-2">
              {item.submenu ? (
                <div>
                  <button
                    onClick={() => setUsersOpen(!usersOpen)}
                    className="flex items-center justify-between w-full p-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    {item.name}
                    {usersOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  {usersOpen && (
                    <ul className="ml-4 mt-2">
                      {item.submenu.map((subItem) => (
                        <li key={subItem.name} className="mb-2">
                          <Link
                            to={subItem.path}
                            className="block p-2 rounded hover:bg-blue-700 transition-colors"
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
                  className="block p-2 rounded hover:bg-blue-700 transition-colors"
                >
                  {item.name}
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