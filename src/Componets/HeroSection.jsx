import React, { useState } from "react";
import chefImg from "../Assets/chef.png";
import { API_URl } from "../Utils/constants";
import Cards from "./Cards";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cardData, setCardData] = useState([]);

  const callApi = async () => {
    try {
      const response = await fetch(API_URl + searchQuery);
      const data = await response.json();
      setCardData(data.meals);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center px-10 py-10">
        <div className="w-[40%] space-y-8  ml-10">
          <h1 className="text-6xl font-extrabold text-gray-800 leading-snug">
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
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-500 text-gray-800"
            />

            <button
              onClick={callApi}
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
      <Cards data={cardData} />
    </div>
  );
};

export default HeroSection;
