import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducers.js";
import designReducer from "./reducers/designReducer.js";
import adminReducer from "./reducers/adminReducers.js";
import globalReducer from "./reducers/globalReducer.js";
import axios from "axios";

export const server = "http://localhost:9000/api/v1";

export const instance = axios.create({
  baseURL: server,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

const store = configureStore({
  reducer: {
    userReducer,
    designReducer,
    adminReducer,
    globalReducer
  },
});

export default store;


// npm install @reduxjs/toolkit react-redux