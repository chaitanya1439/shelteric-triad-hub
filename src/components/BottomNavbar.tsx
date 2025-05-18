
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, Briefcase, CalendarCheck } from 'lucide-react';

const BottomNavbar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { 
      name: 'Search', 
      path: '/search',
      icon: <Search size={20} />
    },
    { 
      name: 'Service', 
      path: '/service',
      icon: <Briefcase size={20} />
    },
    { 
      name: 'Booking', 
      path: '/booking',
      icon: <CalendarCheck size={20} />
    },
    { 
      name: 'Cart', 
      path: '/cart',
      icon: <ShoppingCart size={20} />
    }
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.1)] z-50">
      <div className="grid grid-cols-4">
        {navItems.map((item) => (
          <Link 
            key={item.name}
            to={item.path} 
            className={`flex flex-col items-center justify-center py-3 ${
              currentPath === item.path ? 'text-brand-blue' : 'text-gray-500'
            }`}
          >
            {item.icon}
            <span className="text-xs mt-1">{item.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavbar;
