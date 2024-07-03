import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    isAuthenticated: false,
    user: null,
    loading: null,
    error: null,
    message: null,
  },
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.newUser;
      state.loading = false;
    },
    loginFail: (state, action) => {
      state.error = action.payload;
      state.isAuthenticated = false;
      state.loading = false;
    },
    loadUserRequest: (state) => {
      state.loading = true;
    },
    loadUserSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.User1;
    },
    loadUserFail: (state, action) => {
      state.isAuthenticated = false;
      state.loading = false;
      state.error = action.payload;
    },
    logOutRequest: (state) => {
      state.loading = true;
    },
    logOutSuccess: (state, action) => {
      state.message = action.payload.message;
      state.isAuthenticated = false;
      state.loading = false;
    },
    logOutFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = true;
    },
    registerRequest: (state) => {
      state.loading = true;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
      state.isAuthenticated = true;
    },
    registerFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    },
    clearUserError: (state) => {
      state.error = null;
    },
    clearUserMessage: (state) => {
      state.message = null;
    },
  },
});

export const {
  clearUserError,
  clearUserMessage,
  loginFail,
  loginSuccess,
  logOutFail,
  logOutSuccess,
  loadUserFail,
  registerSuccess,
  registerFail,
  loadUserSuccess,
  loadUserRequest,
  logOutRequest,
  loginRequest,
  registerRequest,
} = userSlice.actions;
export default userSlice.reducer;
