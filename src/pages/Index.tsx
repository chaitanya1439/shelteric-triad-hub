import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import Testimonials from "@/components/Testimonials";
import { Utensils } from 'lucide-react';

const Index: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ServicesOverview />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
