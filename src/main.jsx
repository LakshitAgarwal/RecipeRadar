import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import RecipeDetails from "./Componets/RecipeDetails.jsx";
import RecipeByCat from "./Componets/RecipeByCat.jsx";
import HeroSection from "./Componets/HeroSection.jsx";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Wrap all pages inside App
    children: [
      { path: "/", element: <HeroSection /> }, // Home Page Content
      { path: "/details/:dishId", element: <RecipeDetails /> },
      { path: "/category/:category", element: <RecipeByCat /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
