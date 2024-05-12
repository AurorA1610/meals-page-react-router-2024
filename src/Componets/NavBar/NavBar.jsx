import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/meals">Meals</NavLink>
    </nav>
  );
};

export default NavBar;
