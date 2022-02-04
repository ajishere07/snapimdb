import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_Key } from "../../apis/movieAPI_KEY";
import movieAPI from "../../apis/movieAPI";

export const fetchAsyncSeries = createAsyncThunk(
  "movies/fetchAsyncSeries",
  async (a) => {
    console.log(a);
    const res = await movieAPI
      .get(
        `?apiKey=${API_Key}&s=${a.searchedTerm || `friends`}&page=${
          a.page
        }&type=series`
      )
      .catch((e) => {
        console.log("Error:", e);
      });
    return res.data;
  }
);

const initialState = {
  series: null,
  status: "",
};

const showsSlice = createSlice({
  name: "shows",
  initialState,

  extraReducers: {
    [fetchAsyncSeries.pending]: (state) => {
      state.status = "pending";
    },
    [fetchAsyncSeries.fulfilled]: (state, { payload }) => {
      state.status = "fulfilled";
      state.series = payload;
    },
    [fetchAsyncSeries.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});

export const getAllShows = (state) => state.shows.series;
export const searchStatus = (state) => state.shows.status;
export default showsSlice.reducer;
