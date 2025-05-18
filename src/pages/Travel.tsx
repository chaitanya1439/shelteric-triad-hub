
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BottomNavbar from '@/components/BottomNavbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Search, Car, Bike, Clock, Ambulance, CarTaxiFront, Shield, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Travel: React.FC = () => {
  const vehicleTypes = [
    { id: "bike", name: "Bike", icon: <Bike size={24} /> },
    { id: "cab", name: "Cab", icon: <Car size={24} /> },
    { id: "taxi", name: "Taxi", icon: <CarTaxiFront size={24} /> },
    { id: "ambulance", name: "Ambulance", icon: <Ambulance size={24} /> }
  ];
  
  const popularLocations = [
    "Airport", "Downtown", "Business Park", "Shopping Mall", "Medical Center", "University"
  ];
  
  const rideOptions = [
    {
      id: 1,
      name: "Economy",
      type: "Cab",
      price: 12,
      time: "5-10 min",
      capacity: "4 persons",
      rating: 4.7,
      trips: 2400,
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
      features: ["Air Conditioning", "Child Seat", "Luggage"]
    },
    {
      id: 2,
      name: "Comfort",
      type: "Cab",
      price: 18,
      time: "8-12 min",
      capacity: "4 persons",
      rating: 4.8,
      trips: 1800,
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
      features: ["Air Conditioning", "Premium Seats", "Luggage", "Wifi"]
    },
    {
      id: 3,
      name: "Premier",
      type: "Cab",
      price: 25,
      time: "10-15 min",
      capacity: "4 persons",
      rating: 4.9,
      trips: 1200,
      image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
      features: ["Air Conditioning", "Leather Seats", "Luggage", "Wifi", "Drinks"]
    },
    {
      id: 4,
      name: "Standard",
      type: "Bike",
      price: 8,
      time: "3-5 min",
      capacity: "1 person",
      rating: 4.5,
      trips: 3500,
      image: "https://images.unsplash.com/photo-1558980664-1db506751c42?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
      features: ["Helmet", "Quick", "Rain Cover"]
    },
    {
      id: 5,
      name: "Basic",
      type: "Ambulance",
      price: 30,
      time: "8-10 min",
      capacity: "Emergency",
      rating: 4.9,
      trips: 950,
      image: "https://images.unsplash.com/photo-1623793563977-91ccedc90c38?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
      features: ["Medical Equipment", "Emergency Response", "Trained Staff"]
    },
    {
      id: 6,
      name: "Standard",
      type: "Taxi",
      price: 15,
      time: "5-8 min",
      capacity: "4 persons",
      rating: 4.6,
      trips: 2100,
      image: "https://images.unsplash.com/photo-1559342222-cee6d5429afc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
      features: ["Air Conditioning", "Metered", "Receipt"]
    }
  ];

  return (
    <div className="min-h-screen pb-16 md:pb-0">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-brand-green py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Travel With Ease</h1>
              <p className="text-lg text-white/90 mb-8">
                Book bikes, cabs, taxis, and emergency services instantly
              </p>
              
              {/* Travel Booking Tabs */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <Tabs defaultValue="ride" className="w-full">
                  <TabsList className="grid grid-cols-2">
                    <TabsTrigger value="ride">Book a Ride</TabsTrigger>
                    <TabsTrigger value="emergency">Emergency Services</TabsTrigger>
                  </TabsList>
                  <div className="p-4">
                    <TabsContent value="ride" className="mt-0">
                      <div className="grid grid-cols-1 gap-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="relative">
                            <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <Input placeholder="Pickup location" className="pl-9" />
                          </div>
                          <div className="relative">
                            <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <Input placeholder="Drop-off location" className="pl-9" />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <Select defaultValue="cab">
                            <SelectTrigger>
                              <SelectValue placeholder="Vehicle Type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="cab">Cab</SelectItem>
                              <SelectItem value="bike">Bike</SelectItem>
                              <SelectItem value="taxi">Taxi</SelectItem>
                            </SelectContent>
                          </Select>
                          <Select defaultValue="now">
                            <SelectTrigger>
                              <SelectValue placeholder="When" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="now">Now</SelectItem>
                              <SelectItem value="schedule">Schedule</SelectItem>
                            </SelectContent>
                          </Select>
                          <Select defaultValue="cash">
                            <SelectTrigger>
                              <SelectValue placeholder="Payment" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="cash">Cash</SelectItem>
                              <SelectItem value="card">Card</SelectItem>
                              <SelectItem value="wallet">Wallet</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <Button className="w-full bg-brand-green hover:bg-brand-green/90">
                          <Search size={18} className="mr-2" />
                          Find Ride
                        </Button>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="emergency" className="mt-0">
                      <div className="grid grid-cols-1 gap-4">
                        <div className="relative">
                          <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                          <Input placeholder="Your location" className="pl-9" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Select defaultValue="ambulance">
                            <SelectTrigger>
                              <SelectValue placeholder="Service Type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ambulance">Ambulance</SelectItem>
                              <SelectItem value="fire">Fire Brigade</SelectItem>
                              <SelectItem value="police">Police</SelectItem>
                            </SelectContent>
                          </Select>
                          <Select defaultValue="basic">
                            <SelectTrigger>
                              <SelectValue placeholder="Emergency Type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="basic">Basic Emergency</SelectItem>
                              <SelectItem value="critical">Critical Emergency</SelectItem>
                              <SelectItem value="trauma">Trauma</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <Button className="w-full bg-red-600 hover:bg-red-700">
                          Request Emergency Service
                        </Button>
                      </div>
                    </TabsContent>
                  </div>
                </Tabs>
              </div>
            </div>
          </div>
        </section>
        
        {/* Vehicle Types */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Vehicle Types</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {vehicleTypes.map((vehicle) => (
                <Card key={vehicle.id} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                    <div className="bg-brand-green/10 p-4 rounded-full mb-4">
                      {vehicle.icon}
                    </div>
                    <span className="font-medium">{vehicle.name}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Popular Locations */}
        <section className="py-6">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Popular Destinations</h2>
            <div className="flex flex-wrap gap-3">
              {popularLocations.map((location, idx) => (
                <Button key={idx} variant="outline" className="rounded-full">
                  {location}
                </Button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Ride Options */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Available Ride Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rideOptions.map((ride) => (
                <div key={ride.id} className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img 
                      src={ride.image} 
                      alt={ride.name} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-md text-sm font-bold">
                      ${ride.price}
                    </div>
                  </div>
                  <div className="p-4 bg-white">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-lg">{ride.name}</h3>
                        <p className="text-gray-600 text-sm">{ride.type}</p>
                      </div>
                      <div className="flex items-center bg-brand-green/10 px-2 py-1 rounded-md">
                        <Star size={14} className="text-brand-green mr-1" fill="currentColor" />
                        <span className="font-medium text-sm">{ride.rating}</span>
                      </div>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {ride.features.map((feature, i) => (
                        <span key={i} className="inline-block bg-gray-100 rounded-md px-2 py-1 text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="mt-3 flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        <span>{ride.time}</span>
                      </div>
                      <span>{ride.trips} trips</span>
                    </div>
                    <Button className="w-full mt-4 bg-brand-green hover:bg-brand-green/90">
                      Book Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Travel Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-10 text-center">Why Choose Our Travel Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center mb-4">
                  <Clock className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-bold mb-2">Quick Bookings</h3>
                <p className="text-gray-600">Book your ride in seconds and get picked up within minutes.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center mb-4">
                  <MapPin className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-bold mb-2">Live Tracking</h3>
                <p className="text-gray-600">Track your ride in real-time and share your trip details with others.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center mb-4">
                  <Shield className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-bold mb-2">Safe Rides</h3>
                <p className="text-gray-600">All drivers are verified and vehicles regularly inspected for safety.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <BottomNavbar />
    </div>
  );
};

export default Travel;
