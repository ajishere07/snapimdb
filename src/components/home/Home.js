import React, { useEffect } from "react";
import MovieListing from "../contentListing/ContentListing";
import movieAPI from "../../apis/movieAPI";
import { API_Key } from "../../apis/movieAPI_KEY";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies } from "../../features/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  const movieText = "Harry";
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
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
