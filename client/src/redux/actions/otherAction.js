import { instance } from "../store";
import { rej, req, res } from "../reducers/globalReducer.js";

export const contactUsAction = (name, phone, message) => async (dispatch) => {
  try {
    dispatch(req());
    const { data } = await instance.post("/contactus", {
      name,
      phone,
      message,
    });
    dispatch(res(data));
  } catch (error) {
    dispatch(rej(error?.response?.data?.message));
  }
};
