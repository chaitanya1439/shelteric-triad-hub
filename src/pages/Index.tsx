
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServiceSection from '@/components/ServiceSection';
import ServicesOverview from '@/components/ServicesOverview';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import { Bed, Hotel, House, MapPin, Restaurant, Car } from 'lucide-react';

const Index: React.FC = () => {
  const stayServices = [
    {
      id: 1,
      title: "Luxury Hotels",
      description: "Discover premium hotels with top-notch amenities and exceptional service for a comfortable stay.",
      icon: <Hotel size={24} className="text-brand-blue" />,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
      link: "/stays/hotels"
    },
    {
      id: 2,
      title: "Cozy Rooms",
      description: "Find affordable and comfortable rooms perfect for short or long-term stays in prime locations.",
      icon: <Bed size={24} className="text-brand-blue" />,
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2951&q=80",
      link: "/stays/rooms"
    },
    {
      id: 3,
      title: "Rental Houses",
      description: "Book entire houses for families or groups with all the comforts of home and complete privacy.",
      icon: <House size={24} className="text-brand-blue" />,
      image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2584&q=80",
      link: "/stays/houses"
    }
  ];
  
  const foodServices = [
    {
      id: 1,
      title: "Popular Restaurants",
      description: "Explore top-rated restaurants offering a wide variety of cuisines to satisfy your cravings.",
      icon: <Restaurant size={24} className="text-brand-orange" />,
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
      link: "/food/restaurants"
    },
    {
      id: 2,
      title: "Fast Delivery",
      description: "Get your favorite meals delivered to your doorstep quickly with our efficient delivery service.",
      icon: <MapPin size={24} className="text-brand-orange" />,
      image: "https://images.unsplash.com/photo-1576867757603-05b134ebc379?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
      link: "/food/delivery"
    },
    {
      id: 3,
      title: "Special Offers",
      description: "Take advantage of exclusive deals and discounts on food delivery from partner restaurants.",
      icon: <Restaurant size={24} className="text-brand-orange" />,
      image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2722&q=80",
      link: "/food/offers"
    }
  ];
  
  const travelServices = [
    {
      id: 1,
      title: "City Cabs",
      description: "Book reliable cabs for seamless travel within the city, available 24/7 at competitive rates.",
      icon: <Car size={24} className="text-brand-green" />,
      image: "https://images.unsplash.com/photo-1590689860171-2a318eea3780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
      link: "/travel/cabs"
    },
    {
      id: 2,
      title: "Bike Rentals",
      description: "Rent bikes for quick commutes or sightseeing, perfect for navigating busy city streets.",
      icon: <Car size={24} className="text-brand-green" />,
      image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
      link: "/travel/bikes"
    },
    {
      id: 3,
      title: "Emergency Services",
      description: "Quick access to ambulance services for medical emergencies, ensuring prompt assistance when needed.",
      icon: <Car size={24} className="text-brand-green" />,
      image: "https://images.unsplash.com/photo-1623793563977-91ccedc90c38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2892&q=80",
      link: "/travel/emergency"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <HeroSection />
        
        <ServiceSection 
          title="Find Your Perfect Stay" 
          subtitle="Discover a wide range of accommodations tailored to your needs, from luxurious hotels to cozy rental homes."
          services={stayServices}
          linkText="View all stay options"
          linkUrl="/stays"
        />
        
        <ServicesOverview />
        
        <ServiceSection 
          title="Delicious Food Delivered" 
          subtitle="Order from a variety of restaurants and enjoy quick delivery right to your doorstep."
          services={foodServices}
          linkText="Explore food options"
          linkUrl="/food"
        />
        
        <HowItWorks />
        
        <ServiceSection 
          title="Travel With Ease" 
          subtitle="Book reliable transportation for all your needs, from daily commutes to emergency situations."
          services={travelServices}
          linkText="See all travel services"
          linkUrl="/travel"
        />
        
        <Testimonials />
        
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
