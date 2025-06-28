import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="absolute w-full top-0 left-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-white" onClick={closeMenu}>
            <img src="/logo.svg" alt="Logo" width={100} height={50} className="filter brightness-0 invert" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/about-us" className="text-white hover:text-orange-200 transition-all duration-300 font-medium">About Us</Link>
            <Link to="/services" className="text-white hover:text-orange-200 transition-all duration-300 font-medium">Our Services</Link>
            <Link to="/products" className="text-white hover:text-orange-200 transition-all duration-300 font-medium">Our Products</Link>
            <Link to="/contact-us" className="text-white hover:text-orange-200 transition-all duration-300 font-medium">Contact us</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors duration-200 z-60" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-80 opacity-100' 
            : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="px-6 py-4 bg-white/95 backdrop-blur-sm shadow-lg border-t border-orange-200">
            <div className="space-y-2">
              <Link 
                to="/about-us" 
                className="block py-3 px-4 text-gray-800 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-all duration-200 font-medium"
                onClick={closeMenu}
              >
                About Us
              </Link>
              <Link 
                to="/services" 
                className="block py-3 px-4 text-gray-800 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-all duration-200 font-medium"
                onClick={closeMenu}
              >
                Our Services
              </Link>
              <Link 
                to="/products" 
                className="block py-3 px-4 text-gray-800 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-all duration-200 font-medium"
                onClick={closeMenu}
              >
                Our Products
              </Link>
              <Link 
                to="/contact-us" 
                className="block py-3 px-4 text-gray-800 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-all duration-200 font-medium"
                onClick={closeMenu}
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMenu}
        />
      )}
    </>
  );
};

export default Navbar;
