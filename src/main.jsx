import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecipeDetails from "./Componets/RecipeDetails.jsx";
import RecipeByCat from "./Componets/RecipeByCat.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/details/:dishId",
    element: <RecipeDetails />,
  },
  {
    path: "/category/:category",
    element: <RecipeByCat />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
