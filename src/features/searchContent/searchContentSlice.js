import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchedMovie: "",
  searchedSeries: "",
};

const searchContentSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchedInMovie: (state, { payload }) => {
      state.searchedMovie = payload;
    },
    searchedInSeries: (state, { payload }) => {
      state.searchedSeries = payload;
    },
  },
});
export const { searchedInMovie, searchedInSeries } = searchContentSlice.actions;
export const searchedTermMovies = (state) => state.search.searchedMovie;
export const searchedTermSeries = (state) => state.search.searchedSeries;
export default searchContentSlice.reducer;
