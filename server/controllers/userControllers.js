import { User } from "../Model/User.js";
import sendToken from "../utils/sendToken.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import catchAsyncError from "../middlewares/catchAsyncError.js";
import { mailSender } from "../utils/mailSender.js";
import crypto from "crypto";
import cloudinary from "cloudinary";
import getDataUri from "../utils/dataUri.js";

export const registerController = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return next(new ErrorHandler("Fill all fields", 500));

  const isExist = await User.findOne({ email });
  if (isExist) return next(new ErrorHandler("User already exist", 500));

  const avatarFile = req.files["file"][0];

  if (!avatarFile) {
    return next(new ErrorHandler("Avatar is mandatory", 401));
  }
  const avatarFileUri = getDataUri(avatarFile).content;

  const avatarFileUpload = await cloudinary.v2.uploader.upload(avatarFileUri);

  const newUser = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: avatarFileUpload.public_id,
      url: avatarFileUpload.secure_url,
    },
  });

  return sendToken(newUser, "User created successfully", 201, res);
});

export const loginController = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  const doesExist = await User.findOne({ email }).select("+password");

  if (!doesExist) return next(new ErrorHandler("First reg then login", 500));

  const isLegit = await doesExist.comparePassword(password);

  if (!isLegit) return next(new ErrorHandler("wrong password", 500));

  return sendToken(doesExist, "Login Successfully", 200, res);
});

export const logoutController = catchAsyncError(async (req, res, next) => {
  res
    .status(200)
    .cookie("token", null, {
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "Logout Successfully",
    });
});

export const getProfileController = catchAsyncError(async (req, res, next) => {
  const userId = req.id;
  if (!userId) return next(new ErrorHandler("Unauthorized user", 401));

  const User1 = await User.findById(userId);
  if (!User1) return next(new ErrorHandler("User not found", 401));

  return res.status(201).json({
    success: true,
    message: "User get successfully",
    User1,
  });
});

export const changePasswordController = catchAsyncError(
  async (req, res, next) => {
    const userId = req.id;
    const { oldPassword, newPassword } = req.body;
    if (!newPassword || !oldPassword)
      return next(new ErrorHandler("Fill both fields", 500));
    if (!userId) return next(new ErrorHandler("Unauthorized user", 401));

    const User1 = await User.findById(userId).select("+password");
    if (!User1) return next(new ErrorHandler("User not found", 401));

    const isMatch = await User1.comparePassword(oldPassword);
    if (!isMatch) return next(new ErrorHandler("oldPassword doesn't match"));

    User1.password = newPassword;
    User1.save();

    return res.status(201).json({
      success: true,
      message: "Password changed successfully",
      User1,
    });
  }
);

export const updateProfileController = catchAsyncError(
  async (req, res, next) => {
    const userId = req.id;
    const { name, email } = req.body;

    if (!name || !email) return next(new ErrorHandler("Fill both fields", 500));
    if (!userId) return next(new ErrorHandler("Unauthorized user", 401));

    const User1 = await User.findById(userId);
    if (!User1) return next(new ErrorHandler("User not found", 401));

    await cloudinary.v2.uploader.destroy(User1.avatar.public_id);

    const avatarFile = req.files["file"][0];
    const avatarFileUri = getDataUri(avatarFile).content;

    const avatarFileUpload = await cloudinary.v2.uploader.upload(avatarFileUri);

    User1.avatar = {
      public_id: avatarFileUpload.public_id,
      url: avatarFileUpload.secure_url,
    };

    if (name) User1.name = name;
    if (email) User1.email = email;
    User1.save();

    return res.status(201).json({
      success: true,
      message: "Profile Updated Successfully",
      User1,
    });
  }
);

export const forgetPasswordController = catchAsyncError(
  async (req, res, next) => {
    const { email } = req.body;

    if (!email) return next(new ErrorHandler("Firts enter email field", 401));

    const doesExist = await User.findOne({ email });
    if (!doesExist)
      return next(
        new ErrorHandler(
          "User with this mail doesn't exist in the database",
          401
        )
      );

    const subject = "Forget password - Arcline Designs";

    const resetToken = crypto.randomBytes(10).toString("hex");
    const FRONTEND_URI = process.env.FRONTEND_URL;
    const url = FRONTEND_URI + "resetpassword/" + resetToken;
    const body = url;
    const mailSendSuccessfully = await mailSender(email, subject, body);

    if (!mailSendSuccessfully)
      return next(new ErrorHandler("Mail sending failed", 500));

    doesExist.ResetPasswordToken = resetToken;
    doesExist.ResetPasswordExpire = new Date(Date.now() + 15 * 60 * 1000);
    doesExist.save();
    return res.status(201).json({
      success: true,
      message: `Mail sent successfully on ${email}`,
    });
  }
);

export const resetPasswordController = catchAsyncError(
  async (req, res, next) => {
    const { newPassword, confirmPassword } = req.body;

    if (newPassword !== confirmPassword)
      return next(new ErrorHandler("Both passwords are not matching", 401));

    if (!newPassword || !confirmPassword)
      return next(new ErrorHandler("Fill all field", 401));
    const { token } = req.params;
    const changableUser = await User.findOne({
      ResetPasswordToken: token,
      ResetPasswordExpire: { $gt: Date.now() },
    }).select("+password");
    if (!changableUser)
      return next(new ErrorHandler("Token expired or not found", 401));

    await User.findByIdAndUpdate(changableUser._id, {
      ResetPasswordToken: null,
      ResetPasswordExpire: null,
    });
    changableUser.password = newPassword;
    changableUser.save();
    return res.status(200).json({
      success: true,
      message: "Password has updated",
    });
  }
);

//admin controllers

export const getAllUsersController = catchAsyncError(async (req, res, next) => {
  const allUsers = await User.find();
  res.status(200).json({
    success: true,
    allUsers,
  });
});

export const deleteProfileController = catchAsyncError(
  async (req, res, next) => {
    const id = req.id;
    const user = await User.findById(id);
    if (!user) return next(new ErrorHandler("User not found", 404));

    await cloudinary.v2.uploader.destroy(user.avatar.public_id);

    //cancel subscription
    await user.deleteOne();
    res
      .status(200)
      .cookie("token", null, {
        expires: new Date(Date.now()),
      })
      .json({
        success: true,
        message: "Your profile get deleted successfully",
      });
  }
);
