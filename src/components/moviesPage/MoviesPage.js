import React, { useEffect } from "react";
import MovieListing from "../contentListing/ContentListing";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovies,
  getAllMovies,
} from "../../features/movies/movieSlice";
import LoaderAnimation from "../../assets/loader/LoaderAnimation";

const MoviesPage = () => {
  const dispatch = useDispatch();
  const movies = useSelector(getAllMovies);
  useEffect(() => {
    dispatch(fetchAsyncMovies());
  }, [dispatch]);
  return (
    <div>
      {movies ? (
        <MovieListing content={movies} contentType="Movies" />
      ) : (
        <LoaderAnimation />
      )}
    </div>
  );
};

export default MoviesPage;
