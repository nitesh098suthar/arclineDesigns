import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducers.js";
import designReducer from "./reducers/designReducer.js";
import globalReducer from "./reducers/globalReducer.js";
import axios from "axios";

export const server = "http://localhost:9000";
// export const server = "https://arclinedesigns.onrender.com";

export const instance = axios.create({
  baseURL: `${server}/api/v1`,
  withCredentials: true,
});

const store = configureStore({
  reducer: {
    userReducer,
    designReducer,
    globalReducer,
  },
});

export default store;

// npm install @reduxjs/toolkit react-redux
