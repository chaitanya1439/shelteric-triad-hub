
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BottomNavbar from '@/components/BottomNavbar';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { format } from "date-fns";
import { CalendarIcon, Check, X } from "lucide-react";

const Booking: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  
  const upcomingBookings = [
    {
      id: 1,
      type: "Stay",
      name: "Luxury Suite Hotel",
      date: "May 24-26, 2023",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
      status: "Confirmed"
    },
    {
      id: 2,
      type: "Food",
      name: "Pizza Delivery",
      date: "May 20, 2023 • 7:30 PM",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
      status: "Confirmed"
    },
    {
      id: 3,
      type: "Travel",
      name: "Airport Taxi",
      date: "May 27, 2023 • 10:15 AM",
      image: "https://images.unsplash.com/photo-1559342222-cee6d5429afc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
      status: "Pending"
    },
  ];
  
  const pastBookings = [
    {
      id: 4,
      type: "Service",
      name: "House Cleaning",
      date: "May 10, 2023",
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
      status: "Completed"
    },
    {
      id: 5,
      type: "Stay",
      name: "Central Park Hostel",
      date: "April 15-18, 2023",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=2874&q=80",
      status: "Completed"
    },
    {
      id: 6,
      type: "Food",
      name: "Burger Delivery",
      date: "May 5, 2023",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
      status: "Cancelled"
    },
  ];

  return (
    <div className="min-h-screen pb-16 md:pb-0">
      <Navbar />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">My Bookings</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Calendar Column */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold">Calendar</h2>
                    <div className="text-gray-500">
                      {selectedDate ? format(selectedDate, "MMMM yyyy") : "Select a date"}
                    </div>
                  </div>
                  
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border"
                  />
                  
                  <div className="mt-4">
                    <h3 className="font-semibold">
                      {selectedDate ? format(selectedDate, "EEEE, MMMM d, yyyy") : "No date selected"}
                    </h3>
                    {selectedDate && (
                      <div className="mt-2 text-sm text-gray-500">
                        You have no bookings for this date
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="mt-6">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Booking Stats</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Upcoming Bookings</span>
                        <span className="font-medium">3</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{width: "30%"}}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Completed Bookings</span>
                        <span className="font-medium">12</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: "70%"}}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Cancelled Bookings</span>
                        <span className="font-medium">1</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{width: "10%"}}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Bookings Column */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="upcoming">
                <div className="flex justify-between items-center mb-6">
                  <TabsList>
                    <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                    <TabsTrigger value="past">Past</TabsTrigger>
                  </TabsList>
                  
                  <Button variant="outline" className="flex items-center">
                    <CalendarIcon size={16} className="mr-2" />
                    <span>New Booking</span>
                  </Button>
                </div>
                
                <TabsContent value="upcoming">
                  <div className="space-y-4">
                    {upcomingBookings.map((booking) => (
                      <Card key={booking.id} className="overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                          <div className="w-full md:w-1/4">
                            <img 
                              src={booking.image} 
                              alt={booking.name} 
                              className="h-32 md:h-full w-full object-cover"
                            />
                          </div>
                          <div className="p-4 w-full md:w-3/4 flex flex-col justify-between">
                            <div>
                              <div className="flex justify-between items-start">
                                <div>
                                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">{booking.type}</span>
                                  <h3 className="font-bold text-lg mt-2">{booking.name}</h3>
                                </div>
                                <div className={`px-3 py-1 rounded-full text-sm ${
                                  booking.status === "Confirmed" ? "bg-green-100 text-green-700" :
                                  booking.status === "Pending" ? "bg-yellow-100 text-yellow-700" : 
                                  "bg-red-100 text-red-700"
                                }`}>
                                  {booking.status}
                                </div>
                              </div>
                              <p className="text-gray-500 mt-2">{booking.date}</p>
                            </div>
                            <div className="flex justify-end mt-4">
                              <Button variant="outline" size="sm" className="mr-2">
                                Details
                              </Button>
                              <Button variant="destructive" size="sm">
                                Cancel
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="past">
                  <div className="space-y-4">
                    {pastBookings.map((booking) => (
                      <Card key={booking.id} className="overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                          <div className="w-full md:w-1/4">
                            <img 
                              src={booking.image} 
                              alt={booking.name} 
                              className="h-32 md:h-full w-full object-cover"
                            />
                          </div>
                          <div className="p-4 w-full md:w-3/4 flex flex-col justify-between">
                            <div>
                              <div className="flex justify-between items-start">
                                <div>
                                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">{booking.type}</span>
                                  <h3 className="font-bold text-lg mt-2">{booking.name}</h3>
                                </div>
                                <div className={`px-3 py-1 rounded-full text-sm flex items-center ${
                                  booking.status === "Completed" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                                }`}>
                                  {booking.status === "Completed" ? 
                                    <><Check size={14} className="mr-1" /> {booking.status}</> : 
                                    <><X size={14} className="mr-1" /> {booking.status}</>
                                  }
                                </div>
                              </div>
                              <p className="text-gray-500 mt-2">{booking.date}</p>
                            </div>
                            <div className="flex justify-end mt-4">
                              {booking.status === "Completed" && (
                                <Button variant="outline" size="sm">
                                  Leave Review
                                </Button>
                              )}
                              <Button size="sm" className="ml-2">
                                Book Again
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <BottomNavbar />
    </div>
  );
};

export default Booking;
