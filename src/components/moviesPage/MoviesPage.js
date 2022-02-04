import React, { useEffect } from "react";
import MovieListing from "../contentListing/ContentListing";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovies,
  getAllMovies,
  searchAsyncMovies,
  searchStatus,
} from "../../features/movies/movieSlice";
import LoaderAnimation from "../../assets/loader/LoaderAnimation";
import SearchBar from "../SearchBar/SearchBar";
import {
  searchedInMovie,
  searchedTermMovies,
} from "../../features/searchContent/searchContentSlice";
import { pageNumber, resetPage } from "../../features/pagination/pagesSlice";
const MoviesPage = () => {
  const dispatch = useDispatch();
  const movies = useSelector(getAllMovies);
  const searchTerm = useSelector(searchedTermMovies);
  const page = useSelector(pageNumber);
  console.log(page);

  const status = useSelector(searchStatus);

  useEffect(() => {
    if (page !== 0 && searchTerm === "") dispatch(fetchAsyncMovies(page));
  }, [dispatch, page]);

  useEffect(() => {
    if (searchTerm !== "" && page !== 0) {
      let a = { searchTerm, page };
      dispatch(searchAsyncMovies(a));
    }
  }, [dispatch, searchTerm, page]);

  // your searched movies will replace with
  // the default movies as soon as the page unmounts
  useEffect(() => {
    return () => {
      dispatch(searchedInMovie(""));
      dispatch(resetPage());
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
