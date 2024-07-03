import express from "express";
import {
  changePasswordController,
  registerController,
  updateProfileController,
  loginController,
  logoutController,
  getProfileController,
  forgetPasswordController,
  resetPasswordController,
  getAllUsersController,
  deleteProfileController,
} from "../controllers/userControllers.js";
import {
  authMiddleware,
  authorizedAdmin,
} from "../middlewares/authMiddleware.js";
import uploadDesignFiles from "../middlewares/multer.js";

const Router = express.Router();

Router.route("/register").post(uploadDesignFiles, registerController);
Router.route("/login").post(loginController);
Router.route("/logout").get(logoutController);
Router.route("/getprofile")
  .get(authMiddleware, getProfileController)
  .delete(authMiddleware, deleteProfileController);
Router.route("/changepassword").put(authMiddleware, changePasswordController);
Router.route("/updateprofile").put(
  authMiddleware,
  uploadDesignFiles,
  updateProfileController
);
Router.route("/forgetpassword").post(forgetPasswordController);
Router.route("/resetpassword/:token").put(resetPasswordController);

//admin routes

Router.route("/admin/getallusers").get(
  authMiddleware,
  authorizedAdmin,
  getAllUsersController
);


export default Router;
