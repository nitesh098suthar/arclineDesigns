import {
  loginFail,
  loginSuccess,
  loadUserFail,
  logOutSuccess,
  logOutFail,
  loadUserSuccess,
  registerSuccess,
  registerFail,
  loginRequest,
  loadUserRequest,
  logOutRequest,
  registerRequest,
} from "../reducers/userReducers";
import { instance } from "../store";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(loginRequest());
    const { data } = await instance.post("/login", { email, password });
    console.log("login data" , data)
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginFail(error?.response?.data?.message));
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    console.log("loaduser called")
    dispatch(loadUserRequest());
    const { data } = await instance.get("/getprofile");
    dispatch(loadUserSuccess(data));
  } catch (error) {
    dispatch(loadUserFail(error?.response?.data?.message));
  }
};

export const logOut = () => async (dispatch) => {
  try {
    dispatch(logOutRequest());
    const { data } = await instance.get("/logout");
    dispatch(logOutSuccess(data));
  } catch (error) {
    dispatch(logOutFail(error?.response?.data?.message));
  }
};

export const register = (myForm) => async (dispatch) => {
  try {
    dispatch(registerRequest());
    const { data } = await instance.post("/register", myForm, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log("register payload:", data);
    dispatch(registerSuccess(data));
  } catch (error) {
    console.error("Registration error:", error);
    dispatch(registerFail(error?.response?.data?.message));
  }
};