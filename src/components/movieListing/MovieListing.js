import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";
import MovieCard from "../movieCard/MovieCard";
import "./MovieListing.scss";
const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  console.log(movies);
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h1>Movies</h1>
        <div className="movie-container">
          {movies.Response ? (
            movies.Search.map((movie, index) => (
              <MovieCard key={index} data={movie} />
            ))
          ) : (
            <div className="movies-error">
              <h1>{movies.error}</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
