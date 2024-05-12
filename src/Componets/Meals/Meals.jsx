import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";
import "./Meals.css";

const Meals = () => {
  const { meals } = useLoaderData();
  console.log(meals[0]);
  return (
    <div>
      <h2>Choose from our {meals.length} meal options.</h2>
      <div className="meals">
        {meals.map((meal) => (
          <Meal key={meal.idMeal} meal={meal}></Meal>
        ))}
      </div>
    </div>
  );
};

export default Meals;
