import React from "react";

import MovieCard from "../contentCard/ContentCard";
import "./ContentListing.scss";

const MovieListing = ({ content, contentType }) => {
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        {content.Response !== "False" && (
          <h1 className="header">{contentType}</h1>
        )}
        <div className="movie-container">
          {content.Response !== "False" ? (
            content?.Search.map((content, index) => (
              <MovieCard
                key={index}
                data={content}
                pathname={contentType === "Movies" ? `movie` : `series`}
              />
            ))
          ) : (
            <div className="movies-error">
              <h1>{content?.Error}</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
