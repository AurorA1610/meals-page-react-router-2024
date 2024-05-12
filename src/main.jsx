import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Componets/Home/Home.jsx";
import Meals from "./Componets/Meals/Meals.jsx";
import MealDetails from "./Componets/MealDetails/MealDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/meals",
        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/search.php?s="),
        element: <Meals />,
      },
      {
        path: "/meal/:mealId",
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${params.mealId}`
          ),
        element: <MealDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
