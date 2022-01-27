import React from "react";

const SuggestionsCard = ({ image, title }) => {
  return (
    <div className="suggestions-content-container">
      <img src={image} alt="img" />
      <span>{title}</span>
    </div>
  );
};

export default SuggestionsCard;
