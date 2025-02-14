import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {data?.map((i) => (
        <div
          key={i.idMeal}
          className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105"
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
            ) : (
              <span className="text-red-500">🔴</span>
            )}
          </div>
          <div className="px-4 pb-4">
            <Link to={`/${i.idMeal}`}>
              <button className="w-full py-1 text-sm font-medium border bg-yellow-50 cursor-pointer border-yellow-400 text-yellow-500 rounded-md hover:bg-yellow-400 hover:text-white transition">
                View Recipe
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
