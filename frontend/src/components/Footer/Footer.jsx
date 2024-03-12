import React from "react";
import { Link } from "react-router-dom";

import "./footer.css";

function Footer() {
  return (
    <div className="Footer_Component">
      <img
        src="http://localhost:3310/public/assets/images/Logo_voiture.png"
        alt="Logo du site"
      />

      <div className="First_List_Link">
        <Link to="/contact">
          <p className="Contact">Contact</p>
        </Link>
      </div>

      <div className="Second_List_Link">
        <Link to="faq">
          <p className="FAQ">FAQ</p>
        </Link>
        <Link to="politique">
          <p className="Politique">Politique de confidentialité</p>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
