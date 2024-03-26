// import React, { useContext, useEffect, useState } from "react";
// import axios from "axios";

// import UserContext from "../../services/UseContext";

import "./monprofil.css";

function MonProfil() {
  //   const { user } = useContext(UserContext);
  //   const [userProfile, setUserProfile] = useState();

  //   const getUserById = () => {
  //     axios
  //       .get(`http://localhost:3310/api/users/${user.id}`)
  //       .then((response) => setUserProfile(response.data))
  //       .catch((error) => console.error(error));
  //   };

  //   console.info("user Profile", userProfile);

  //   useEffect(() => {
  //     getUserById();
  //   }, []);

  return (
    <div>
      {/* {userProfile.map((profile) => (
        <div>
          <h2>
            Bonjour {profile.nickname}
            <img
              src="http://localhost:3310/public/assets/images/crayon.png"
              alt=""
            />
          </h2>

          <p>
            {profile.email}
            <img
              src="http://localhost:3310/public/assets/images/crayon.png"
              alt=""
            />
          </p>
        </div>
      ))} */}
    </div>
  );
}

export default MonProfil;
