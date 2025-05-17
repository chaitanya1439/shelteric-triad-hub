import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Search, Car, Bike, Clock, Ambulance, CarTaxiFront } from 'lucide-react';
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
      image: "https://images.unsplash.com/photo-1590689860171-2a318eea3780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
    },
    {
      id: 2,
      name: "Comfort",
      type: "Cab",
      price: 18,
      time: "8-12 min",
      capacity: "4 persons",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
    },
    {
      id: 3,
      name: "Premier",
      type: "Cab",
      price: 25,
      time: "10-15 min",
      capacity: "4 persons",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
    },
    {
      id: 4,
      name: "Standard",
      type: "Bike",
      price: 8,
      time: "3-5 min",
      capacity: "1 person",
      image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
    },
    {
      id: 5,
      name: "Basic",
      type: "Ambulance",
      price: 30,
      time: "8-10 min",
      capacity: "Emergency",
      image: "https://images.unsplash.com/photo-1623793563977-91ccedc90c38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2892&q=80"
    },
    {
      id: 6,
      name: "Standard",
      type: "Taxi",
      price: 15,
      time: "5-8 min",
      capacity: "4 persons",
      image: "https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2946&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
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
                <div key={ride.id} className="service-card group">
                  <div className="relative">
                    <img 
                      src={ride.image} 
                      alt={ride.name} 
                      className="w-full h-48 object-cover rounded-t-xl"
                    />
                    <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-md text-sm font-bold">
                      ${ride.price}
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded-b-xl border border-gray-100">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-lg">{ride.name}</h3>
                        <p className="text-gray-600 text-sm">{ride.type}</p>
                      </div>
                      <div className="flex items-center bg-brand-green/10 px-2 py-1 rounded-md">
                        <Clock size={14} className="text-brand-green mr-1" />
                        <span className="font-medium text-sm">{ride.time}</span>
                      </div>
                    </div>
                    <div className="mt-3 text-sm text-gray-600">
                      <span>Capacity: {ride.capacity}</span>
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
                  <CarTaxiFront className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-bold mb-2">Diverse Fleet</h3>
                <p className="text-gray-600">Choose from a variety of vehicle types to suit your specific needs.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Emergency Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-red-50 p-6 md:p-10 rounded-xl">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">Emergency Services</h2>
                  <p className="text-gray-700 mb-6">
                    Need urgent help? Our emergency services are available 24/7. Request an ambulance with just a few taps.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <div className="w-5 h-5 bg-red-600 rounded-full mr-3 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Quick response times</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-5 h-5 bg-red-600 rounded-full mr-3 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Trained medical professionals</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-5 h-5 bg-red-600 rounded-full mr-3 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Available 24/7</span>
                    </li>
                  </ul>
                  <Button className="bg-red-600 hover:bg-red-700">
                    Request Ambulance
                  </Button>
                </div>
                <div className="md:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1623793563977-91ccedc90c38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2892&q=80" 
                    alt="Emergency services" 
                    className="rounded-lg w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Download App Section */}
        <section className="py-16 bg-brand-dark text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">Download the Shelteric App</h2>
                <p className="mb-6 text-lg">
                  Get the full experience with our mobile app. Book rides, track drivers, and manage payments all in one place.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-dark">
                    App Store
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-dark">
                    Google Play
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-64 h-96">
                  <div className="absolute -top-4 -left-4 w-full h-full bg-brand-green rounded-xl"></div>
                  <div className="absolute top-0 left-0 w-full h-full bg-white rounded-xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1598816983469-a6168821d6d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2538&q=80" 
                      alt="Shelteric mobile app" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Travel;
