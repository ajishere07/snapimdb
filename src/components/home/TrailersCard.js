import React from "react";

const TrailersCard = ({ image, title }) => {
  return (
    <div className="content-container">
      <img src={image} alt="img" />
      <span>{title}</span>
    </div>
  );
};

export default TrailersCard;
