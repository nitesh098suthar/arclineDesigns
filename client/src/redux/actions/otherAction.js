import { instance } from "../store";
import { rej, req, res } from "../reducers/globalReducer.js";

export const contactUsAction = (name, email, message) => async (dispatch) => {
  try {
    dispatch(req());
    const { data } = await instance.post("/contactus", {
      name,
      email,
      message,
    });
    dispatch(res(data));
  } catch (error) {
    dispatch(rej(error?.response?.data?.message));
  }
};

export const requestUsAction = (name, email, course) => async (dispatch) => {
  try {
    dispatch(req());
    const { data } = await instance.post("/requestcourse", {
      name,
      email,
      course,
    });
    dispatch(res(data));
  } catch (error) {
    dispatch(rej(error?.response?.data?.message));
  }
};
