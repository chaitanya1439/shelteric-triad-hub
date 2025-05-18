
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesOverview from "@/components/ServicesOverview";
import Testimonials from "@/components/Testimonials";
import BottomNavbar from "@/components/BottomNavbar";

const Index: React.FC = () => {
  return (
    <div className="pb-16 md:pb-0">
      <Navbar />
      <HeroSection />
      <ServicesOverview />
      <Testimonials />
      <Footer />
      <BottomNavbar />
    </div>
  );
};

export default Index;
