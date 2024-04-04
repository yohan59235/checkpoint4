import React from "react";
import PropTypes from "prop-types";

import "./publication.css";

function Publication({ post }) {
  return (
    <div className="Publication_Component">
      <div className="Publication_Area">
        <h3>{post.user_nickname}</h3>
        <img src={post.image} alt="publication" />
        <p>{post.description}</p>
      </div>
    </div>
  );
}

Publication.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    user_nickname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Publication;
