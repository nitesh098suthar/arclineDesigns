import { instance } from "../store";
// import {
//   allListingsSuccess
// } from "../reducers/designReducer";
import { rej, req, res } from "../reducers/globalReducer";

export const getAllDesignsAction = () => async (dispatch) => {
  try {
    dispatch(req());
    const { data } = await instance.get(`/design`);
    console.log("here data is payload", data)
    dispatch(res(data));
  } catch (error) {
    dispatch(rej(error?.response?.data?.message));
  }
};


export const createDesignAction = (myForm) => async (dispatch) => {
  try {
    dispatch(req());

    const { data } = await instance.post(`/design`, myForm, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("here data is payload of created data", data)
    dispatch(res(data));
  } catch (error) {
    dispatch(rej(error?.response?.data?.message));
  }
};


