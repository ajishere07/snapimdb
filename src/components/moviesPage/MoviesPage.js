import React, { useEffect } from "react";
import MovieListing from "../contentListing/ContentListing";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovies,
  getAllMovies,
  searchStatus,
} from "../../features/movies/movieSlice";
import LoaderAnimation from "../../assets/loader/LoaderAnimation";
import SearchBar from "../SearchBar/SearchBar";
import {
  searchedInMovie,
  searchedTermMovies,
} from "../../features/searchContent/searchContentSlice";
const MoviesPage = () => {
  const dispatch = useDispatch();
  const movies = useSelector(getAllMovies);
  const searchTerm = useSelector(searchedTermMovies);
  const status = useSelector(searchStatus);
  useEffect(() => {
    dispatch(fetchAsyncMovies(searchTerm));
  }, [dispatch, searchTerm]);

  // your searched movies will replace with
  // the default movies as soon as the page unmounts
  useEffect(() => {
    return () => {
      dispatch(searchedInMovie(""));
    };
  }, [dispatch]);
  return (
    <div>
      {movies ? (
        <>
          <SearchBar searchPlaceholder="Search Movies..." />
          {status === "fulfilled" ? (
            <MovieListing content={movies} contentType="Movies" />
          ) : status === "pending" ? (
            <LoaderAnimation requestName="Searching..." />
          ) : (
            <h1>Something went wrong</h1>
          )}
        </>
      ) : (
        <LoaderAnimation requestName="Loading..." />
      )}
    </div>
  );
};

export default MoviesPage;
