import React from "react";
import { services } from "../data/data.js";

const Services = () => {
  return (
    <section className="bg-gradient-to-br from-white to-orange-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-3 border border-orange-200">
            Our Expertise
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 text-gray-800 px-2">
            Comprehensive Pharmaceutical 
            <span className="block mt-2 text-orange-500">Quality Assurance Services</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-6 rounded-full"></div>
          <p className="text-gray-600 mt-8 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed px-2">
            At InterPharma One, we specialize in delivering top-notch pharmaceutical development and quality
            assurance services. Our expertise ensures that your products meet the highest standards of
            safety and efficacy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg border-l border-orange-500 hover:border-l-4 transition-all duration-300"
            >
              {/* Top accent decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 opacity-75"></div>
              
              {/* Decorative circle */}
              <div className="absolute -right-16 -bottom-16 w-40 h-40 bg-orange-500 rounded-full opacity-5 group-hover:scale-125 transition-transform duration-500"></div>
              
              <div className="p-6 sm:p-8 relative z-10">
                {/* Mobile-first responsive layout */}
                <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-orange-100 text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300 mb-3 sm:mb-0 mx-auto sm:mx-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold sm:ml-4 text-gray-800 group-hover:text-orange-600 transition-colors duration-300 text-center sm:text-left">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-center sm:text-left sm:pl-16 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
