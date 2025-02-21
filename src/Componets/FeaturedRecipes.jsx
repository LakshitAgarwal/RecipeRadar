import React, { useEffect, useState } from "react";
import { SEARCH_BY_COUNTRY_API_URL } from "../Utils/constants";
import FeaturedCards from "./FeaturedCards";

const FeaturedRecipes = () => {
  const [featuredData, setFeaturedData] = useState([]);
  const [randomCountry, setRandomCountry] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const countryList = [
    "American",
    "British",
    "Chinese",
    "Canadian",
    "Dutch",
    "Egyptian",
    "French",
    "Greek",
    "Indian",
    "Italian",
    "Jamaican",
    "Japanese",
    "Kenyan",
    "Malaysian",
    "Mexican",
    "Moroccan",
    "Russian",
    "Spanish",
    "Thai",
    "Tunisian",
    "Turkish",
    "Vietnamese",
  ];

  const recipesFromCountry = async (country) => {
    const apiData = await fetch(SEARCH_BY_COUNTRY_API_URL + country);
    const data = await apiData.json();
    setFeaturedData(data.meals);
    setIsLoading(false);
  };

  useEffect(() => {
    const selectedCountry =
      countryList[Math.floor(Math.random() * countryList.length)];
    setRandomCountry(selectedCountry);
    recipesFromCountry(selectedCountry);
  }, []);

  return (
    <div className="relative">
      <div className="ml-20 merriweather-sans text-xl -mt-16">
        Featured {randomCountry} Recipes
      </div>
      <div className="relative">
        <div className="absolute inset-0 top-[40%] bg-[#fde8c7] -z-10"></div>
        <FeaturedCards data={featuredData} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default FeaturedRecipes;
