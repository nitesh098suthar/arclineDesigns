import { createSlice } from "@reduxjs/toolkit";

const designSlice = createSlice({
  name: "designSlice",
  initialState: {
    allListings: null,
    oneDesignData : null
  },
  reducers: {
    allListingsSuccess: (state, action) => {
      state.allListings = action.payload.allListings;
    },
    getOneDesignSuccess: (state, action) => {
      state.oneDesignData = action.payload;
    },
  },
});

export const { allListingsSuccess, getOneDesignSuccess } =
  designSlice.actions;
export default designSlice.reducer;
