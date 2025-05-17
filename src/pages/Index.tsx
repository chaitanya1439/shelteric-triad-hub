
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesOverview from "@/components/ServicesOverview";
import Testimonials from "@/components/Testimonials";
import { Utensils } from 'lucide-react';

const Index: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServicesOverview />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
