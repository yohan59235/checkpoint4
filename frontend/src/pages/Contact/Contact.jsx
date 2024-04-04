import React from "react";

import "./contact.css";

function Contact() {
  return (
    <div className="Contact_Page">
      <h3>Vous souhaitez me contacter ?</h3>
      <div className="Github_Section">
        <img
          src="http://localhost:3310/public/assets/images/github.png"
          alt=""
        />
        <a href="https://github.com/yohan59235">Lien vers mon GitHub</a>
      </div>

      <div className="Linkedin_Section">
        <img
          src="http://localhost:3310/public/assets/images/linkedin.png"
          alt=""
        />
        <a href="https://www.linkedin.com/in/yohan-collinse-5888b22a7/">
          Lien vers mon LinkedIn
        </a>
      </div>

      <div className="Email_Section">
        <img
          src="http://localhost:3310/public/assets/images/email.png"
          alt=""
        />
        <p>yohan.collinse@gmail.com</p>
      </div>
    </div>
  );
}

export default Contact;
