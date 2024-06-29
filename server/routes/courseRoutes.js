import express from "express";
import {
  addLecture,
  createCourse,
  deleteCourse,
  deleteLecture,
  getAllCourses,
  getCourseLectures,
} from "../controllers/courseControllers.js";
import singleUpload from "../middlewares/multer.js";
import { authMiddleware, authorizedAdmin, authorizedSubscribers } from "../middlewares/authMiddleware.js";

const Router = express.Router();

Router.route("/courses").get(getAllCourses);
Router.route("/createcourse").post(authMiddleware, authorizedAdmin, singleUpload, createCourse);
Router.route("/course/:id")
  .get(authMiddleware, authorizedSubscribers, getCourseLectures)
  .post(authMiddleware, authorizedAdmin, singleUpload, addLecture)
  .delete(authMiddleware, authorizedAdmin, deleteCourse);
Router.route("/deletelecture").delete(authMiddleware, authorizedAdmin, deleteLecture);
  
export default Router;
