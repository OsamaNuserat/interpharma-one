import React from "react";
import ProductHero from "../components/ProductHero";
import Products from "../components/Products";
import { products } from "../data/data.js";

const ProductsPage = () => {
  return (
    <div>
      <ProductHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-white to-orange-50">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="h-1.5 w-24 bg-orange-500 rounded-full mb-1"></div>
            <div className="h-1.5 w-16 bg-orange-300 rounded-full ml-8"></div>
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
            Our{" "}
            <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
              Products
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            explore our amazing products
          </p>
        </div>

        <div className="relative">
          {/* Decorative elements */}
          <div className="hidden lg:block absolute -left-16 top-1/3 w-32 h-32 bg-orange-200 rounded-full opacity-50"></div>
          <div className="hidden lg:block absolute -right-20 top-2/3 w-40 h-40 bg-orange-300 rounded-full opacity-40"></div>

          {/* Products container */}
          <div className="relative z-10 bg-white bg-opacity-70 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-10">
            <div id="product-details" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col h-full"
                >
                  {/* Top border with animated expansion on hover */}
                  <div className="absolute inset-x-0 top-0 h-1 bg-orange-300 rounded-b-full transition-all duration-300 group-hover:h-2 group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-orange-300"></div>
                  
                  {/* Category pill */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="px-3 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-full transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                      {product.category}
                    </div>
                  </div>

                  {/* Content area */}
                  <div className="p-6 pt-8 relative z-10 flex flex-col flex-grow">
                    {/* Product name */}
                    <div className="h-16 mb-4 overflow-hidden">
                      <h2 className="text-2xl font-bold text-orange-600 line-clamp-2 transition-all duration-300 group-hover:text-orange-500">
                        {product.name}
                      </h2>
                    </div>

                    {/* Product details */}
                    <div className="space-y-4 mb-6">
                      <div className="flex">
                        <div className="w-1/3">
                          <p className="text-orange-500 font-medium">Brand:</p>
                        </div>
                        <div className="w-2/3">
                          <p className="text-gray-700">{product.brand}</p>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="w-1/3">
                          <p className="text-orange-500 font-medium">Dosage:</p>
                        </div>
                        <div className="w-2/3">
                          <p className="text-gray-700">{product.dosage}</p>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="w-1/3">
                          <p className="text-orange-500 font-medium">Strength:</p>
                        </div>
                        <div className="w-2/3">
                          <p className="text-gray-700">{product.strength}</p>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="w-1/3">
                          <p className="text-orange-500 font-medium">Company:</p>
                        </div>
                        <div className="w-2/3">
                          <p className="text-gray-700">{product.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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

export default ProductsPage;
