import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/movies/movieSlice";
import showsReducer from "../features/shows/showsSlice";
export const store = configureStore({
  reducer: {
    movies: movieReducer,
    shows: showsReducer,
  },
});
