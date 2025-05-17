
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BottomNavbar from '@/components/BottomNavbar';
import { BedDouble, Calendar, Users } from 'lucide-react';

const Stays: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col pb-16 md:pb-0">
      <Navbar />
      <BottomNavbar />
      <div className="container mx-auto px-4 py-10 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {/* Example Stay Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1560185893-a55cbc9701bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Cozy Room"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Cozy Room in Banjara Hills</h3>
              <div className="flex items-center space-x-2 text-gray-500 mb-3">
                <BedDouble size={16} />
                <span>1 bed</span>
                <Calendar size={16} />
                <span>Available Now</span>
                <Users size={16} />
                <span>Sleeps 2</span>
              </div>
              <p className="text-gray-700">
                A comfortable and affordable room in the heart of Banjara Hills.
              </p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-bold">₹1,500/night</span>
                <button className="bg-brand-blue text-white py-2 px-4 rounded-md hover:bg-brand-blue/90 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>

          {/* Example Stay Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1568495253298-2c6640223e49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Luxury Suite"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Luxury Suite in Jubilee Hills</h3>
              <div className="flex items-center space-x-2 text-gray-500 mb-3">
                <BedDouble size={16} />
                <span>King Bed</span>
                <Calendar size={16} />
                <span>Available from Oct 20</span>
                <Users size={16} />
                <span>Sleeps 4</span>
              </div>
              <p className="text-gray-700">
                Experience the ultimate in comfort and style in our luxurious suite.
              </p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-bold">₹4,500/night</span>
                <button className="bg-brand-blue text-white py-2 px-4 rounded-md hover:bg-brand-blue/90 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>

          {/* Example Stay Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522771795090-ee9c6e3f8b48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
              alt="Apartment"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Modern Apartment in Gachibowli</h3>
              <div className="flex items-center space-x-2 text-gray-500 mb-3">
                <BedDouble size={16} />
                <span>2 beds</span>
                <Calendar size={16} />
                <span>Available from Nov 1</span>
                <Users size={16} />
                <span>Sleeps 6</span>
              </div>
              <p className="text-gray-700">
                A spacious and well-equipped apartment perfect for families or groups.
              </p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-bold">₹6,000/night</span>
                <button className="bg-brand-blue text-white py-2 px-4 rounded-md hover:bg-brand-blue/90 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Find Your Perfect Stay</h1>
          <p className="text-lg text-gray-600 mb-8">
            Discover a wide range of accommodations in Hyderabad, from cozy rooms to luxurious suites.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Stays;
