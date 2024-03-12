import React from "react";
import { Link } from "react-router-dom";

import "./connexion.css";

function Connexion() {
  return (
    <div className="Connexion_Page">
      <h2>Connectez vous</h2>
      <label htmlFor="Email">Entrez votre email</label>
      <input type="text" placeholder=" Ecrivez votre Email" />

      <label htmlFor="Password">Entrez votre mot-de-passe</label>
      <input type="text" placeholder=" Ecrivez votre mot-de-passe" />

      <button type="button">Se connecter</button>

      <Link to="/register">
        <p className="Link_Register">Vous n'avez pas encore de compte ?</p>
      </Link>
    </div>
  );
}

export default Connexion;
