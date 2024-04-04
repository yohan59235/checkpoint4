/* eslint-disable react/forbid-prop-types */
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import UserContext from "../../services/UseContext";

import "./mypublish.css";

function MyPublish() {
  const { userId } = useContext(UserContext);
  const [myPublish, setMyPublish] = useState([]);

  const getMyPublish = () => {
    axios
      .get(`http://localhost:3310/api/publish/${userId}`)
      .then((response) => {
        setMyPublish(response.data);
      })
      .catch((error) => console.error(error));
  };

  const getDeletePublication = (publicationId) => {
    axios
      .delete(`http://localhost:3310/api/publish/${publicationId}`)
      .then((response) => setMyPublish(response))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getMyPublish();
  }, []);

  return (
    <div className="MyPublish_Component">
      {myPublish.map((publish) => (
        <div className="Publication_Area">
          <img src={publish.image} alt="publication" />
          <p>{publish.description}</p>
          <div className="Button_DeleteOrModifs">
            <button
              className="Button_Delete"
              type="button"
              onClick={getDeletePublication}
            >
              supprimer
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyPublish;
