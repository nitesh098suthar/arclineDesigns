import { instance } from "../store";
// import {
//   allListingsSuccess
// } from "../reducers/designReducer";
import { rej, req, res } from "../reducers/globalReducer";
import { allListingsSuccess, getOneDesignSuccess } from "../reducers/designReducer";

export const getAllDesignsAction = () => async (dispatch) => {
  try {
    dispatch(req());
    const { data } = await instance.get(`/design`);
    dispatch(res(data));
    dispatch(allListingsSuccess(data));
  } catch (error) {
    dispatch(rej(error?.response?.data?.message));
  }
};


export const getOneDesignAction = (id) => async (dispatch) => {
  try {
    dispatch(req());
    const { data } = await instance.get(`/design/${id}`);
    dispatch(res(data));
    dispatch(getOneDesignSuccess(data));
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


