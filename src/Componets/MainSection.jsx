import React, { useState, useEffect } from "react";
import { API_URl } from "../Utils/constants";
import Cards from "./Cards";

const MainSection = () => {
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
    <>
      {/* Search Box */}
      <div className="flex items-center justify-center h-16 bg-gray-100">
        <div className="flex gap-2">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={callApi}
            className="px-4 py-2 bg-blue-500 cursor-pointer text-white rounded-md hover:bg-blue-600"
          >
            Search
          </button>
        </div>
      </div>
      <Cards data={cardData} />
    </>
  );
};

export default MainSection;
