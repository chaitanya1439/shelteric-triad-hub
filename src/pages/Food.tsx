
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Utensils } from 'lucide-react';

const Food: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-16 flex-1">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Order Food Online in Hyderabad</h1>
          <p className="text-lg text-gray-600 mb-8">
            Explore a variety of cuisines and restaurants. Get your favorite meals delivered right to your doorstep.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sample Food Items - Replace with actual data */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center mb-4">
              <Utensils className="text-white" size={20} />
            </div>
            <h3 className="text-xl font-bold mb-2">Biryani</h3>
            <p className="text-gray-600">Authentic Hyderabadi Biryani.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center mb-4">
              <Utensils className="text-white" size={20} />
            </div>
            <h3 className="text-xl font-bold mb-2">Pizza</h3>
            <p className="text-gray-600">Delicious Italian Pizza.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center mb-4">
              <Utensils className="text-white" size={20} />
            </div>
            <h3 className="text-xl font-bold mb-2">Burger</h3>
            <p className="text-gray-600">Classic American Burger.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Food;
