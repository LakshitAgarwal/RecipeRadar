import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const { dishId } = useParams();
  const [recipeData, setRecipeData] = useState(null);
  const [checkedIngredients, setCheckedIngredients] = useState({});

  const getRecipe = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${dishId}`
      );
      const data = await response.json();
      setRecipeData(data.meals[0]);
    } catch (error) {
      console.error("Error fetching recipe:", error);
    }
  };

  useEffect(() => {
    getRecipe();
  }, []);

  if (!recipeData) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-700 text-2xl">
        Loading Recipe...
      </div>
    );
  }

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (recipeData[`strIngredient${i}`]) {
      ingredients.push({
        ingredient: recipeData[`strIngredient${i}`],
        measure: recipeData[`strMeasure${i}`],
      });
    }
  }

  const toggleIngredient = (index) => {
    setCheckedIngredients((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="min-h-screen text-gray-900 py-12 px-4 sm:px-6 md:px-12">
      <div className="max-w-6xl mx-auto bg-[#fff9e8] p-6 sm:p-10 rounded-xl shadow-lg border border-gray-200">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <img
            src={recipeData.strMealThumb}
            alt={recipeData.strMeal}
            className="w-48 h-48 sm:w-64 sm:h-64 object-cover rounded-lg shadow-md border-2 border-gray-300"
          />
          <div className="flex-1 text-center md:text-left">
            <h1 className="lg:text-4xl text-2xl font-bold text-gray-800 merriweather-sans">
              {recipeData.strMeal}
            </h1>
            <p className="text-lg text-gray-600 mt-2">
              🌍 Origin: {recipeData.strArea}
            </p>
            <p className="text-lg text-gray-600">
              🍽️ Category: {recipeData.strCategory}
            </p>
          </div>
        </div>

        <div className="lg:mt-8 mt-12 p-4 sm:p-6 bg-gray-50 rounded-lg border border-gray-300 shadow-sm">
          <h2 className="merriweather-sans lg:text-2xl text-xl font-semibold text-gray-700 border-b border-gray-300 pb-2">
            🥕 Ingredients (Tap to check)
          </h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {ingredients.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-md shadow-sm border border-gray-300 bg-white text-gray-700"
              >
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={checkedIngredients[index] || false}
                    onChange={() => toggleIngredient(index)}
                    className="h-5 w-5 accent-gray-700 cursor-pointer"
                  />
                  <span
                    className={
                      checkedIngredients[index]
                        ? "line-through text-gray-400"
                        : ""
                    }
                  >
                    {item.ingredient}
                  </span>
                </label>
                <span className="text-gray-500">{item.measure}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 p-4 sm:p-6 bg-gray-50 rounded-lg border border-gray-300 shadow-sm">
          <h2 className="merriweather-sans lg:text-2xl text-xl font-semibold text-gray-700 border-b border-gray-300 pb-2">
            🍳 Cooking Instructions
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed whitespace-pre-wrap">
            {recipeData.strInstructions}
          </p>
        </div>

        {recipeData.strYoutube && (
          <div className="mt-8 p-4 sm:p-6 bg-gray-50 rounded-lg border border-gray-300 shadow-sm">
            <h2 className="merriweather-sans text-xl lg:text-2xl font-semibold text-gray-700 border-b border-gray-300 pb-2">
              🎥 Watch Tutorial
            </h2>
            <div className="mt-4">
              <iframe
                className="w-full h-64 sm:h-72 md:h-96 rounded-lg border-2 border-gray-300 shadow-md"
                src={`https://www.youtube.com/embed/${
                  recipeData.strYoutube.split("v=")[1]
                }`}
                title="Recipe Video"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeDetails;
