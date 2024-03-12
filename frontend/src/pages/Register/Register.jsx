import React from "react";

import "./register.css";

function Register() {
  return (
    <div className="Register_Page">
      <h2>Enregistrez vous</h2>

      <label htmlFor="Email">Renseignez votre email</label>
      <input type="text" placeholder="Entrez votre email" />

      <label htmlFor="password">Définissez votre mot-de-passe</label>
      <input type="text" placeholder="Votre mot-de-passe" />

      <label htmlFor="password">Répétez votre mot-de-passe</label>
      <input type="text" placeholder="Votre mot-de-passe" />

      <button type="button">S'enregistrer</button>
    </div>
  );
}

export default Register;
