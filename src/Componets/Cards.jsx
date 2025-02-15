import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-center gap-12 w-[95%] mx-auto mt-14">
      {data?.map((i) => (
        <div
          key={i.idMeal}
          className="w-64 bg-white rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105"
        >
          <img
            src={i.strMealThumb}
            alt={i.strMeal}
            className="w-full h-40 object-cover rounded-t-xl hover:opacity-85 transition"
          />
          <div className="p-4 flex justify-between items-center">
            <h2 className="text-md font-bold text-gray-800 truncate">
              {i.strMeal}
            </h2>
            {i.strCategory === "Vegetarian" ? (
              <span className="text-green-500">🟢</span>
            ) : i.strCategory === "Non-Vegetarian" ? (
              <span className="text-red-500">🔴</span>
            ) : (
              <span className="text-gray-400"></span>
            )}
          </div>
          <div className="px-4 pb-4">
            <Link to={`/details/${i.idMeal}`}>
              <button className="w-full py-2 text-sm font-medium border bg-yellow-50 cursor-pointer border-yellow-400 text-yellow-500 rounded-md hover:bg-yellow-400 hover:text-white transition">
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
