import React, { useContext, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import UserContext from "../../services/UseContext";

import "./monprofil.css";

function MonProfil() {
  const { user, setUser } = useContext(UserContext);
  const [userInfos, setUserInfos] = useState({
    email: user.email,
    nickname: user.nickname,
    id: user.id,
  });

  const handleChangeNickname = (event) => {
    setUserInfos({ ...userInfos, nickname: event.target.value });
  };

  const handleChangeEmail = (event) => {
    setUserInfos({ ...userInfos, email: event.target.value });
  };

  const getSettings = () => {
    axios
      .put(`http://localhost:3310/api/settings`, userInfos)
      .then((response) => console.info("Update:", response.data))
      .catch((error) => console.error("Erreur de la modification", error));

    const updateNickname = {
      email: userInfos.email,
      nickname: userInfos.nickname,
    };
    localStorage.setItem("email", updateNickname.email);
    localStorage.setItem("nickname", updateNickname.nickname);
  };

  const getRemoveAccount = () => {
    axios
      .delete(`http://localhost:3310/api/users/${user.id}`)
      .then((response) => console.info(response))
      .catch((error) => console.error(error));
  };

  const handleLogout = () => {
    axios
      .delete("http://localhost:3310/api/logout", {
        withCredentials: true,
      })
      .then(() =>
        setUser({
          id: null,
          email: null,
          nickname: null,
        })
      )
      .catch((error) => console.error(error));
  };

  return (
    <div className="Profile_Component">
      <h2>Hey {userInfos.nickname}, bienvenue sur ton profil</h2>
      <div className="Nickname_Modifs">
        <h4>Vous souhaitez modifier votre pseudo ?</h4>
        <label>
          {" "}
          Nouveau pseudo{" "}
          <input
            type="text"
            name="nickname"
            placeholder="Entrez votre nouveau pseudo"
            onChange={handleChangeNickname}
          />
        </label>
      </div>

      <div className="Email_Modifs">
        <h4>Vous souhaitez modifier votre email ?</h4>
        <label>
          {" "}
          Nouvel email{" "}
          <input
            type="text"
            name="email"
            placeholder="Entrez votre nouvel email"
            onChange={handleChangeEmail}
          />
        </label>
      </div>

      <div className="Button_Modifs">
        <input
          type="submit"
          onClick={getSettings}
          value="confirmez les modifications"
        />
      </div>

      <div className="Disconnected">
        <Link to="/" onClick={handleLogout}>
          <img
            src="http://localhost:3310/public/assets/images/off.png"
            alt="logout"
            className="Logout_Icone"
          />
        </Link>
      </div>

      <div className="Delete_Account">
        <h4>Vous voulez nous quitter ? T_T</h4>
        <button type="button" onChange={getRemoveAccount}>
          Supprimer mon compte
        </button>
      </div>
    </div>
  );
}

export default MonProfil;
