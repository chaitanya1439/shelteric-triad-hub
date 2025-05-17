
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BottomNavbar from '@/components/BottomNavbar';
import { CarTaxiFront, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Travel: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    // In a real application, you would perform a search here
    // and update the searchResults state with the results.
    // For this example, we'll just simulate some results.
    const fakeResults = [
      { id: 1, name: 'Local Cab Service' },
      { id: 2, name: 'Outstation Taxi' },
      { id: 3, name: 'Airport Transfer' },
    ];
    setSearchResults(fakeResults);
  };
  
  return (
    <div className="min-h-screen flex flex-col pb-16 md:pb-0">
      <Navbar />
      <BottomNavbar />
      <div className="container mx-auto px-4 py-10 flex-1">
        <div className="bg-white p-6 rounded-lg shadow-md mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-2">
              <h3 className="text-lg font-medium mb-4">Where do you want to go?</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Pickup Location</label>
                  <input 
                    type="text" 
                    placeholder="Enter pickup location"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                  {searchResults.length > 0 && (
                    <ul className="mt-2">
                      {searchResults.map((result) => (
                        <li key={result.id} className="py-2 px-4 bg-white rounded-md shadow-sm hover:bg-gray-100 cursor-pointer">
                          {result.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Destination</label>
                  <input 
                    type="text" 
                    placeholder="Enter destination"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  />
                </div>
                <Button className="w-full bg-brand-blue hover:bg-brand-blue/90">Find Rides</Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Ride booking" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-brand-green/10 p-3 rounded-full mr-4">
                <Car size={24} className="text-brand-green" />
              </div>
              <div>
                <h3 className="font-semibold">Economy</h3>
                <p className="text-sm text-gray-500">Affordable, everyday rides</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold">₹149 <span className="text-sm font-normal text-gray-500">base fare</span></span>
              <Button size="sm" variant="outline">Select</Button>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-brand-green/10 p-3 rounded-full mr-4">
                <Car size={24} className="text-brand-green" />
              </div>
              <div>
                <h3 className="font-semibold">Comfort</h3>
                <p className="text-sm text-gray-500">Newer cars with extra legroom</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold">₹249 <span className="text-sm font-normal text-gray-500">base fare</span></span>
              <Button size="sm" variant="outline">Select</Button>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-brand-green/10 p-3 rounded-full mr-4">
                <Car size={24} className="text-brand-green" />
              </div>
              <div>
                <h3 className="font-semibold">Premium</h3>
                <p className="text-sm text-gray-500">Luxury rides with top drivers</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold">₹349 <span className="text-sm font-normal text-gray-500">base fare</span></span>
              <Button size="sm" variant="outline">Select</Button>
            </div>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Book a Ride in Hyderabad</h1>
          <p className="text-lg text-gray-600 mb-8">
            Find reliable and affordable transportation options for your travel needs.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Travel;
