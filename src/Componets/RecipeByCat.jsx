import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CATEGORY_SEARCH_API } from "../Utils/constants";
import Cards from "./Cards";
import { motion } from "framer-motion";

const RecipeByCat = () => {
  const { category } = useParams();
  const [categoryData, setCategoryData] = useState([]);

  const getCategoryData = async () => {
    try {
      const response = await fetch(CATEGORY_SEARCH_API + category);
      const data = await response.json();
      setCategoryData(data.meals);
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  useEffect(() => {
    getCategoryData();
  }, [category]);

  return (
    <div className="min-h-screen bg-[#FDF6ED] px-4 py-8 md:px-6 md:py-10 overflow-hidden relative">
      {/* Floating Emojis */}
      {[
        "🥗", "🍕", "🍣", "🍩", "🍔", "🥞"
      ].map((emoji, i) => (
        <motion.div
          key={i}
          className="text-3xl md:text-4xl absolute"
          initial={{ y: Math.random() * 500, x: Math.random() * 500 }}
          animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
          transition={{ duration: 5 + i, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          style={{ top: `${Math.random() * 80}%`, left: `${Math.random() * 90}%`, opacity: 0.2 }}
        >
          {emoji}
        </motion.div>
      ))}

      {/* Header with Animated Gradient */}
      <motion.div
        className="relative bg-[url('https://images.unsplash.com/photo-1556911073-52527ac437d4')] bg-cover bg-center rounded-xl shadow-xl p-8 md:p-12 mb-8 md:mb-12 text-center overflow-hidden"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000aa] to-[#00000044] backdrop-blur-xl rounded-xl"></div>

        {/* Neon Glow Text */}
        <div className="relative z-10 text-white">
          <h1 className="text-4xl md:text-7xl font-extrabold uppercase tracking-widest drop-shadow-lg neon-text">
            {category} <span className="text-[#FFD700]">Recipes</span> 🍽️
          </h1>
          <p className="text-base md:text-lg mt-3 md:mt-4 italic drop-shadow-sm">
            Dive into the world of <span className="font-bold">{category}</span> flavors!
          </p>
        </div>

        {/* Static Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-12 md:h-16">
            <path d="M0.00,49.98 C150.00,150.00 349.74,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" className="fill-[#FDF6ED]"></path>
          </svg>
        </div>
      </motion.div>

      {/* Cards Section with Hover Animation */}
      {categoryData.length > 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Cards data={categoryData} />
        </motion.div>
      ) : (
        <div className="text-center text-lg md:text-xl text-gray-600">
          Loading recipes...
        </div>
      )}
    </div>
  );
};

export default RecipeByCat;
