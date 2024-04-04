import React, { useState, useEffect } from "react";
import axios from "axios";

import Publication from "../../components/Publication/Publication";

import "./home.css";

function Home() {
  const [publication, setPublication] = useState([]);

  const getPublication = () => {
    axios
      .get("http://localhost:3310/api/publish")
      .then((response) => setPublication(response.data))
      .catch((error) => console.info(error));
  };

  useEffect(() => {
    getPublication();
  }, []);

  return (
    <div className="Home_Page">
      {publication.map((post) => (
        <div key={post.id}>
          <Publication post={post} />
        </div>
      ))}
    </div>
  );
}

export default Home;
