import React from "react";
import { Link } from "react-router-dom";

const FeaturedCards = ({ data }) => {
  return (
    <div className="p-6 overflow-x-auto ml-13 featured">
      <div className="flex gap-8">
        {data?.map((i) => (
          <div
            key={i.idMeal}
            className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105"
            style={{ minWidth: "16rem", maxWidth:"17rem" }} // Keeps the original size
          >
            <img
              src={i.strMealThumb}
              alt={i.strMeal}
              className="w-full h-40 object-cover rounded-t-xl hover:opacity-85 transition"
            />
            <div className="p-4 flex justify-between items-center mx-3">
              <h2 className="text-md font-bold text-gray-800 truncate">
                {i.strMeal}
              </h2>
              {i.strCategory === "Vegetarian" ? (
                <span className="text-green-500">🟢</span>
              ) : i.strCategory === "Non-Vegetarian" ? (
                <span className="text-red-500">🔴</span>
              ) : (
                <span className="text-gray-400"></span> // Fallback for unknown or missing category
              )}
            </div>
            <div className="px-4 pb-4">
              <Link to={`/details/${i.idMeal}`}>
                <button className="w-full py-1 text-sm font-medium border bg-yellow-50 cursor-pointer border-yellow-400 text-yellow-500 rounded-md hover:bg-yellow-400 hover:text-white transition">
                  View Recipe
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCards;
