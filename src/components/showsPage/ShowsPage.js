import React, { useEffect } from "react";
import ShowListing from "../contentListing/ContentListing";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncSeries, getAllShows } from "../../features/shows/showsSlice";
import LoaderAnimation from "../../assets/loader/LoaderAnimation";

const ShowsPage = () => {
  const dispatch = useDispatch();
  const series = useSelector(getAllShows);

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
    dispatch(fetchAsyncSeries());
  }, [dispatch]);
  return (
    <div>
      {series ? (
        <ShowListing content={series} contentType="Series" />
      ) : (
        <LoaderAnimation />
      )}
    </div>
  );
};

export default ShowsPage;
