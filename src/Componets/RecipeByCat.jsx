import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CATEGORY_SEARCH_API } from "../Utils/constants";
import Cards from "./Cards";

const RecipeByCat = () => {
  const { category } = useParams();
  const [categoryData, setCategoryData] = useState([]);
  console.log(category);

  const getCategoryData = async () => {
    const response = await fetch(CATEGORY_SEARCH_API + category);
    const data = await response.json();
    setCategoryData(data.meals);
    console.log(data);
  };
  useEffect(() => {
    getCategoryData();
  }, []);

  return (
    <div>
      <Cards data={categoryData} />
    </div>
  );
};

export default RecipeByCat;
