import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { CarTaxiFront } from 'lucide-react';

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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-16 flex-1">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Book a Ride in Hyderabad</h1>
          <p className="text-lg text-gray-600 mb-8">
            Find reliable and affordable transportation options for your travel needs.
          </p>
        </div>

        <div className="mb-8">
          <input
            type="text"
            placeholder="Enter pickup location"
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center mb-4">
              <CarTaxiFront className="text-white" size={20} />
            </div>
            <h3 className="text-xl font-bold mb-2">Diverse Fleet</h3>
            <p className="text-gray-600">Choose from a variety of vehicle types to suit your specific needs.</p>
          </div>
        </div>
      </div>
      
      {/* Make sure the CarTaxiFront icon is correctly used */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center mb-4">
          <CarTaxiFront className="text-white" size={20} />
        </div>
        <h3 className="text-xl font-bold mb-2">Diverse Fleet</h3>
        <p className="text-gray-600">Choose from a variety of vehicle types to suit your specific needs.</p>
      </div>
    </div>
  );
};

export default Travel;
