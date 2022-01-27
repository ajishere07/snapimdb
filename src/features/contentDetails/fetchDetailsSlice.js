import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_Key } from "../../apis/movieAPI_KEY";
import movieAPI from "../../apis/movieAPI";
const movieText = "avengers";
export const fetchAsyncContentDetails = createAsyncThunk(
  "movies/fetchAsyncContentDetails",
  async (id) => {
    const res = await movieAPI
      .get(`?apiKey=${API_Key}&i=${id}&Plot=full`)
      .catch((e) => {
        console.log("Error:", e);
      });
    return res.data;
  }
);

const initialState = {
  contentDetails: null,
};

const fetchDetailsSlice = createSlice({
  name: "contentDetails",
  initialState,
  reducers: {
    removeContent: (state) => {
      state.contentDetails = null;
    },
  },
  extraReducers: {
    [fetchAsyncContentDetails.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncContentDetails.fulfilled]: (state, { payload }) => {
      console.log("fulfilled ");

      return { ...state, contentDetails: payload };
    },
    [fetchAsyncContentDetails.rejected]: () => {
      console.log("rejected");
    },
  },
});
export const { removeContent } = fetchDetailsSlice.actions;
export const getContentDetails = (state) => state.contentDetails.contentDetails;
export default fetchDetailsSlice.reducer;
