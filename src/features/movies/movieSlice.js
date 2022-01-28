import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_Key } from "../../apis/movieAPI_KEY";
import movieAPI from "../../apis/movieAPI";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (requestString) => {
    const res = await movieAPI
      .get(`?apiKey=${API_Key}&s=${requestString || `avengers`}&type=movie`)
      .catch((e) => {
        console.log("Error:", e);
      });
    return res.data;
  }
);

const initialState = {
  movies: null,
  status: "",
};

const movieSlice = createSlice({
  name: "movies",
  initialState,

  extraReducers: {
    [fetchAsyncMovies.pending]: (state) => {
      state.status = "pending";
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      state.status = "pending";

      state.movies = payload;
    },
    [fetchAsyncMovies.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});

export const searchStatus = (state) => state.shows.status;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
