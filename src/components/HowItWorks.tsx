
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Choose a Service",
      description: "Select from our wide range of stays, food options, or travel services based on your needs.",
      color: "bg-brand-blue"
    },
    {
      number: "02",
      title: "View Options",
      description: "Browse through available options, compare prices, check reviews, and find the perfect match.",
      color: "bg-brand-orange"
    },
    {
      number: "03",
      title: "Book & Pay",
      description: "Complete your booking with our secure payment system and receive instant confirmation.",
      color: "bg-brand-green"
    },
    {
      number: "04",
      title: "Enjoy",
      description: "Enjoy your stay, meal, or ride with the confidence of Shelteric's quality service guarantee.",
      color: "bg-brand-dark"
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Using Shelteric is simple and straightforward. Follow these four easy steps to get started.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                <span className="text-white text-xl font-bold">{step.number}</span>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-16 w-full h-0.5 bg-gray-200"></div>
              )}
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
