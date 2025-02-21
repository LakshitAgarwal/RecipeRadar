import React from "react";
import { FaSearch } from "react-icons/fa";
import Cards from "./Cards";

const MainSearch = ({ searchQuery, setSearchQuery, callApi, cardData }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-14 px-4">
      <h1 className="merriweather-sans text-2xl lg:text-3xl text-center mb-6">
        Looking for something specific?
      </h1>

      {/* Search Box & Icon Container */}
      <div className="flex items-center gap-2 lg:gap-4 w-full max-w-2xl">
        {/* Search Box */}
        <div className="flex-1 bg-[#fff9f0] border border-gray-300 rounded-full px-3 lg:px-4 py-2 lg:py-3 shadow-lg flex items-center">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            placeholder="Cake"
            className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-600 px-2 text-base lg:text-lg"
          />
        </div>

        {/* Magnifying Glass Button */}
        <button
          onClick={() => callApi(searchQuery)}
          className="p-3 lg:p-4 bg-yellow-500 cursor-pointer rounded-full hover:bg-yellow-600 transition-all shadow-lg flex items-center justify-center"
        >
          <FaSearch className="text-white text-lg lg:text-xl" />
        </button>
      </div>
    </div>
  );
};

export default MainSearch;
