import { React, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import UserContext from "../../services/UseContext";

import "./connexion.css";

function Connexion() {
  const { setUser } = useContext(UserContext);
  const { setUserId } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3310/api/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        setUser({
          email: response.data.email,
          id: response.data.id,
          nickname: response.data.nickname,
        });
        console.info("mon id est", response.data.id);
        setUserId(response.data.id);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="Connexion_Page">
      <h2>Connectez vous</h2>
      <form onSubmit={submitForm}>
        <label htmlFor="Email">Entrez votre email</label>
        <input
          type="email"
          onChange={handleChangeEmail}
          id="email"
          placeholder=" Ecrivez votre Email"
          required
        />

        <label htmlFor="Password">Entrez votre mot-de-passe</label>
        <input
          type="password"
          onChange={handleChangePassword}
          id="password"
          placeholder=" Ecrivez votre mot-de-passe"
          required
        />

        <button type="submit" className="Button_Login" value="Se connecter">
          Se connecter
        </button>
      </form>

      <Link to="/register">
        <p className="Link_Register">Vous n'avez pas encore de compte ?</p>
      </Link>
    </div>
  );
}

export default Connexion;
