import React from "react";
import img from "../images/Logo2.png";
import "./LoaderAnimation.scss";
const LoaderAnimation = ({ requestName }) => {
  return (
    <div className="loader-container">
      <img src={img} className="img" />
      <h3>{requestName}</h3>
    </div>
  );
};

export default LoaderAnimation;
