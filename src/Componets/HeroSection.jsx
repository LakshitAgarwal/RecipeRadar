import React, { useState, useEffect } from "react";
import chefImg from "../Assets/chef.png";
import { API_URl } from "../Utils/constants";
import Cards from "./Cards";
import FeaturedRecipes from "./FeaturedRecipes";
import CategorySearch from "./CategorySearch";
import MainSearch from "./MainSearch";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cardData, setCardData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Function to Fetch Data
  const callApi = async (query = searchQuery) => {
    setIsLoading(true); // ✅ Start shimmer before fetching
    try {
      const response = await fetch(API_URl + (query || "cakes")); // Default to "cakes"
      const data = await response.json();
      setCardData(data.meals);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false); // ✅ Stop shimmer after fetching
    }
  };

  // Fetch "cakes" when component mounts
  useEffect(() => {
    callApi("cakes");
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center px-10 py-10">
        <div className="w-[40%] space-y-8 ml-10">
          <h1 className="text-6xl font-extrabold text-gray-800 leading-snug merriweather-sans">
            Learn Cooking in a Simple Way
          </h1>
          <p className="text-lg text-gray-600">
            Explore over{" "}
            <span className="font-bold text-blue-500">10,000+</span> recipes
            from all around the world. Start your cooking journey now!
          </p>
          <div className="flex items-center gap-3">
            <button className="px-6 py-3 bg-gradient-to-r cursor-pointer from-yellow-400 to-orange-500 text-white rounded-lg shadow-lg hover:scale-105 transition-all">
              Get Started
            </button>
            <input
              onChange={(e) => setSearchQuery(e.target.value)}
              type="text"
              placeholder="Search for recipes..."
              className="flex-1 px-4 py-3 border bg-[#f2dcba] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-500 text-gray-800"
            />

            <button
              onClick={() => callApi(searchQuery)}
              className="px-6 py-3 bg-yellow-500 cursor-pointer text-white rounded-lg hover:bg-yellow-600 transition-all"
            >
              Search
            </button>
          </div>
        </div>

        <div className="w-3/5 flex justify-end -mr-36">
          <img
            src={chefImg}
            className="transform -scale-x-100 w-full h-auto object-cover"
            alt="Chef"
          />
        </div>
      </div>

      <FeaturedRecipes />
      <CategorySearch />
      <MainSearch
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        callApi={callApi}
        cardData={cardData}
      />
      <Cards data={cardData} isLoading={isLoading} /> {/* ✅ Shimmer applied here */}
    </div>
  );
};

export default HeroSection;
