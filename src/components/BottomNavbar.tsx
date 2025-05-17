
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Bed, Utensils, Car, User } from 'lucide-react';

const BottomNavbar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    return currentPath === path;
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
      <div className="flex justify-between px-2 py-2">
        <Link to="/" className={`flex flex-col items-center p-2 ${isActive('/') ? 'text-brand-blue' : 'text-gray-600'}`}>
          <Home size={20} />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link to="/stays" className={`flex flex-col items-center p-2 ${isActive('/stays') ? 'text-brand-blue' : 'text-gray-600'}`}>
          <Bed size={20} />
          <span className="text-xs mt-1">Stays</span>
        </Link>
        <Link to="/food" className={`flex flex-col items-center p-2 ${isActive('/food') ? 'text-brand-blue' : 'text-gray-600'}`}>
          <Utensils size={20} />
          <span className="text-xs mt-1">Food</span>
        </Link>
        <Link to="/travel" className={`flex flex-col items-center p-2 ${isActive('/travel') ? 'text-brand-blue' : 'text-gray-600'}`}>
          <Car size={20} />
          <span className="text-xs mt-1">Travel</span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavbar;
