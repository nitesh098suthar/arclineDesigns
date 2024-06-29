import express from "express";
import {
  changePasswordController,
  registerController,
  updateProfileController,
  loginController,
  logoutController,
  getProfileController,
  updateProfilePictureController,
  forgetPasswordController,
  resetPasswordController,
  addToPlaylistController,
  removeFromPlaylistController,
  getAllUsersController,
  updateRoleController,
  deleteAnyUserController,
  deleteProfileController,
} from "../controllers/userControllers.js";
import { authMiddleware, authorizedAdmin } from "../middlewares/authMiddleware.js";
import singleUpload from "../middlewares/multer.js";

const Router = express.Router();

Router.route("/register").post(singleUpload, registerController);
Router.route("/login").post(loginController);
Router.route("/logout").get(logoutController);
Router.route("/getprofile").get(authMiddleware, getProfileController).delete(authMiddleware, deleteProfileController);
Router.route("/changepassword").put(authMiddleware, changePasswordController);
Router.route("/updateprofile").put(authMiddleware, singleUpload, updateProfileController);
Router.route("/updateprofilepicture").put(authMiddleware, singleUpload, updateProfilePictureController);
Router.route("/forgetpassword").post(forgetPasswordController);
Router.route("/resetpassword/:token").put(resetPasswordController);
//addtoplaylist means create course --admin role
Router.route("/addtoplaylist").post(authMiddleware, addToPlaylistController);
//removefromplaylist means remove a course by admin role which he has added earlier.
Router.route("/removefromplaylist").delete(authMiddleware, removeFromPlaylistController);

//admin routes

Router.route("/admin/getallusers").get(authMiddleware, authorizedAdmin, getAllUsersController)
Router.route("/admin/updaterole/:id").put(authMiddleware, authorizedAdmin, updateRoleController)
Router.route("/admin/deleteanyuser/:id").delete(authMiddleware, authorizedAdmin, deleteAnyUserController)

export default Router;
