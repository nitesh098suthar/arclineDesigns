import express from "express";
import {
  getAllDesigns,
  createDesign,
  updateDesign,
  deleteDesign,
  getOneDesign
} from "../controllers/designControllers.js";

import upload from "../middlewares/uploadMiddleware.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const Router = express.Router();
const uploadFields = upload.fields([
  { name: "houseImage" },
  { name: "architectImage" },
  { name: "allImages" },
]);
Router.route("/design").post( authMiddleware, uploadFields, createDesign).get(getAllDesigns);
Router.route("/design/:id")
  .put(authMiddleware, uploadFields, updateDesign)
  .delete(authMiddleware, deleteDesign)
  .get(getOneDesign);

export default Router;
