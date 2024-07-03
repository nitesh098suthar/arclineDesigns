import { createSlice } from "@reduxjs/toolkit";

const toastSlice = createSlice({
  name: "toastSlice",
  initialState: {
    error: null,
    message: null,
    loading: null,
  },
  reducers: {
    req: (state) => {
      state.loading = true;
    },
    res: (state, action) => {
      if (action !== null) state.message = action.payload.message;
      state.loading = false;
    },
    rej: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  },
});
export const { clearError, clearMessage, req, res, rej } = toastSlice.actions;
export default toastSlice.reducer;
