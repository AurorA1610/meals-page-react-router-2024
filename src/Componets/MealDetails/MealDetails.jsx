import { useLoaderData } from "react-router-dom";

const MealDetails = () => {
  const mealDetails = useLoaderData();
  const { strMeal, strCategory, strArea, idMeal } = mealDetails.meals[0];
  return (
    <div>
      <h1>{strMeal}</h1>
      <h3>ID: {idMeal}</h3>
      <h3>Category: {strCategory}</h3>
      <h3>Origin: {strArea}</h3>
    </div>
  );
};

export default MealDetails;
