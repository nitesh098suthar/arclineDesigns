import { createSlice } from "@reduxjs/toolkit";

const designSlice = createSlice({
  name: "designSlice",
  initialState: {
    allListings: null,
  },
  reducers: {
    allListingsSuccess: (state, action) => {
      state.allListings = action.payload.allListings;
    },
  },
});

export const { allListingsSuccess } =
  designSlice.actions;
export default designSlice.reducer;
