import React from "react";

import MovieCard from "../contentCard/ContentCard";
import "./ContentListing.scss";

const MovieListing = ({ content, contentType }) => {
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h1>{contentType}</h1>
        <div className="movie-container">
          {content?.Response ? (
            content?.Search.map((content, index) => (
              <MovieCard
                key={index}
                data={content}
                pathname={contentType === "Movies" ? `movie` : `series`}
              />
            ))
          ) : (
            <div className="movies-error">
              <h1>{content?.error}</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
