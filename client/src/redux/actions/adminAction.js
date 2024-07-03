import {
  getAllUsersSuccess,
  getLecturesOfACourseSuccess,
} from "../reducers/adminReducers";
import { instance } from "../store";
import { rej, req, res } from "../reducers/globalReducer";

export const createCourseAction = (formdata) => async (dispatch) => {
  try {
    dispatch(req());
    const { data } = await instance.post("/createcourse", formdata, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch(res(data));
  } catch (error) {
    dispatch(rej(error?.response?.data?.message));
  }
};

export const deleteOneCourseAction = (id) => async (dispatch) => {
  try {
    dispatch(req());
    const { data } = await instance.delete(`/course/${id}`);
    dispatch(res(data));
  } catch (error) {
    dispatch(rej(error?.response?.data?.message));
  }
};

export const getLecturesOfACourseAction = (id) => async (dispatch) => {
  try {
    dispatch(req());
    const { data } = await instance.get(`/course/${id}`);
    dispatch(getLecturesOfACourseSuccess(data));
    dispatch(res());
  } catch (error) {
    dispatch(rej(error?.response?.data?.message));
  }
};

export const addLectureInACourseAction = (id, formdata) => async (dispatch) => {
  try {
    dispatch(req());
    const { data } = await instance.post(`/course/${id}`, formdata, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch(res(data));
  } catch (error) {
    dispatch(rej(error?.response?.data?.message));
  }
};

export const deleteLectureFromACourseAction =
  (id, lectureId) => async (dispatch) => {
    try {
      dispatch(req());
      const { data } = await instance.delete(
        `/deletelecture?courseId=${id}&lectureId=${lectureId}`
      );
      dispatch(res(data));
    } catch (error) {
      dispatch(rej(error?.response?.data?.message));
    }
  };

export const getAllUsersAction = () => async (dispatch) => {
  try {
    dispatch(req());
    const { data } = await instance.get("/admin/getallusers");
    dispatch(getAllUsersSuccess(data));
    dispatch(res());
  } catch (error) {
    dispatch(rej(error?.response?.data?.message));
  }
};

export const changeUserRoleAction = (id) => async (dispatch) => {
  try {
    dispatch(req());
    const { data } = await instance.put(`/admin/updaterole/${id}`);
    dispatch(res(data));
  } catch (error) {
    dispatch(rej(error?.response?.data?.message));
  }
};

export const deleteUserAction = (id) => async (dispatch) => {
  try {
    dispatch(req());
    const { data } = await instance.delete(`/admin/deleteanyuser/${id}`);
    dispatch(res(data));
  } catch (error) {
    dispatch(rej(error?.response?.data?.message));
  }
};
