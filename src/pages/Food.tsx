
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BottomNavbar from '@/components/BottomNavbar';
import { Utensils } from 'lucide-react';

const Food: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col pb-16 md:pb-0">
      <Navbar />
      <BottomNavbar />
      <div className="container mx-auto px-4 py-10 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="relative mb-6">
              <img 
                src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                alt="Biryani Paradise" 
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-sm">30-40 min</div>
            </div>
            <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center mb-4">
              <Utensils className="text-white" size={20} />
            </div>
            <h3 className="text-xl font-bold mb-2">Biryani Paradise</h3>
            <p className="text-gray-600">Authentic Hyderabadi Biryani from the heart of the city.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="relative mb-6">
              <img 
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Pizza Hub" 
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-sm">15-25 min</div>
            </div>
            <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center mb-4">
              <Utensils className="text-white" size={20} />
            </div>
            <h3 className="text-xl font-bold mb-2">Pizza Hub</h3>
            <p className="text-gray-600">Delicious Italian Pizza with a variety of toppings.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="relative mb-6">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="South Spice" 
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-sm">25-35 min</div>
            </div>
            <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center mb-4">
              <Utensils className="text-white" size={20} />
            </div>
            <h3 className="text-xl font-bold mb-2">South Spice</h3>
            <p className="text-gray-600">Classic South Indian and Andhra dishes that will delight your taste buds.</p>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Order Food Online in Hyderabad</h1>
          <p className="text-lg text-gray-600 mb-8">
            Explore a variety of cuisines and restaurants. Get your favorite meals delivered right to your doorstep.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Food;
