import React from "react";
import ServiceHero from "../components/ServiceHero";
import Services from "../components/Services";
import TestingServices from "../components/TestingServices";
import WhatWeOffer from "../components/WhatWeOffer";

const ServicesPage = () => {
  return (
    <div>
      <ServiceHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-white to-orange-50">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="h-1.5 w-24 bg-orange-500 rounded-full mb-1"></div>
            <div className="h-1.5 w-16 bg-orange-300 rounded-full ml-8"></div>
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
            Our <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <h3 className="text-xl text-gray-600 max-w-2xl mx-auto">
            Innovative pharmaceutical solutions designed for your research needs
          </h3>
        </div>

        <div className="relative">
          {/* Decorative elements */}
          <div className="hidden lg:block absolute -left-16 top-1/3 w-32 h-32 bg-orange-200 rounded-full opacity-50"></div>
          <div className="hidden lg:block absolute -right-20 top-2/3 w-40 h-40 bg-orange-300 rounded-full opacity-40"></div>
          
          {/* Services container */}
          <div className="relative z-10 bg-white bg-opacity-70 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-10">
            <Services />
            <TestingServices />
            <WhatWeOffer />
          </div>
        </div>
        
        {/* Bottom decorative element */}
        <div className="mt-16 flex justify-center">
          <div className="h-1 w-16 bg-gradient-to-r from-orange-300 to-orange-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
