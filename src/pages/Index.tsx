
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesOverview from "@/components/ServicesOverview";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import BottomNavbar from "@/components/BottomNavbar";
import { Bed, Utensils, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index: React.FC = () => {
  return (
    <div className="pb-16 md:pb-0">
      <Navbar />
      <HeroSection />
      
      {/* Oyo-like Stays Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Find Perfect Stays</h2>
            <Link to="/stays" className="text-brand-blue font-medium">View all</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Luxury Hotel" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Luxury Hotel</h3>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">4.8 ★</span>
                </div>
                <p className="text-gray-600 text-sm mt-1">Banjara Hills, Hyderabad</p>
                <div className="flex items-center mt-2">
                  <Bed size={16} className="text-gray-500 mr-1" />
                  <span className="text-sm text-gray-500">2 Beds • AC • WiFi</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-bold">₹2,499 <span className="text-sm font-normal text-gray-500">/ night</span></span>
                  <Button size="sm" className="bg-brand-blue hover:bg-brand-blue/90">Book Now</Button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Budget Hotel" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Budget Hotel</h3>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">4.5 ★</span>
                </div>
                <p className="text-gray-600 text-sm mt-1">Hitech City, Hyderabad</p>
                <div className="flex items-center mt-2">
                  <Bed size={16} className="text-gray-500 mr-1" />
                  <span className="text-sm text-gray-500">1 Bed • AC • WiFi</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-bold">₹1,499 <span className="text-sm font-normal text-gray-500">/ night</span></span>
                  <Button size="sm" className="bg-brand-blue hover:bg-brand-blue/90">Book Now</Button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Premium Villa" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Premium Villa</h3>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">4.9 ★</span>
                </div>
                <p className="text-gray-600 text-sm mt-1">Jubilee Hills, Hyderabad</p>
                <div className="flex items-center mt-2">
                  <Bed size={16} className="text-gray-500 mr-1" />
                  <span className="text-sm text-gray-500">3 Beds • AC • Pool</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-bold">₹5,999 <span className="text-sm font-normal text-gray-500">/ night</span></span>
                  <Button size="sm" className="bg-brand-blue hover:bg-brand-blue/90">Book Now</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Zomato-like Food Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Popular Restaurants</h2>
            <Link to="/food" className="text-brand-blue font-medium">View all</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                  alt="Biryani Paradise" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-sm">30-40 min</div>
                <div className="absolute bottom-2 left-2 bg-green-600 text-white px-2 py-1 rounded text-sm">50% OFF</div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Biryani Paradise</h3>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">4.7 ★</span>
                </div>
                <p className="text-gray-600 text-sm mt-1">Hyderabadi, North Indian</p>
                <div className="flex items-center mt-2">
                  <Utensils size={16} className="text-gray-500 mr-1" />
                  <span className="text-sm text-gray-500">₹200 for one • Free delivery</span>
                </div>
                <Button variant="outline" className="w-full mt-4">Order Now</Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Pizza Hub" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-sm">15-25 min</div>
                <div className="absolute bottom-2 left-2 bg-green-600 text-white px-2 py-1 rounded text-sm">Buy 1 Get 1</div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Pizza Hub</h3>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">4.5 ★</span>
                </div>
                <p className="text-gray-600 text-sm mt-1">Pizza, Fast Food</p>
                <div className="flex items-center mt-2">
                  <Utensils size={16} className="text-gray-500 mr-1" />
                  <span className="text-sm text-gray-500">₹300 for one • ₹30 delivery</span>
                </div>
                <Button variant="outline" className="w-full mt-4">Order Now</Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="South Spice" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-sm">25-35 min</div>
                <div className="absolute bottom-2 left-2 bg-green-600 text-white px-2 py-1 rounded text-sm">20% OFF</div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">South Spice</h3>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">4.6 ★</span>
                </div>
                <p className="text-gray-600 text-sm mt-1">South Indian, Andhra</p>
                <div className="flex items-center mt-2">
                  <Utensils size={16} className="text-gray-500 mr-1" />
                  <span className="text-sm text-gray-500">₹150 for one • Free delivery</span>
                </div>
                <Button variant="outline" className="w-full mt-4">Order Now</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Uber-like Travel Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Book Your Ride</h2>
            <Link to="/travel" className="text-brand-blue font-medium">View all</Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
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
                    />
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-brand-blue/10 p-3 rounded-full mr-4">
                  <Car size={24} className="text-brand-blue" />
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
                <div className="bg-brand-blue/10 p-3 rounded-full mr-4">
                  <Car size={24} className="text-brand-blue" />
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
                <div className="bg-brand-blue/10 p-3 rounded-full mr-4">
                  <Car size={24} className="text-brand-blue" />
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
        </div>
      </section>
      
      <ServicesOverview />
      <Testimonials />
      <Footer />
      <BottomNavbar />
    </div>
  );
};

export default Index;
