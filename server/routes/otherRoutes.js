import express from "express"
import { authMiddleware } from "../middlewares/authMiddleware.js"
import {
  contactUsController,
  requestCourseController,
} from "../controllers/otherController.js";

const Router = express.Router()

Router.route("/contactus").post(authMiddleware, contactUsController)
Router.route("/requestcourse").post(authMiddleware, requestCourseController)

export default Router