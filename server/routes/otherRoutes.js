import express from "express"
import {
  contactUsController,
} from "../controllers/otherController.js";

const Router = express.Router()

Router.route("/contactus").post(contactUsController)

export default Router