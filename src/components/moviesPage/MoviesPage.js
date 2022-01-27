import React, { useEffect } from "react";
import MovieListing from "../contentListing/ContentListing";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovies,
  getAllMovies,
} from "../../features/movies/movieSlice";

const MoviesPage = () => {
  const dispatch = useDispatch();
  const movies = useSelector(getAllMovies);
  useEffect(() => {
    // const fetchMoviesData = async () => {
    //   const res = await movieAPI
    //     .get(`?apiKey=${API_Key}&s=${movieText}&type=movie`)
    //     .catch((e) => {
    //       console.log("Error:", e);
    //     });
    //   console.log(res);
    //   dispatch(addMovie(res.data));
    // };

    // fetchMoviesData();
    dispatch(fetchAsyncMovies());
  }, [dispatch]);
  return (
    <div>
      <MovieListing content={movies} contentType="Movies" />
    </div>
  );
};

export default MoviesPage;