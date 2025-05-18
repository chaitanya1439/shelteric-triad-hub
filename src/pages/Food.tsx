
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BottomNavbar from '@/components/BottomNavbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Search, Utensils, Clock, ChefHat, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Food: React.FC = () => {
  const cuisineTypes = [
    "Italian", "Mexican", "Chinese", "Indian", "American", "Japanese", "Korean", "Thai", "Vietnamese", "Mediterranean"
  ];
  
  const popularRestaurants = [
    "The Italian Place", "Mexican Grill", "Panda Express", "Curry House", "Burger Joint", "Sushi Bar", "Korean BBQ", "Thai Spice", "Pho House", "Greek Taverna"
  ];
  
  const foodDeliveryOptions = [
    {
      id: 1,
      name: "Margherita Pizza",
      restaurant: "The Italian Place",
      price: 15,
      time: "20-25 min",
      rating: 4.5,
      reviews: 220,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
      tags: ["Italian", "Vegetarian", "Popular"]
    },
    {
      id: 2,
      name: "Beef Tacos (3)",
      restaurant: "Mexican Grill",
      price: 12,
      time: "15-20 min",
      rating: 4.2,
      reviews: 187,
      image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
      tags: ["Mexican", "Spicy", "Bestseller"]
    },
    {
      id: 3,
      name: "Kung Pao Chicken",
      restaurant: "Panda Express",
      price: 18,
      time: "25-30 min",
      rating: 4.0,
      reviews: 145,
      image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
      tags: ["Chinese", "Spicy", "Popular"]
    },
    {
      id: 4,
      name: "Butter Chicken",
      restaurant: "Curry House",
      price: 20,
      time: "30-35 min",
      rating: 4.7,
      reviews: 276,
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
      tags: ["Indian", "Rich", "Creamy"]
    },
    {
      id: 5,
      name: "Double Cheeseburger",
      restaurant: "Burger Joint",
      price: 10,
      time: "15-20 min",
      rating: 4.3,
      reviews: 312,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
      tags: ["American", "Fast Food", "Bestseller"]
    },
    {
      id: 6,
      name: "Assorted Sushi (12 pcs)",
      restaurant: "Sushi Bar",
      price: 25,
      time: "25-30 min",
      rating: 4.8,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
      tags: ["Japanese", "Healthy", "Premium"]
    }
  ];

  return (
    <div className="min-h-screen pb-16 md:pb-0">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-brand-orange py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Order Food Online</h1>
              <p className="text-lg text-white/90 mb-8">
                Get your favorite meals delivered to your doorstep
              </p>
              
              {/* Food Delivery Tabs */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <Tabs defaultValue="delivery" className="w-full">
                  <TabsList className="grid grid-cols-2">
                    <TabsTrigger value="delivery">Food Delivery</TabsTrigger>
                    <TabsTrigger value="dinein">Dine-In</TabsTrigger>
                  </TabsList>
                  <div className="p-4">
                    <TabsContent value="delivery" className="mt-0">
                      <div className="grid grid-cols-1 gap-4">
                        <div className="relative">
                          <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                          <Input placeholder="Enter your delivery address" className="pl-9" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Select defaultValue="italian">
                            <SelectTrigger>
                              <SelectValue placeholder="Cuisine Type" />
                            </SelectTrigger>
                            <SelectContent>
                              {cuisineTypes.map((cuisine, idx) => (
                                <SelectItem key={idx} value={cuisine.toLowerCase()}>{cuisine}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <Select defaultValue="any">
                            <SelectTrigger>
                              <SelectValue placeholder="Dietary Preference" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="any">Any</SelectItem>
                              <SelectItem value="vegetarian">Vegetarian</SelectItem>
                              <SelectItem value="vegan">Vegan</SelectItem>
                              <SelectItem value="gluten-free">Gluten-Free</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <Button className="w-full bg-brand-orange hover:bg-brand-orange/90">
                          <Search size={18} className="mr-2" />
                          Find Food
                        </Button>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="dinein" className="mt-0">
                      <div className="grid grid-cols-1 gap-4">
                        <div className="relative">
                          <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                          <Input placeholder="Enter your location" className="pl-9" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Select defaultValue="italian">
                            <SelectTrigger>
                              <SelectValue placeholder="Cuisine Type" />
                            </SelectTrigger>
                            <SelectContent>
                              {cuisineTypes.map((cuisine, idx) => (
                                <SelectItem key={idx} value={cuisine.toLowerCase()}>{cuisine}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <Select defaultValue="any">
                            <SelectTrigger>
                              <SelectValue placeholder="Price Range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="any">Any</SelectItem>
                              <SelectItem value="low">Low</SelectItem>
                              <SelectItem value="medium">Medium</SelectItem>
                              <SelectItem value="high">High</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <Button className="w-full bg-brand-orange hover:bg-brand-orange/90">
                          <Search size={18} className="mr-2" />
                          Find Restaurants
                        </Button>
                      </div>
                    </TabsContent>
                  </div>
                </Tabs>
              </div>
            </div>
          </div>
        </section>
        
        {/* Popular Restaurants */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Popular Restaurants</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {popularRestaurants.map((restaurant, idx) => (
                <Card key={idx} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                    <div className="bg-brand-orange/10 p-4 rounded-full mb-4">
                      <Utensils className="text-brand-orange" size={24} />
                    </div>
                    <span className="font-medium">{restaurant}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Cuisine Types */}
        <section className="py-6">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Explore Cuisines</h2>
            <div className="flex flex-wrap gap-3">
              {cuisineTypes.map((cuisine, idx) => (
                <Button key={idx} variant="outline" className="rounded-full">
                  {cuisine}
                </Button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Food Delivery Options */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Food Delivery Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {foodDeliveryOptions.map((food) => (
                <div key={food.id} className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img 
                      src={food.image} 
                      alt={food.name} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-md text-sm font-bold">
                      ${food.price}
                    </div>
                  </div>
                  <div className="p-4 bg-white">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-lg">{food.name}</h3>
                        <p className="text-gray-600 text-sm">{food.restaurant}</p>
                      </div>
                      <div className="flex items-center bg-brand-orange/10 px-2 py-1 rounded-md">
                        <Star size={14} className="text-brand-orange mr-1" fill="currentColor" />
                        <span className="font-medium text-sm">{food.rating}</span>
                      </div>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {food.tags.map((tag, i) => (
                        <span key={i} className="inline-block bg-gray-100 rounded-md px-2 py-1 text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-3 flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        <span>{food.time}</span>
                      </div>
                      <span>{food.reviews} reviews</span>
                    </div>
                    <Button className="w-full mt-4 bg-brand-orange hover:bg-brand-orange/90">
                      Order Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Food Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-10 text-center">Why Choose Our Food Delivery Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center mb-4">
                  <Clock className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
                <p className="text-gray-600">Get your food delivered quickly and efficiently.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center mb-4">
                  <Utensils className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-bold mb-2">Wide Variety</h3>
                <p className="text-gray-600">Choose from a wide variety of cuisines and restaurants.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center mb-4">
                  <ChefHat className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-bold mb-2">Quality Food</h3>
                <p className="text-gray-600">Enjoy high-quality food from trusted restaurants.</p>
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

export default Food;
