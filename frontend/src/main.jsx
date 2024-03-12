import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home/Home";
import Connexion from "./pages/Connexion/Connexion";
import Register from "./pages/Register/Register";
import CarProfile from "./pages/CarProfile/CarProfile";
import FAQ from "./pages/FAQ/FAQ";
import Contact from "./pages/Contact/Contact";
import Politique from "./pages/Politique/Politique";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/connexion",
        element: <Connexion />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/carprofile",
        element: <CarProfile />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/politique",
        element: <Politique />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
