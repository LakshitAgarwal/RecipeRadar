import React from "react";
import logo from "../Assets/logo2.png";

const Navbar = () => {
  return (
    <nav className="bg-black shadow-md w-[90%] mx-auto rounded-full mt-5">
      <div className="max-w-8xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14"> {/* Reduced height */}
          {/* Logo (Left Corner) */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Logo" className="h-16 w-auto" />
          </div>

          {/* Navigation Links and Button (Right Side) */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-yellow-300 font-medium">
              Home
            </a>
            <a href="#about" className="text-white hover:text-yellow-300 font-medium">
              About
            </a>
            <a href="#services" className="text-white hover:text-yellow-300 font-medium">
              Services
            </a>
            <a href="#contact" className="text-white hover:text-yellow-300 font-medium">
              Contact
            </a>
            <a
              href="#"
              className="px-4 py-2 bg-yellow-300 text-black rounded-2xl hover:bg-yellow-400 text-sm font-medium"
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
