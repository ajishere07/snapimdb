import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";
import MovieCard from "../contentCard/ContentCard";
import "./ContentListing.scss";
const MovieListing = ({ content, contentType }) => {
  console.log(content);
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h1>{contentType}</h1>
        <div className="movie-container">
          {content?.Response ? (
            content?.Search.map((content, index) => (
              <MovieCard key={index} data={content} />
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
