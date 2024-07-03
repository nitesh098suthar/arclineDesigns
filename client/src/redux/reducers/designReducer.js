import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "courseSlice",
  initialState: {
    courses: null,
    lectures: [],
  },
  reducers: {
    //removed: allCoursesRequest,allCoursesFail, getCourseLecturesRequest,getCourseLecturesFail,addToPlaylistRequest,addToPlaylistSuccess,addToPlaylistFail
    allCoursesSuccess: (state, action) => {
      state.courses = action.payload.allCourses;
    },
    getCourseLecturesSuccess: (state, action) => {
      state.lectures = action.payload.lectures;
    },
  },
});

export const { allCoursesSuccess, getCourseLecturesSuccess } =
  courseSlice.actions;
export default courseSlice.reducer;
