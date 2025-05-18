
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-brand-blue">Shelteric</span>
        </Link>

        {/* Desktop Navigation - no longer showing stay, food, travel */}
        <nav className="hidden md:flex items-center space-x-8">
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Search size={18} />
            <span>Search</span>
          </Button>
          <Button size="sm" className="bg-brand-blue hover:bg-brand-blue/90">
            Sign In
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
