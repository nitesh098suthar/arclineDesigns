import express from "express";
import {
  getAllDesigns,
  createDesign,
  updateDesign,
  deleteDesign,
} from "../controllers/designControllers.js";

import uploadDesignFiles from "../middlewares/multer.js";
import upload from "../middlewares/uploadMiddleware.js";

const Router = express.Router();
const uploadFields = upload.fields([
  { name: "houseImage" },
  { name: "architectImage" },
  { name: "allImages" },
]);
Router.route("/design").post(uploadFields, createDesign).get(getAllDesigns);
Router.route("/design/:id")
  .put(uploadDesignFiles, updateDesign)
  .delete(deleteDesign);

export default Router;
