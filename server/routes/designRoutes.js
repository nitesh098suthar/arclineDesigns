import express from "express";
import {
  getAllDesigns,
  createDesign,
  updateDesign,
  deleteDesign,
} from "../controllers/designControllers.js";

import uploadDesignFiles from "../middlewares/multer.js";

const Router = express.Router();

Router.route("/design")
  .post(uploadDesignFiles, createDesign)
  .get(getAllDesigns);
Router.route("/design/:id").put(uploadDesignFiles,updateDesign).delete(deleteDesign);

export default Router;
