import { createSlice } from "@reduxjs/toolkit";

const designSlice = createSlice({
  name: "designSlice",
  initialState: {
    allListings: null,
    lectures: [],
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
