import React, { useState } from "react";
import axios from "axios";

import "./register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:3310/api/users`, {
        email,
        password,
        nickname,
      })
      .then((response) => console.info(response))
      .catch((err) => console.info(err));
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
        />

        <label htmlFor="nickname">Définissez un pseudo d'utilisation</label>
        <input
          type="text"
          placeholder="Ajoutez votre pseudo"
          onChange={handleChangeNickname}
        />

        <label htmlFor="password">Définissez votre mot-de-passe</label>
        <input
          type="text"
          placeholder="Votre mot-de-passe"
          onChange={handleChangePassword}
        />

        <input
          type="submit"
          className="Button_Register"
          value="S'enregistrer"
        />
      </form>
    </div>
  );
}

export default Register;
