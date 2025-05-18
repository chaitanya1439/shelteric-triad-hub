
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BottomNavbar from '@/components/BottomNavbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { CheckCircle, PhoneCall, Clock, User } from 'lucide-react';

const Service: React.FC = () => {
  const serviceCategories = [
    {
      title: "Home Services",
      services: [
        {
          id: 1,
          name: "House Cleaning",
          price: "From $49",
          rating: 4.8,
          bookings: 1245,
          image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80"
        },
        {
          id: 2,
          name: "Plumbing",
          price: "From $69",
          rating: 4.7,
          bookings: 987,
          image: "https://images.unsplash.com/photo-1521207418485-99c705420785?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80"
        },
        {
          id: 3,
          name: "Electrical Work",
          price: "From $79",
          rating: 4.6,
          bookings: 854,
          image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80"
        },
      ]
    },
    {
      title: "Professional Services",
      services: [
        {
          id: 4,
          name: "Tax Consulting",
          price: "From $99",
          rating: 4.9,
          bookings: 675,
          image: "https://images.unsplash.com/photo-1554224155-1696413565d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80"
        },
        {
          id: 5,
          name: "Legal Advice",
          price: "From $129",
          rating: 4.8,
          bookings: 542,
          image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80"
        },
        {
          id: 6,
          name: "Web Design",
          price: "From $299",
          rating: 4.7,
          bookings: 421,
          image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80"
        },
      ]
    },
    {
      title: "Wellness & Beauty",
      services: [
        {
          id: 7,
          name: "Massage Therapy",
          price: "From $89",
          rating: 4.9,
          bookings: 1321,
          image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80"
        },
        {
          id: 8,
          name: "Hair Salon",
          price: "From $59",
          rating: 4.7,
          bookings: 986,
          image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80"
        },
        {
          id: 9,
          name: "Personal Training",
          price: "From $75",
          rating: 4.8,
          bookings: 785,
          image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80"
        },
      ]
    }
  ];

  return (
    <div className="min-h-screen pb-16 md:pb-0">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-indigo-600 py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Professional Services</h1>
              <p className="text-lg text-white/90 mb-8">
                Book expert services for your home, business, and personal needs
              </p>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Tabs defaultValue="home">
                  <TabsList className="grid grid-cols-3 mb-6">
                    <TabsTrigger value="home">Home</TabsTrigger>
                    <TabsTrigger value="professional">Professional</TabsTrigger>
                    <TabsTrigger value="wellness">Wellness</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="home" className="space-y-4">
                    <div className="text-left">
                      <h2 className="text-xl font-semibold mb-2">Home Services</h2>
                      <p className="text-gray-600 mb-4">Get help with cleaning, repairs, and maintenance</p>
                      <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Browse Home Services</Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="professional" className="space-y-4">
                    <div className="text-left">
                      <h2 className="text-xl font-semibold mb-2">Professional Services</h2>
                      <p className="text-gray-600 mb-4">Expert consultations for your business needs</p>
                      <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Browse Professional Services</Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="wellness" className="space-y-4">
                    <div className="text-left">
                      <h2 className="text-xl font-semibold mb-2">Wellness & Beauty</h2>
                      <p className="text-gray-600 mb-4">Services for your personal care and wellbeing</p>
                      <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Browse Wellness Services</Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">How It Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                  <span className="text-indigo-600 text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Choose a Service</h3>
                <p className="text-gray-600">Browse through our wide range of professional services</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                  <span className="text-indigo-600 text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Book an Appointment</h3>
                <p className="text-gray-600">Select a convenient date and time for your service</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                  <span className="text-indigo-600 text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Get Served</h3>
                <p className="text-gray-600">Enjoy professional service from our verified experts</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Service Categories */}
        {serviceCategories.map((category, idx) => (
          <section key={idx} className="py-10">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-6">{category.title}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.services.map((service) => (
                  <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <img 
                        src={service.image} 
                        alt={service.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-lg">{service.name}</h3>
                      <div className="flex justify-between items-center mt-2">
                        <span className="font-semibold text-indigo-600">{service.price}</span>
                        <span className="text-sm text-gray-500">{service.bookings} bookings</span>
                      </div>
                      <div className="flex items-center mt-2">
                        <div className="flex items-center bg-indigo-50 px-2 py-1 rounded text-sm">
                          <span className="text-indigo-600 font-medium">{service.rating}</span>
                          <span className="text-yellow-500 ml-1">★</span>
                        </div>
                        <span className="ml-2 text-gray-500 text-sm">Excellent</span>
                      </div>
                      <Button className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700">
                        Book Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <Button variant="outline" size="lg">View All {category.title}</Button>
              </div>
            </div>
          </section>
        ))}
        
        {/* Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Why Choose Our Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="text-indigo-600" size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Verified Professionals</h3>
                  <p className="text-gray-600">All service providers are background checked and verified</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                    <Clock className="text-indigo-600" size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Flexible Scheduling</h3>
                  <p className="text-gray-600">Book services at your convenient time, even on weekends</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                    <User className="text-indigo-600" size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Personalized Service</h3>
                  <p className="text-gray-600">Services tailored to your specific needs and requirements</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                    <PhoneCall className="text-indigo-600" size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">24/7 Support</h3>
                  <p className="text-gray-600">Our customer support is available round the clock</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <BottomNavbar />
    </div>
  );
};

export default Service;
