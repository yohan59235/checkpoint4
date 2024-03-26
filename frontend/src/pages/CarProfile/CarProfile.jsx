import React, { useState } from "react";
import axios from "axios";

import "./carprofile.css";

function CarProfile() {
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleChangeImage = (event) => {
    setImage({ ...image, [event.target.name]: event.target.value });
  };

  const handleChangeDescription = (event) => {
    setDescription({ ...description, [event.target.name]: event.target.value });
  };

  const submitPublication = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3310/api/publish", {
        image: image.image,
        description: description.description,
      })
      .then(() => {
        setImage("");
        setDescription("");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="CarProfile_Page">
      <h3>Partagez le véhicule qui vous fait vibrer!</h3>

      <form onSubmit={submitPublication}>
        <input
          type="text"
          placeholder="Ajoutez l'URL de l'image"
          onChange={handleChangeImage}
        />

        <textarea
          type="text"
          name="description"
          id="description"
          cols="50"
          rows="15"
          placeholder="Ajoutez une petite description"
          onChange={handleChangeDescription}
        />

        <button type="submit">Publier</button>
      </form>
    </div>
  );
}

export default CarProfile;
