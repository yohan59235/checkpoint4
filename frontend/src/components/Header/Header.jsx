import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

function Header() {
  return (
    <div className="Header">
      <Link to="/">
        <img
          className="Header_Logo"
          src="http://localhost:3310/public/assets/images/Logo_voiture.png"
          alt="Logo du site"
        />
      </Link>
      <h1>Le Facebook de l'automobile</h1>
      <Link to="/connexion">
        <img
          className="Header_User"
          src="http://localhost:3310/public/assets/images/user.png"
          alt="Icone utilisateur"
        />
      </Link>
      <Link to="/carprofile">
        <img
          className="Header_Add_Car"
          src="http://localhost:3310/public/assets/images/voiture.png"
          alt="Icone ajout d'une voiture"
        />
      </Link>
    </div>
  );
}

export default Header;
