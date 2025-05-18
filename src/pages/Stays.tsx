
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BottomNavbar from '@/components/BottomNavbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, MapPin, Search, Filter, Star, Bed, Hotel, House } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Stays: React.FC = () => {
  const [checkIn, setCheckIn] = useState<Date | undefined>(new Date());
  const [checkOut, setCheckOut] = useState<Date | undefined>(new Date(Date.now() + 3 * 24 * 60 * 60 * 1000));

  const popularLocations = [
    "New York", "Los Angeles", "Chicago", "Miami", "San Francisco", "Dallas"
  ];

  const stayTypes = [
    { name: "Hotels", icon: <Hotel size={18} /> },
    { name: "Rooms", icon: <Bed size={18} /> },
    { name: "Houses", icon: <House size={18} /> },
    { name: "Hostels", icon: <Hotel size={18} /> }
  ];

  const stayListings = [
    {
      id: 1,
      name: "Luxury Suite Hotel",
      type: "Hotel",
      location: "Downtown, New York",
      price: 149,
      rating: 4.8,
      reviewCount: 320,
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
      amenities: ["Free WiFi", "Swimming Pool", "Spa", "Restaurant"]
    },
    {
      id: 2,
      name: "Cozy City Apartment",
      type: "Apartment",
      location: "Midtown, New York",
      price: 89,
      rating: 4.6,
      reviewCount: 215,
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
      amenities: ["Kitchen", "Washer", "Free WiFi", "Workspace"]
    },
    {
      id: 3,
      name: "Downtown Loft",
      type: "Apartment",
      location: "Financial District, New York",
      price: 120,
      rating: 4.7,
      reviewCount: 180,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
      amenities: ["Balcony", "Air Conditioning", "Free WiFi", "Kitchen"]
    },
    {
      id: 4,
      name: "Riverside Inn",
      type: "Hotel",
      location: "Upper West Side, New York",
      price: 135,
      rating: 4.5,
      reviewCount: 260,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
      amenities: ["River View", "Breakfast", "Gym", "Bar"]
    },
    {
      id: 5,
      name: "Central Park Hostel",
      type: "Hostel",
      location: "Upper East Side, New York",
      price: 45,
      rating: 4.3,
      reviewCount: 420,
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=2874&q=80",
      amenities: ["Shared Kitchen", "Lounge", "Free WiFi", "Lockers"]
    },
    {
      id: 6,
      name: "Urban Retreat",
      type: "House",
      location: "Brooklyn, New York",
      price: 195,
      rating: 4.9,
      reviewCount: 150,
      image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
      amenities: ["Garden", "Parking", "BBQ", "Full Kitchen"]
    }
  ];

  return (
    <div className="min-h-screen pb-16 md:pb-0">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-brand-blue py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Find Your Perfect Stay</h1>
              <p className="text-lg text-white/90 mb-8">
                Book hotels, rooms, and rental houses at the best prices
              </p>
              
              {/* Search Form */}
              <div className="bg-white p-4 rounded-xl shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Location</label>
                    <div className="relative">
                      <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <Input 
                        placeholder="Where are you going?" 
                        className="pl-9"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Check-in</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {checkIn ? format(checkIn, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={checkIn}
                          onSelect={setCheckIn}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Check-out</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {checkOut ? format(checkOut, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={checkOut}
                          onSelect={setCheckOut}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div className="flex items-end">
                    <Button className="w-full bg-brand-blue hover:bg-brand-blue/90">
                      <Search size={18} className="mr-2" />
                      Search
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Popular Locations */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Popular Locations</h2>
            <div className="flex flex-wrap gap-3">
              {popularLocations.map((location, idx) => (
                <Button key={idx} variant="outline" className="rounded-full">
                  {location}
                </Button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Stay Options */}
        <section className="py-6">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Types of Stays</h2>
            <div className="flex flex-wrap gap-4">
              {stayTypes.map((type, idx) => (
                <Card key={idx} className="w-32 hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                    <div className="bg-brand-blue/10 p-3 rounded-full mb-3">
                      {type.icon}
                    </div>
                    <span className="font-medium">{type.name}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Stay Listings */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <h2 className="text-2xl font-bold">Available Stays in New York</h2>
              <Button variant="outline" className="mt-2 md:mt-0 flex items-center">
                <Filter size={18} className="mr-2" /> Filter
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stayListings.map((stay) => (
                <div key={stay.id} className="group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img 
                      src={stay.image} 
                      alt={stay.name} 
                      className="w-full h-48 md:h-56 object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-md text-sm font-bold">
                      ${stay.price}/night
                    </div>
                  </div>
                  <div className="p-4 bg-white">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-lg">{stay.name}</h3>
                        <p className="text-gray-600 text-sm flex items-center mt-1">
                          <MapPin size={14} className="mr-1" />
                          {stay.location}
                        </p>
                      </div>
                      <div className="flex items-center bg-brand-blue/10 px-2 py-1 rounded-md">
                        <Star size={14} className="text-brand-blue mr-1" fill="currentColor" />
                        <span className="font-medium text-sm">{stay.rating}</span>
                      </div>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {stay.amenities.map((amenity, idx) => (
                        <span key={idx} className="inline-block bg-gray-100 rounded-md px-2 py-1 text-xs">
                          {amenity}
                        </span>
                      ))}
                    </div>
                    <div className="mt-3 text-sm text-gray-600">
                      <span className="inline-block bg-gray-100 rounded-md px-2 py-1 mr-2">
                        {stay.type}
                      </span>
                      <span>{stay.reviewCount} reviews</span>
                    </div>
                    <Button className="w-full mt-4 bg-brand-blue hover:bg-brand-blue/90">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Button variant="outline" size="lg">Load More</Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <BottomNavbar />
    </div>
  );
};

export default Stays;
