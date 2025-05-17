
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Restaurant, MapPin, Search, Clock, Tag, Star } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Food: React.FC = () => {
  const categories = [
    "All", "Pizza", "Burgers", "Chinese", "Italian", "Indian", "Sushi", "Desserts"
  ];
  
  const restaurants = [
    {
      id: 1,
      name: "The Italian Garden",
      cuisine: "Italian",
      deliveryTime: "25-35 min",
      minOrder: 15,
      rating: 4.7,
      reviewCount: 420,
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
      offers: ["20% OFF", "Free Delivery"]
    },
    {
      id: 2,
      name: "Burger House",
      cuisine: "American",
      deliveryTime: "15-25 min",
      minOrder: 10,
      rating: 4.5,
      reviewCount: 380,
      image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
      offers: ["Buy 1 Get 1 Free"]
    },
    {
      id: 3,
      name: "Sushi Palace",
      cuisine: "Japanese",
      deliveryTime: "30-40 min",
      minOrder: 20,
      rating: 4.8,
      reviewCount: 290,
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
      offers: []
    },
    {
      id: 4,
      name: "Spice Kingdom",
      cuisine: "Indian",
      deliveryTime: "35-45 min",
      minOrder: 18,
      rating: 4.6,
      reviewCount: 350,
      image: "https://images.unsplash.com/photo-1585937421612-70a008356cf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2936&q=80",
      offers: ["10% OFF"]
    },
    {
      id: 5,
      name: "Pizza Planet",
      cuisine: "Italian",
      deliveryTime: "20-30 min",
      minOrder: 12,
      rating: 4.4,
      reviewCount: 410,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2814&q=80",
      offers: ["Free Drink with Pizza"]
    },
    {
      id: 6,
      name: "Golden Dragon",
      cuisine: "Chinese",
      deliveryTime: "25-35 min",
      minOrder: 15,
      rating: 4.5,
      reviewCount: 320,
      image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
      offers: ["15% OFF"]
    }
  ];
  
  const popularDishes = [
    {
      id: 1,
      name: "Margherita Pizza",
      restaurant: "Pizza Planet",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
    },
    {
      id: 2,
      name: "Chicken Burger",
      restaurant: "Burger House",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2899&q=80"
    },
    {
      id: 3,
      name: "Butter Chicken",
      restaurant: "Spice Kingdom",
      price: 15.99,
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
    },
    {
      id: 4,
      name: "Dragon Roll",
      restaurant: "Sushi Palace",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2925&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-brand-orange py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Delicious Food Delivered</h1>
              <p className="text-lg text-white/90 mb-8">
                Order from top restaurants and get food delivered to your doorstep
              </p>
              
              {/* Search Form */}
              <div className="bg-white p-4 rounded-xl shadow-lg">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-grow">
                    <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <Input 
                      placeholder="Enter delivery address" 
                      className="pl-9"
                    />
                  </div>
                  
                  <div className="relative flex-grow">
                    <Restaurant size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <Input 
                      placeholder="Search for restaurant or cuisine" 
                      className="pl-9"
                    />
                  </div>
                  
                  <Button className="bg-brand-orange hover:bg-brand-orange/90">
                    <Search size={18} className="mr-2" />
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Food Categories */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Food Categories</h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category, idx) => (
                <Button 
                  key={idx} 
                  variant={idx === 0 ? "default" : "outline"} 
                  className={idx === 0 ? "rounded-full bg-brand-orange hover:bg-brand-orange/90" : "rounded-full"}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Food/Restaurant Tabs */}
        <section className="py-6">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="restaurants" className="w-full">
              <TabsList className="grid w-full md:w-72 grid-cols-2">
                <TabsTrigger value="restaurants">Restaurants</TabsTrigger>
                <TabsTrigger value="dishes">Popular Dishes</TabsTrigger>
              </TabsList>
              <div className="mt-8">
                <TabsContent value="restaurants" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {restaurants.map((restaurant) => (
                      <div key={restaurant.id} className="service-card group">
                        <div className="relative">
                          <img 
                            src={restaurant.image} 
                            alt={restaurant.name} 
                            className="w-full h-48 object-cover rounded-t-xl"
                          />
                          {restaurant.offers.length > 0 && (
                            <div className="absolute top-3 right-3 flex flex-col gap-2">
                              {restaurant.offers.map((offer, idx) => (
                                <div key={idx} className="bg-brand-orange text-white px-2 py-1 rounded-md text-xs font-bold">
                                  {offer}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="p-4 bg-white rounded-b-xl border border-gray-100">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-bold text-lg">{restaurant.name}</h3>
                              <p className="text-gray-600 text-sm">{restaurant.cuisine}</p>
                            </div>
                            <div className="flex items-center bg-brand-orange/10 px-2 py-1 rounded-md">
                              <Star size={14} className="text-brand-orange mr-1" fill="currentColor" />
                              <span className="font-medium text-sm">{restaurant.rating}</span>
                            </div>
                          </div>
                          <div className="flex items-center mt-3 text-sm text-gray-600">
                            <div className="flex items-center mr-3">
                              <Clock size={14} className="mr-1" />
                              {restaurant.deliveryTime}
                            </div>
                            <div className="flex items-center">
                              <Tag size={14} className="mr-1" />
                              Min ${restaurant.minOrder}
                            </div>
                          </div>
                          <Button className="w-full mt-4 bg-brand-orange hover:bg-brand-orange/90">
                            Order Now
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="dishes">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {popularDishes.map((dish) => (
                      <div key={dish.id} className="service-card group">
                        <div className="relative">
                          <img 
                            src={dish.image} 
                            alt={dish.name} 
                            className="w-full h-40 object-cover rounded-t-xl"
                          />
                        </div>
                        <div className="p-4 bg-white rounded-b-xl border border-gray-100">
                          <h3 className="font-bold">{dish.name}</h3>
                          <p className="text-gray-600 text-sm">{dish.restaurant}</p>
                          <div className="flex items-center justify-between mt-3">
                            <span className="font-bold">${dish.price}</span>
                            <Button size="sm" className="bg-brand-orange hover:bg-brand-orange/90">
                              Add
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </section>
        
        {/* Special Offers */}
        <section className="py-10 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Special Offers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-brand-orange/90 to-brand-orange rounded-xl p-6 text-white flex items-center">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Free Delivery on First Order</h3>
                  <p className="mb-4 opacity-90">Use code: FREESHIP</p>
                  <Button variant="secondary">Order Now</Button>
                </div>
                <div className="hidden md:block w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" 
                    alt="Food delivery" 
                    className="rounded-lg"
                  />
                </div>
              </div>
              <div className="bg-gradient-to-r from-brand-blue/90 to-brand-blue rounded-xl p-6 text-white flex items-center">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">20% Off on Family Meals</h3>
                  <p className="mb-4 opacity-90">Use code: FAMILY20</p>
                  <Button variant="secondary">Order Now</Button>
                </div>
                <div className="hidden md:block w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1547573854-74d2a71d0826?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" 
                    alt="Family meal" 
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* How Food Delivery Works */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-10 text-center">How Food Delivery Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Find Restaurants</h3>
                <p className="text-gray-600">Browse restaurants and dishes in your area</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Restaurant className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Choose Your Food</h3>
                <p className="text-gray-600">Select dishes from the restaurant's menu</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Get It Delivered</h3>
                <p className="text-gray-600">Enjoy your meal delivered right to your door</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Download App Banner */}
        <section className="py-10 bg-brand-dark text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Get the Shelteric App</h2>
                <p className="mb-6 opacity-90">Download our mobile app for a better experience and exclusive offers.</p>
                <div className="flex space-x-4">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-dark">
                    App Store
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-dark">
                    Google Play
                  </Button>
                </div>
              </div>
              <div className="md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80" 
                  alt="Mobile app" 
                  className="rounded-lg object-cover h-64"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Food;
