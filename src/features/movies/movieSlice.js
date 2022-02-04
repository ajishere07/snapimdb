import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_Key } from "../../apis/movieAPI_KEY";
import movieAPI from "../../apis/movieAPI";

const text = "harry";
export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (page_number) => {
    const res = await movieAPI
      .get(`?apiKey=${API_Key}&s=${text}&page=${page_number}&type=movie`)
      .catch((e) => {
        console.log("Error:", e);
      });
    return res.data;
  }
);

export const searchAsyncMovies = createAsyncThunk(
  "movies/searchAsyncMovies",
  async (a) => {
    console.log(a);
    console.log(typeof a.page);
    const res = await movieAPI
      .get(`?apiKey=${API_Key}&s=${a.searchTerm}&page=${a.page}&type=movie`)
      .catch((e) => {
        console.log("Error:", e);
      });
    return res.data;
  }
);

const initialState = {
  fetchStatus: "",
  movies: null,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,

  extraReducers: {
    [fetchAsyncMovies.pending]: (state) => {
      state.fetchStatus = "pending";
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      state.fetchStatus = "fulfilled";
      state.movies = payload;
    },
    [fetchAsyncMovies.rejected]: (state) => {
      state.fetchStatus = "rejected";
    },
    [searchAsyncMovies.pending]: (state) => {
      state.fetchStatus = "pending";
    },
    [searchAsyncMovies.fulfilled]: (state, { payload }) => {
      state.fetchStatus = "fulfilled";
      state.movies = payload;
    },
    [searchAsyncMovies.rejected]: (state) => {
      state.fetchStatus = "rejected";
    },
  },
});

export const searchStatus = (state) => state.movies.fetchStatus;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
