import React from "react";
import logo from "../Assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-yellow-100 shadow-md">
      <div className="max-w-8xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo (Left Corner) */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Logo" className="h-16 w-auto" />
          </div>

          {/* Navigation Links and Button (Right Side) */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-gray-900 font-medium">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 font-medium">
              About
            </a>
            <a href="#services" className="text-gray-700 hover:text-gray-900 font-medium">
              Services
            </a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 font-medium">
              Contact
            </a>
            <a
              href="#"
              className="px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-900"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button (Right Side for Mobile) */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
