import React from "react";
import "./CarouselItem.scss";
const CarouselItem = ({ image, title }) => {
  return (
    <div>
      <img alt="img" src={image} className="carousel-image" />
      <p
        className="legend"
        style={{
          fontSize: "20px",
          backgroundColor: "rgba(0,0,0,0.6)",
        }}
      >
        {title}
      </p>
    </div>
  );
};

export default CarouselItem;
