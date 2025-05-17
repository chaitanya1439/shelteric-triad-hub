
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, User } from 'lucide-react';
import SignInModal from './SignInModal';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);

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
          <img 
            src="/lovable-uploads/cde5b272-daac-4dc5-a4bb-37bb77e1b04c.png" 
            alt="Shelteric Logo" 
            className="h-10 w-auto"
          />
          <span className="text-2xl font-bold text-brand-blue">Shelteric</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/stays" className="font-medium hover:text-brand-blue transition-colors">
            Stays
          </Link>
          <Link to="/food" className="font-medium hover:text-brand-blue transition-colors">
            Food
          </Link>
          <Link to="/travel" className="font-medium hover:text-brand-blue transition-colors">
            Travel
          </Link>
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Search size={18} />
            <span>Search</span>
          </Button>
          <Button 
            size="sm" 
            className="bg-brand-blue hover:bg-brand-blue/90 flex items-center gap-1"
            onClick={() => setIsSignInOpen(true)}
          >
            <User size={18} />
            <span>Sign In</span>
          </Button>
        </nav>

        {/* Mobile search button */}
        <div className="md:hidden flex items-center gap-2">
          <Button variant="outline" size="sm" className="flex items-center gap-1 p-2">
            <Search size={18} />
          </Button>
          <Button 
            size="sm" 
            className="bg-brand-blue hover:bg-brand-blue/90 p-2"
            onClick={() => setIsSignInOpen(true)}
          >
            <User size={18} />
          </Button>
        </div>
      </div>

      {/* Sign In Modal */}
      <SignInModal isOpen={isSignInOpen} onClose={() => setIsSignInOpen(false)} />
    </header>
  );
};

export default Navbar;
