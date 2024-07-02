import express from "express";
import {
  getAllDesigns,
  createDesign,
  // deleteDesign,
  // updateDesign,
} from "../controllers/designControllers.js";

import { uploadArchitectImage } from "../middlewares/multer.js";
import { uploadDesignThumbnail } from "../middlewares/multer.js";
import { uploadDesignElevation } from "../middlewares/multer.js";

// import singleUpload from "../middlewares/multer.js";
// import {
//   authMiddleware,
//   authorizedAdmin,
//   authorizedSubscribers,
// } from "../middlewares/authMiddleware.js";

const Router = express.Router();

Router.route("/design")
  .post(
    uploadArchitectImage,
    uploadDesignThumbnail,
    uploadDesignElevation,
    createDesign
  )
  .get(getAllDesigns);
// Router.route("/design/:id").delete(deleteDesign).put(updateDesign);

export default Router;
