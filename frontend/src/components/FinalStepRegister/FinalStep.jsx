import React from "react";
import { Link } from "react-router-dom";

function FinalStep() {
  return (
    <div>
      <h1>Merci !</h1>
      <h3>Votre compte à bien été créé</h3>
      <h4>
        Vous pouvez maintenant poster les véhicules que vous souhaitez, dans le
        respect de chacun ;)
      </h4>

      <Link to="/">
        <p>Retourner à l'accueil</p>
      </Link>
      <Link to="/carprofile">
        <p>Aller sur la page de publication</p>
      </Link>
    </div>
  );
}

export default FinalStep;
