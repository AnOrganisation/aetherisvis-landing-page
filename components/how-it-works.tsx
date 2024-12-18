"use client";
import React from "react";

// Data for steps
const steps = [
  {
    id: 1,
    title: "Your Design",
    description: "Collaborate with us to create the design you envision for your product or space.",
    icon: "/icons/design.svg", // Placeholder for step-specific icons
  },
  {
    id: 2,
    title: "Interactive Customization",
    description: "Make changes in real-time and see them come to life instantly.",
    icon: "/icons/customize.svg",
  },
  {
    id: 3,
    title: "Seamless Integration",
    description: "Our solution fits seamlessly into your website or web app with no hassle.",
    icon: "/icons/integrate.svg",
  },
  {
    id: 4,
    title: "Optimal Performance",
    description: "Enjoy lag-free, high-quality visuals on any device.",
    icon: "/icons/performance.svg",
  },
];

interface HowItWorksData {
  id: string;
}

const HowItWorks = ({ id }: HowItWorksData) => {
  return (
    <section id={id} className="py-20 bg-gray-300">
      {/* Section Heading */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          Design Your Future, Your Way
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          A simple step-by-step process to bring your vision to life.
        </p>
      </div>

      {/* Steps */}
      <div className="container grid grid-cols-1 gap-8 px-6 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:px-12">
        {steps.map((step) => (
          <div
            key={step.id}
            className="p-6 text-center bg-gray-400 shadow-lg rounded-xl"
          >
            {/* Step Icon */}
            <div className="flex justify-center mb-4">
              <img
                src={step.icon}
                alt={step.title}
                className="object-contain w-20 h-16" // Standardized icon size
              />
            </div>
            {/* Step Title */}
            <h3 className="mb-2 text-2xl font-bold text-white">{step.title}</h3>
            {/* Step Description */}
            <p className="text-gray-100 text-md">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
