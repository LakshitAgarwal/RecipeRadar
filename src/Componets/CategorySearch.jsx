import React from "react";
import { categoryList, categoryImagesList } from "../Utils/constants";
import { Link } from "react-router-dom";

const CategorySearch = () => {
  return (
    <div className="bg-[#fde8c7] py-14">
      <div className="merriweather-sans text-2xl lg:text-3xl text-center">
        Find Recipes by Category
      </div>
      <div className="mt-12 flex flex-wrap-reverse justify-center gap-6 lg:gap-10 w-[95%] lg:w-[60%] mx-auto">
        {categoryList.map((category) => (
          <Link to={`/category/${category}`} key={category}>
            <div className="flex items-center gap-3 lg:gap-4 bg-white px-3 lg:px-4 py-2 rounded-2xl cursor-pointer shadow hover:bg-gray-200 transition">
              <img
                src={categoryImagesList[category]}
                alt={category}
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-full object-cover"
              />
              <p className="text-base lg:text-lg font-semibold text-gray-800">
                {category}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategorySearch;
