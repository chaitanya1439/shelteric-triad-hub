
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronRight, Bed, Hotel, House } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  link: string;
}

interface ServiceSectionProps {
  title: string;
  subtitle: string;
  services: Service[];
  linkText: string;
  linkUrl: string;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ 
  title, 
  subtitle, 
  services,
  linkText,
  linkUrl
}) => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600 max-w-2xl">{subtitle}</p>
          </div>
          <Link to={linkUrl} className="mt-6 md:mt-0 flex items-center text-brand-blue font-medium hover:underline">
            {linkText}
            <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="service-card group">
              <div className="relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-64 object-cover rounded-t-xl"
                />
                <div className="absolute top-4 left-4 bg-white p-3 rounded-full shadow-lg">
                  {service.icon}
                </div>
              </div>
              <div className="p-6 bg-white rounded-b-xl border border-gray-100">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button asChild className="w-full bg-brand-blue hover:bg-brand-blue/90">
                  <Link to={service.link}>View Details</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
