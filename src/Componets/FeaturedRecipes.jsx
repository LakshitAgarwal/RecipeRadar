import React, { useEffect, useState } from "react";
import { SEARCH_BY_COUNTRY_API_URL } from "../Utils/constants";
import FeaturedCards from "./FeaturedCards";

const FeaturedRecipes = () => {
  const [featuredData, setFeaturedData] = useState([]);

  const recipesFromCountry = async () => {
    const apiData = await fetch(SEARCH_BY_COUNTRY_API_URL + "Indian");
    const data = await apiData.json();
    setFeaturedData(data.meals);
  };
  useEffect(() => {
    recipesFromCountry();
  }, []);

  return (
    <div>
      <div className="ml-20 merriweather-sans text-xl -mt-16">
        Featured Recipes
      </div>
      <div>
        <FeaturedCards data={featuredData} />
      </div>
    </div>
  );
};

export default FeaturedRecipes;
