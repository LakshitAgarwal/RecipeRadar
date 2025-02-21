import React, { useState } from "react";
import logo from "../Assets/logo2.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black shadow-md w-[90%] mx-auto rounded-full mt-5 relative">
      <div className="max-w-8xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-11 lg:h-14">
          {/* Logo */}
          <Link to="/">
            <div className="flex-shrink-0">
              <img src={logo} alt="Logo" className="md:h-16 h-12 w-auto" />
            </div>
          </Link>

          {/* Desktop Navigation */}
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

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-white focus:outline-none"
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

      {/* Fullscreen Mobile Menu with Close Button */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center space-y-6 z-50">
          {/* Close Button */}
          <button
            className="absolute top-5 right-5 text-white text-3xl focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>

          <a href="#home" className="text-white text-2xl hover:text-yellow-300" onClick={() => setIsOpen(false)}>
            Home
          </a>
          <a href="#about" className="text-white text-2xl hover:text-yellow-300" onClick={() => setIsOpen(false)}>
            About
          </a>
          <a href="#services" className="text-white text-2xl hover:text-yellow-300" onClick={() => setIsOpen(false)}>
            Services
          </a>
          <a href="#contact" className="text-white text-2xl hover:text-yellow-300" onClick={() => setIsOpen(false)}>
            Contact
          </a>
          <a
            href="#"
            className="px-6 py-3 bg-yellow-300 text-black rounded-2xl hover:bg-yellow-400 text-xl"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
