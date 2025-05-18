
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BottomNavbar from '@/components/BottomNavbar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Search as SearchIcon, MapPin, Star, Clock, Filter, CalendarDays, RefreshCcw, Bed, Utensils, Car } from 'lucide-react';

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFiltering, setIsFiltering] = useState(false);
  
  // Dummy search results
  const searchResults = {
    stays: [
      {
        id: 1,
        name: "Luxury Suite Hotel",
        type: "Hotel",
        location: "Downtown, New York",
        price: 149,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
      },
      {
        id: 2,
        name: "Cozy City Apartment",
        type: "Apartment",
        location: "Midtown, New York",
        price: 89,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
      },
    ],
    food: [
      {
        id: 1,
        name: "Margherita Pizza",
        restaurant: "The Italian Place",
        price: 15,
        time: "20-25 min",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
      },
      {
        id: 2,
        name: "Beef Tacos",
        restaurant: "Mexican Grill",
        price: 12,
        time: "15-20 min",
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
      },
    ],
    travel: [
      {
        id: 1,
        name: "Economy Cab",
        type: "Cab",
        price: 12,
        time: "5-10 min",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
      },
      {
        id: 2,
        name: "Standard Bike",
        type: "Bike",
        price: 8,
        time: "3-5 min",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
      },
    ],
    services: [
      {
        id: 1,
        name: "House Cleaning",
        provider: "CleanCo",
        price: 49,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
      },
      {
        id: 2,
        name: "Plumbing",
        provider: "FixIt Services",
        price: 69,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1521207418485-99c705420785?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
      },
    ],
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search submission
    console.log("Searching for:", searchQuery);
  };

  const renderStayResults = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {searchResults.stays.map((stay) => (
        <Card key={stay.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <div className="flex flex-col sm:flex-row h-full">
            <div className="sm:w-1/3">
              <img 
                src={stay.image} 
                alt={stay.name} 
                className="w-full h-36 sm:h-full object-cover"
              />
            </div>
            <div className="p-4 sm:w-2/3 flex flex-col justify-between">
              <div>
                <h3 className="font-bold">{stay.name}</h3>
                <p className="text-gray-600 text-sm flex items-center mt-1">
                  <MapPin size={12} className="mr-1" /> {stay.location}
                </p>
                <div className="flex items-center mt-1">
                  <Star size={12} className="text-yellow-500 fill-current" />
                  <span className="text-sm ml-1">{stay.rating}</span>
                  <span className="text-sm text-gray-500 ml-2">({stay.type})</span>
                </div>
              </div>
              <div className="flex justify-between items-center mt-3">
                <span className="font-bold">${stay.price}<span className="text-sm font-normal text-gray-500">/night</span></span>
                <Button size="sm" className="bg-brand-blue hover:bg-brand-blue/90">View</Button>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );

  const renderFoodResults = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {searchResults.food.map((food) => (
        <Card key={food.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <div className="flex flex-col sm:flex-row h-full">
            <div className="sm:w-1/3">
              <img 
                src={food.image} 
                alt={food.name} 
                className="w-full h-36 sm:h-full object-cover"
              />
            </div>
            <div className="p-4 sm:w-2/3 flex flex-col justify-between">
              <div>
                <h3 className="font-bold">{food.name}</h3>
                <p className="text-gray-600 text-sm">{food.restaurant}</p>
                <div className="flex items-center mt-1">
                  <Star size={12} className="text-yellow-500 fill-current" />
                  <span className="text-sm ml-1">{food.rating}</span>
                  <span className="text-sm text-gray-500 ml-2">
                    <Clock size={12} className="inline mr-1" />
                    {food.time}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center mt-3">
                <span className="font-bold">${food.price}</span>
                <Button size="sm" className="bg-brand-orange hover:bg-brand-orange/90">Order</Button>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );

  const renderTravelResults = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {searchResults.travel.map((ride) => (
        <Card key={ride.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <div className="flex flex-col sm:flex-row h-full">
            <div className="sm:w-1/3">
              <img 
                src={ride.image} 
                alt={ride.name} 
                className="w-full h-36 sm:h-full object-cover"
              />
            </div>
            <div className="p-4 sm:w-2/3 flex flex-col justify-between">
              <div>
                <h3 className="font-bold">{ride.name}</h3>
                <p className="text-gray-600 text-sm">{ride.type}</p>
                <div className="flex items-center mt-1">
                  <Star size={12} className="text-yellow-500 fill-current" />
                  <span className="text-sm ml-1">{ride.rating}</span>
                  <span className="text-sm text-gray-500 ml-2">
                    <Clock size={12} className="inline mr-1" />
                    {ride.time}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center mt-3">
                <span className="font-bold">${ride.price}</span>
                <Button size="sm" className="bg-brand-green hover:bg-brand-green/90">Book</Button>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );

  const renderServiceResults = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {searchResults.services.map((service) => (
        <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <div className="flex flex-col sm:flex-row h-full">
            <div className="sm:w-1/3">
              <img 
                src={service.image} 
                alt={service.name} 
                className="w-full h-36 sm:h-full object-cover"
              />
            </div>
            <div className="p-4 sm:w-2/3 flex flex-col justify-between">
              <div>
                <h3 className="font-bold">{service.name}</h3>
                <p className="text-gray-600 text-sm">{service.provider}</p>
                <div className="flex items-center mt-1">
                  <Star size={12} className="text-yellow-500 fill-current" />
                  <span className="text-sm ml-1">{service.rating}</span>
                </div>
              </div>
              <div className="flex justify-between items-center mt-3">
                <span className="font-bold">From ${service.price}</span>
                <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">Book</Button>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );

  const renderFilters = () => {
    if (!isFiltering) return null;
    
    return (
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold">Filters</h3>
            <Button variant="ghost" size="sm" className="text-gray-500 h-8" onClick={() => setIsFiltering(false)}>
              <X size={18} />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h4 className="text-sm font-medium mb-2">Price Range</h4>
              <div className="flex items-center space-x-2">
                <Input type="number" placeholder="Min" className="w-full" />
                <span>-</span>
                <Input type="number" placeholder="Max" className="w-full" />
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-2">Sort By</h4>
              <Select defaultValue="relevance">
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="price_low">Price: Low to High</SelectItem>
                  <SelectItem value="price_high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-2">Rating</h4>
              <div className="space-y-2">
                {[4, 3].map((rating) => (
                  <div key={rating} className="flex items-center space-x-2">
                    <Checkbox id={`rating-${rating}`} />
                    <label htmlFor={`rating-${rating}`} className="text-sm flex items-center">
                      {rating}+ <Star size={12} className="text-yellow-500 ml-1 fill-current" />
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex justify-end mt-4 space-x-2">
            <Button variant="outline" size="sm" className="flex items-center">
              <RefreshCcw size={14} className="mr-1" />
              Reset
            </Button>
            <Button size="sm">Apply Filters</Button>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen pb-16 md:pb-0">
      <Navbar />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold mb-6">Search Shelteric</h1>
            
            {/* Search Form */}
            <form onSubmit={handleSearchSubmit} className="mb-8">
              <div className="relative">
                <SearchIcon size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input 
                  type="text" 
                  placeholder="Search for stays, food, travel, or services..." 
                  className="pl-10 pr-24 py-6 text-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button 
                  type="button" 
                  size="sm"
                  variant="outline"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  onClick={() => setIsFiltering(!isFiltering)}
                >
                  <Filter size={18} />
                </Button>
              </div>
            </form>
            
            {/* Filters */}
            {renderFilters()}
            
            {/* Search Results */}
            <div>
              <div className="mb-6">
                <Tabs defaultValue="all">
                  <div className="flex justify-between items-center mb-4">
                    <TabsList>
                      <TabsTrigger value="all">All</TabsTrigger>
                      <TabsTrigger value="stays" className="flex items-center">
                        <Bed size={16} className="mr-1" /> Stays
                      </TabsTrigger>
                      <TabsTrigger value="food" className="flex items-center">
                        <Utensils size={16} className="mr-1" /> Food
                      </TabsTrigger>
                      <TabsTrigger value="travel" className="flex items-center">
                        <Car size={16} className="mr-1" /> Travel
                      </TabsTrigger>
                      <TabsTrigger value="services">Services</TabsTrigger>
                    </TabsList>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-gray-600">Found 8 results for "{searchQuery || 'recent searches'}"</p>
                  </div>
                  
                  <TabsContent value="all">
                    <div className="space-y-8">
                      <div>
                        <h2 className="text-xl font-bold mb-4 flex items-center">
                          <Bed size={20} className="mr-2" /> Stays
                        </h2>
                        {renderStayResults()}
                        <div className="mt-4 text-right">
                          <Button variant="link">See all stay results</Button>
                        </div>
                      </div>
                      
                      <div>
                        <h2 className="text-xl font-bold mb-4 flex items-center">
                          <Utensils size={20} className="mr-2" /> Food
                        </h2>
                        {renderFoodResults()}
                        <div className="mt-4 text-right">
                          <Button variant="link">See all food results</Button>
                        </div>
                      </div>
                      
                      <div>
                        <h2 className="text-xl font-bold mb-4 flex items-center">
                          <Car size={20} className="mr-2" /> Travel
                        </h2>
                        {renderTravelResults()}
                        <div className="mt-4 text-right">
                          <Button variant="link">See all travel results</Button>
                        </div>
                      </div>
                      
                      <div>
                        <h2 className="text-xl font-bold mb-4">Services</h2>
                        {renderServiceResults()}
                        <div className="mt-4 text-right">
                          <Button variant="link">See all service results</Button>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="stays">
                    <h2 className="text-xl font-bold mb-4 flex items-center">
                      <Bed size={20} className="mr-2" /> Stays
                    </h2>
                    {renderStayResults()}
                  </TabsContent>
                  
                  <TabsContent value="food">
                    <h2 className="text-xl font-bold mb-4 flex items-center">
                      <Utensils size={20} className="mr-2" /> Food
                    </h2>
                    {renderFoodResults()}
                  </TabsContent>
                  
                  <TabsContent value="travel">
                    <h2 className="text-xl font-bold mb-4 flex items-center">
                      <Car size={20} className="mr-2" /> Travel
                    </h2>
                    {renderTravelResults()}
                  </TabsContent>
                  
                  <TabsContent value="services">
                    <h2 className="text-xl font-bold mb-4">Services</h2>
                    {renderServiceResults()}
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <BottomNavbar />
    </div>
  );
};

export default Search;
