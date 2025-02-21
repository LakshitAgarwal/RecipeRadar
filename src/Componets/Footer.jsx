import React from "react";
import logo from "../Assets/logo2.png";
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-white min-h-[50vh] mt-26 px-6 sm:px-10 py-10">
      {/* Logo & Branding */}
      <div className="flex flex-col sm:flex-row items-center justify-center text-center">
        <img src={logo} alt="Recipe Radar Logo" className="h-14 sm:h-16 w-auto" />
        <h1 className="text-2xl sm:text-3xl font-semibold text-yellow-300 mt-2">
          Recipe Radar
        </h1>
      </div>

      {/* Footer Content */}
      <div className="lg:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center pt-6">
        {/* Explore Section */}
        <div className="flex flex-col items-center">
          <h1 className="text-lg font-semibold mb-3">Explore</h1>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-yellow-400 transition cursor-pointer">Home</li>
            <li className="hover:text-yellow-400 transition cursor-pointer">Recipes</li>
            <li className="hover:text-yellow-400 transition cursor-pointer">Categories</li>
            <li className="hover:text-yellow-400 transition cursor-pointer">Ingredients</li>
          </ul>
        </div>

        {/* Recipes Section */}
        <div className="sm:border-l border-gray-700 sm:pl-6 flex flex-col items-center">
          <h1 className="text-lg font-semibold mb-3">Recipes</h1>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-yellow-400 transition cursor-pointer">Featured Recipes</li>
            <li className="hover:text-yellow-400 transition cursor-pointer">Search Recipes</li>
          </ul>
        </div>

        {/* Socials Section */}
        <div className="sm:border-l border-gray-700 sm:pl-6 flex flex-col items-center">
          <h1 className="text-lg font-semibold mb-3">Follow Me</h1>
          <ul className="flex space-x-4 sm:space-x-6 text-gray-300">
            <li>
              <a href="https://github.com/LakshitAgarwal" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition text-xl sm:text-2xl">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/lakshit-agarwal-6082b9216/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition text-xl sm:text-2xl">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://x.com/lakshitagarwal7" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition text-xl sm:text-2xl">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/lakshit.7811/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition text-xl sm:text-2xl">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-400 text-sm mt-8">
        &copy; {new Date().getFullYear()} Recipe Radar. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
