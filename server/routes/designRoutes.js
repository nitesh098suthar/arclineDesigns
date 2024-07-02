import express from "express";
import {
  getAllDesigns,
  createDesign,
  updateDesign,
  deleteDesign,
} from "../controllers/designControllers.js";

import uploadDesignFiles from "../middlewares/multer.js";

// import singleUpload from "../middlewares/multer.js";
// import {
//   authMiddleware,
//   authorizedAdmin,
//   authorizedSubscribers,
// } from "../middlewares/authMiddleware.js";

const Router = express.Router();

Router.route("/design")
  .post(uploadDesignFiles, createDesign)
  .get(getAllDesigns);
Router.route("/design/:id").put(updateDesign).delete(deleteDesign);

export default Router;
