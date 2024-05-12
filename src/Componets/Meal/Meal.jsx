import { Link } from "react-router-dom";
import "./Meal.css";
const Meal = ({ meal }) => {
  const { strMeal } = meal;
  return (
    <div className="meal">
      <h2>{strMeal}</h2>
      <Link to={`/meal/${strMeal}`}>
        <button>Order Now</button>
      </Link>
    </div>
  );
};

export default Meal;
