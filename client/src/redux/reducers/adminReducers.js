import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "adminSlice",
  initialState: {
    courses: null,
    lectures: [],
    allUsers: [],
  },
  reducers: {
    getLecturesOfACourseSuccess: (state, action) => {
      state.lectures = action.payload.lectures;
    },
    getAllUsersSuccess: (state, action) => {
      state.allUsers = action.payload.allUsers;
    },
  },
});

export const { getLecturesOfACourseSuccess, getAllUsersSuccess } =
  adminSlice.actions;
export default adminSlice.reducer;
