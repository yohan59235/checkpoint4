import React from "react";
import PropTypes from "prop-types";

import "../../pages/Register/register.css";

function FirstStep({ formTools }) {
  return (
    <div className="Register_Page">
      <h2>Enregistrez vous</h2>

      <label htmlFor="Email">Renseignez votre email</label>
      <input
        type="text"
        placeholder="Entrez votre email"
        onChange={formTools.handleChange}
        required
      />

      <label htmlFor="nickname">Définissez un pseudo d'utilisation</label>
      <input
        type="text"
        placeholder="Ajoutez votre pseudo"
        onChange={formTools.handleChange}
        required
      />

      <label htmlFor="password">Définissez votre mot-de-passe</label>
      <input
        type="text"
        name="password"
        placeholder="Votre mot-de-passe"
        onChange={formTools.handleChange}
        required
      />
      <div>
        <button
          type="submit"
          onClick={formTools.nextStep}
          className="Button_Register"
        >
          S'enregistrer
        </button>
      </div>
    </div>
  );
}

FirstStep.propTypes = {
  formTools: PropTypes.shape({
    nextStep: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
  }).isRequired,
};

export default FirstStep;
