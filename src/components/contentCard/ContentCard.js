import React from "react";
import "./ContentCard.scss";
import { Link } from "react-router-dom";
const ContentCard = ({ data, pathname }) => {
  return (
    <div className="card-item">
      <Link to={`/${pathname}/${data.imdbID}`}>
        <div className="card-inner">
          <div className="card-top">
            <img src={data.Poster} alt={data.Title}></img>
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{data.Title}</h4>
              <p>{data.Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ContentCard;
