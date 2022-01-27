import React, { useEffect } from "react";
import ShowListing from "../contentListing/ContentListing";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncSeries, getAllShows } from "../../features/shows/showsSlice";
import LoaderAnimation from "../../assets/loader/LoaderAnimation";

const ShowsPage = () => {
  const dispatch = useDispatch();
  const series = useSelector(getAllShows);

  useEffect(() => {
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
