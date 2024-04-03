import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import UserContext from "../../services/UseContext";

function MyPublish() {
  const { userId } = useContext(UserContext);
  const [myPublish, setMyPublish] = useState([]);
  console.info("je suis l'user", userId);
  console.info("Ma Publication", myPublish);

  const getMyPublish = () => {
    axios
      .get(`http://localhost:3310/api/publish/${userId}`)
      .then((response) => {
        console.info("data:", response.data);
        setMyPublish(response.data);
        console.info("data after update:", response.data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getMyPublish();
  }, []);
  return (
    <div>
      {myPublish.map((publish) => (
        <div className="Publication_Area">
          <h3>{publish.user_nickname}</h3>
          <img src={publish.image} alt="publication" />
          <p>{publish.description}</p>
        </div>
      ))}
    </div>
  );
}

export default MyPublish;
