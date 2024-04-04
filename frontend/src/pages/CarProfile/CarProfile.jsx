import React, { useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import UserContext from "../../services/UseContext";

import "./carprofile.css";

function CarProfile() {
  const { userId } = useContext(UserContext);
  console.info("je suis l'user", userId);
  const [publication, setPublication] = useState({
    image: "",
    description: "",
    id_user: userId,
  });

  const handleChange = (event) => {
    setPublication({ ...publication, [event.target.name]: event.target.value });
  };

  console.info("publication", publication);

  const submitPublication = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3310/api/publish",
        {
          image: publication.image,
          description: publication.description,
          id_user: userId,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        console.info("enregitrement publication:", response);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="CarProfile_Page">
      <div>
        <Link to="/mypublish" publication={publication} id={publication.id}>
          <p className="Link_To_MyPublish">Voir mes publications</p>
        </Link>
      </div>
      <h3>Partagez le véhicule qui vous fait vibrer !</h3>

      <div className="Form">
        <form onSubmit={submitPublication}>
          <input
            type="text"
            name="image"
            placeholder="Ajoutez l'URL de l'image"
            onChange={handleChange}
            value={publication.image}
          />

          <textarea
            type="text"
            name="description"
            cols="50"
            rows="15"
            placeholder="Ajoutez une petite description"
            onChange={handleChange}
            value={publication.description}
          />
          <button type="submit">Publier</button>
        </form>
      </div>
    </div>
  );
}

export default CarProfile;
