import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data }) => {
  console.log(data);
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {data?.map((i) => (
        <div
          key={i.idMeal}
          className="border rounded-md overflow-hidden shadow-md"
        >
          <img
            src={i.strMealThumb}
            alt={i.strMeal}
            className="w-full h-48 object-cover"
          />
          <div className="p-2">
            <h2 className="text-lg font-semibold">{i.strMeal}</h2>
          </div>
          <Link to={`/${i.idMeal}`}>
            <button className="px-4 py-2 mx-2 my-2 cursor-pointer bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Recipe
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Cards;
