import { createSlice } from "@reduxjs/toolkit";

const designSlice = createSlice({
  name: "designSlice",
  initialState: {
    allListings: null,
    oneDesign : null
  },
  reducers: {
    allListingsSuccess: (state, action) => {
      state.allListings = action.payload.allListings;
    },
    getOneDesignSuccess: (state, action) => {
      state.oneDesign = action.payload;
    },
  },
});

export const { allListingsSuccess, getOneDesignSuccess } =
  designSlice.actions;
export default designSlice.reducer;
