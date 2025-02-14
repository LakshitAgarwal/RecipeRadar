import React from "react";
import { categoryList, categoryImagesList } from "../Utils/constants";
import { Link } from "react-router-dom";

const CategorySearch = () => {
  return (
    <div className="bg-[#fde8c7] py-14">
      <div className="merriweather-sans  text-3xl text-center">
        Find Recipes by Category
      </div>
      <div className="mt-12 flex flex-wrap-reverse justify-center gap-10 w-[60%] mx-auto">
        {categoryList.map((category) => (
          <Link to={`/category/${category}`}>
            <div
              key={category}
              className="flex items-center gap-4 bg-white px-4 py-2 rounded-2xl cursor-pointer shadow hover:bg-gray-200 transition"
            >
              <img
                src={categoryImagesList[category]}
                alt={category}
                className="w-12 h-12 rounded-full object-cover"
              />
              <p className="text-lg font-semibold text-gray-800">{category}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategorySearch;
