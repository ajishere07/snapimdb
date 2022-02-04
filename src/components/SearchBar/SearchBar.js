import React, { useState, useRef } from "react";
import { BiSearch } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { resetPage } from "../../features/pagination/pagesSlice";
import {
  searchedInMovie,
  searchedInSeries,
} from "../../features/searchContent/searchContentSlice";
import "./SearchBar.scss";
const SearchBar = ({ searchPlaceholder }) => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const [inputContent, setInputContent] = useState("");

  const searchContent = () => {
    dispatch(resetPage());
    if (inputRef.current.placeholder === "Search Movies...")
      dispatch(searchedInMovie(inputContent));
    if (inputRef.current.placeholder === "Search Web Shows...")
      dispatch(searchedInSeries(inputContent));
  };
  return (
    <div className="search-bar-container">
      <input
        ref={inputRef}
        className="input-container"
        type="text"
        placeholder={searchPlaceholder}
        value={inputContent}
        onChange={(e) => setInputContent(e.target.value)}
      />
      <div className="search-icon" onClick={() => searchContent()}>
        <BiSearch className="icon" />
      </div>
    </div>
  );
};

export default SearchBar;
