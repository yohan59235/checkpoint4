import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserProvider } from "./services/UseContext";

import App from "./App";
import Home from "./pages/Home/Home";
import Connexion from "./pages/Connexion/Connexion";
import Register from "./pages/Register/Register";
import CarProfile from "./pages/CarProfile/CarProfile";
import FAQ from "./pages/FAQ/FAQ";
import Contact from "./pages/Contact/Contact";
import Politique from "./pages/Politique/Politique";
import MonProfil from "./pages/Monprofil/MonProfil";
import MyPublish from "./components/MyPublish/MyPublish";

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
      {
        path: "/monprofil",
        element: <MonProfil />,
      },
      {
        path: "/mypublish",
        element: <MyPublish />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
