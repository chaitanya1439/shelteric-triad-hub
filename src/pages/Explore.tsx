
import React from 'react';
import Navbar from '@/components/Navbar';
import ServicesOverview from '@/components/ServicesOverview';
import Footer from '@/components/Footer';
import BottomNavbar from '@/components/BottomNavbar';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Explore: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col pb-16 md:pb-0">
      <Navbar />
      <div className="container mx-auto px-4 py-16 flex-1">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Explore Shelteric Services</h1>
          <p className="text-lg text-gray-600 mb-8">
            Discover our complete range of stays, food, and travel services in Hyderabad.
          </p>
        </div>
        
        <ServicesOverview />
        
        <div className="mt-16 text-center">
          <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-blue/90">
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>
      <Footer />
      <BottomNavbar />
    </div>
  );
};

export default Explore;
