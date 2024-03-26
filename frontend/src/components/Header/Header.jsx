import React, { useContext } from "react";
import { Link } from "react-router-dom";

import UserContext from "../../services/UseContext";

import "./header.css";

function Header() {
  const { user } = useContext(UserContext);

  const isConnected = user.id && user.id !== "null";

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

      {!isConnected ? (
        <Link to="/connexion">
          <img
            className="Header_User"
            src="http://localhost:3310/public/assets/images/user.png"
            alt="Icone utilisateur"
          />
        </Link>
      ) : null}

      {isConnected ? (
        <Link to="/monprofil">
          <img
            className="Header_Profile"
            src="http://localhost:3310/public/assets/images/user.png"
            alt="Icone mon profile"
          />
        </Link>
      ) : null}

      {isConnected ? (
        <Link to="/carprofile">
          <img
            className="Header_Add_Car"
            src="http://localhost:3310/public/assets/images/voiture.png"
            alt="Icone ajout d'une voiture"
          />
        </Link>
      ) : null}
    </div>
  );
}

export default Header;
