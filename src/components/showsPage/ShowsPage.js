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
import { pageNumber, resetPage } from "../../features/pagination/pagesSlice";

const ShowsPage = () => {
  const dispatch = useDispatch();
  const series = useSelector(getAllShows);
  const searchedTerm = useSelector(searchedTermSeries);
  //render the shows as per the Status of the api call
  const page = useSelector(pageNumber);
  console.log(page);
  const status = useSelector(searchStatus);
  useEffect(() => {
    let a = { searchedTerm, page };
    dispatch(fetchAsyncSeries(a));
  }, [dispatch, searchedTerm, page]);

  // your searched series will replace with
  // the default movies as soon as the page unmounts
  useEffect(() => {
    return () => {
      dispatch(searchedInSeries(""));
      dispatch(resetPage());
    };
  }, [dispatch]);
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
