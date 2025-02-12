import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const { dishId } = useParams();
  const [recipeData, setRecipeData] = useState([]);

  console.log(dishId);
  const getRecipe = async () => {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + dishId
    );
    const data = await response.json();
    const filteredData = data.meals[0];
    setRecipeData(filteredData);
    console.log(filteredData);
  };
  useEffect(() => {
    getRecipe();
  }, []);
  
  return <div>{recipeData.strArea}</div>;
};

export default RecipeDetails;
