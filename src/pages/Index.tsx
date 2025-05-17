
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesOverview from "@/components/ServicesOverview";
import Testimonials from "@/components/Testimonials";

const Index: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServicesOverview />
      <Testimonials />
    </div>
  );
};

export default Index;
