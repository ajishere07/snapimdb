import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { getAllMovies } from "../../features/movies/movieSlice";
import {
  nextBtn,
  pageNumber,
  prevBtn,
} from "../../features/pagination/pagesSlice";
import { getAllShows } from "../../features/shows/showsSlice";

import "./PaginationElement.scss";
const PaginationElement = () => {
  const location = useLocation();
  const movieContent = useSelector(getAllMovies);
  const seriesContent = useSelector(getAllShows);
  const page_number = useSelector(pageNumber);
  const [last_page_number, setLast_page_number] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.pathname === "/movies") {
      let totalResults = movieContent?.totalResults;
      let total_pages_to_render = totalResults / 9;
      const lastPage = Math.ceil(total_pages_to_render);
      setLast_page_number(lastPage);
    }
    if (location.pathname === "/webshows") {
      let totalResults = seriesContent?.totalResults;
      let total_pages_to_render = totalResults / 9;
      const lastPage = Math.ceil(total_pages_to_render);
      setLast_page_number(lastPage);
    }
  }, []);
  return (
    <div className="optionsContainer">
      <span
        className="previousBtn btn"
        onClick={() => dispatch(prevBtn())}
        style={{ visibility: page_number === 1 ? "hidden" : "visible" }}
      >
        Prev
      </span>
      <span className="pageNumber">{page_number}</span>
      <span
        className="previousBtn btn"
        onClick={() => dispatch(nextBtn())}
        style={{
          visibility: page_number === last_page_number ? "hidden" : "visible",
        }}
      >
        Next
      </span>
    </div>
  );
};

export default PaginationElement;
