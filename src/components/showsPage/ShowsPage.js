import React, { useEffect } from "react";
import ShowListing from "../contentListing/ContentListing";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncSeries,
  getAllShows,
  searchStatus,
} from "../../features/shows/showsSlice";
import LoaderAnimation from "../../assets/loader/LoaderAnimation";
import SearchBar from "../SearchBar/SearchBar";
import {
  searchedInSeries,
  searchedTermSeries,
} from "../../features/searchContent/searchContentSlice";
const ShowsPage = () => {
  const dispatch = useDispatch();
  const series = useSelector(getAllShows);
  const searchedTerm = useSelector(searchedTermSeries);
  //render the shows as per the Status of the api call

  const status = useSelector(searchStatus);
  useEffect(() => {
    dispatch(fetchAsyncSeries(searchedTerm));
  }, [dispatch, searchedTerm]);

  // your searched series will replace with
  // the default movies as soon as the page unmounts
  useEffect(() => {
    return () => {
      dispatch(searchedInSeries(""));
    };
  }, []);
  return (
    <div>
      {series ? (
        <>
          <SearchBar searchPlaceholder="Search Web Shows..." />
          {status === "fulfilled" ? (
            <ShowListing content={series} contentType="Series" />
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

export default ShowsPage;
