
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesOverview from "@/components/ServicesOverview";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

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
