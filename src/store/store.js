import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/movies/movieSlice";
import showsReducer from "../features/shows/showsSlice";
import contentDetailsReducer from "../features/contentDetails/fetchDetailsSlice";
import searchContentReducer from "../features/searchContent/searchContentSlice";
export const store = configureStore({
  reducer: {
    movies: movieReducer,
    shows: showsReducer,
    contentDetails: contentDetailsReducer,
    search: searchContentReducer,
  },
});
