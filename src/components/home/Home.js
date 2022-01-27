import React, { useEffect } from "react";
import MovieListing from "../contentListing/ContentListing";
import movieAPI from "../../apis/movieAPI";
import { API_Key } from "../../apis/movieAPI_KEY";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies } from "../../features/movies/movieSlice";

const Home = () => {
  return (
    <div>
      <h1 style={{ color: "red" }}>home</h1>
    </div>
  );
};

export default Home;
