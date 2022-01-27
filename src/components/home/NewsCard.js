import React from "react";

const NewsCard = ({ image, headline, metadata }) => {
  return (
    <div className="news-content-container">
      <img src={image} alt="img" />
      <div className="news-text">
        <h3>{headline}</h3>
        <span>{metadata}</span>
      </div>
    </div>
  );
};

export default NewsCard;
