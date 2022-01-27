import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_Key } from "../../apis/movieAPI_KEY";
import movieAPI from "../../apis/movieAPI";
const demoSeriesText = "friends";
export const fetchAsyncSeries = createAsyncThunk(
  "movies/fetchAsyncSeries",
  async () => {
    const res = await movieAPI
      .get(`?apiKey=${API_Key}&s=${demoSeriesText}&type=series`)
      .catch((e) => {
        console.log("Error:", e);
      });
    return res.data;
  }
);

const initialState = {
  series: {},
};

const showsSlice = createSlice({
  name: "shows",
  initialState,

  extraReducers: {
    [fetchAsyncSeries.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncSeries.fulfilled]: (state, { payload }) => {
      console.log("fulfilled ");

      return { ...state, series: payload };
    },
    [fetchAsyncSeries.rejected]: () => {
      console.log("rejected");
    },
  },
});

export const getAllShows = (state) => state.shows.series;
export default showsSlice.reducer;
