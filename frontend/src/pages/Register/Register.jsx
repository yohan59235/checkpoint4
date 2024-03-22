import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [showModal, setShowModal] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:3310/api/users`, {
        email,
        password,
        nickname,
      })
      .then((response) => {
        console.info("Le compte à bien été créé:", response);
        setShowModal(true);
      })
      .catch((err) => console.info("Il y a eu un problème:", err));
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleChangeNickname = (event) => {
    setNickname(event.target.value);
  };

  return (
    <div className="Register_Page">
      <h2>Enregistrez vous</h2>
      <form onSubmit={submitForm}>
        <label htmlFor="Email">Renseignez votre email</label>
        <input
          type="text"
          placeholder="Entrez votre email"
          onChange={handleChangeEmail}
          required
        />

        <label htmlFor="nickname">Définissez un pseudo d'utilisation</label>
        <input
          type="text"
          placeholder="Ajoutez votre pseudo"
          onChange={handleChangeNickname}
          required
        />

        <label htmlFor="password">Définissez votre mot-de-passe</label>
        <input
          type="text"
          placeholder="Votre mot-de-passe"
          onChange={handleChangePassword}
          required
        />

        <button type="submit" className="Button_Register">
          S'enregistrer
        </button>
      </form>

      {showModal && (
        <div>
          <div className="Confirm_Champ">
            <Link to="/">
              <button
                type="button"
                className="close"
                onClick={() => setShowModal(false)}
              >
                <p>Votre compte à bien été enregistré</p>
                <p>
                  cliquez sur cette fenêtre pour retourner à la page d'accueil
                </p>
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Register;
