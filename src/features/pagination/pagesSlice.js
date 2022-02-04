import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page_number: 1,
};

const pagesSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    nextBtn: (state) => {
      state.page_number = state.page_number + 1;
    },
    prevBtn: (state) => {
      state.page_number = state.page_number - 1;
    },
    resetPage: (state) => {
      state.page_number = 1;
    },
  },
});
export const { nextBtn, prevBtn, resetPage } = pagesSlice.actions;
export const pageNumber = (state) => state.page.page_number;

export default pagesSlice.reducer;
