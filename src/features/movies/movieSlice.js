import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_Key } from "../../apis/movieAPI_KEY";
import movieAPI from "../../apis/movieAPI";
const movieText = "avengers";
export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const res = await movieAPI
      .get(`?apiKey=${API_Key}&s=${movieText}&type=movie`)
      .catch((e) => {
        console.log("Error:", e);
      });
    return res.data;
  }
);

const initialState = {
  movies: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,

  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("fulfilled ");

      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("rejected");
    },
  },
});

export const { addMovie } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
