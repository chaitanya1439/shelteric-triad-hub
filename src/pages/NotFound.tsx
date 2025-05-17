import React from 'react';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from '@/components/Navbar';

const NotFound: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="text-center p-8">
        <h1 className="text-6xl font-bold text-brand-blue mb-4">404</h1>
        <p className="text-2xl text-gray-700 mb-6">Oops! Page not found</p>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          We couldn't find the page you're looking for. The page might have been removed, renamed, or is temporarily unavailable.
        </p>
        <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-blue/90">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
