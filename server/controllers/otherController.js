import catchAsyncError from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import {User} from "../Model/User.js"
import { mailSender } from "../utils/mailSender.js";

 export const contactUsController = catchAsyncError(async(req, res, next)=>{

    const {name, email, message} = req.body

    const subject = "Contact form from user - CourseBundler";

    const to = "nitesh098suthar@gmail.com"

    const body = `name : ${name} | email : ${email} | message : ${message}`;
    const mailSendSuccessfully = await mailSender(to, subject, body);

    if (!mailSendSuccessfully)
      return next(new ErrorHandler("Mail sending failed", 500));

    res.status(200).send({
        success:true,
        message : "Mail has sent"
    })
})

 export const requestCourseController = catchAsyncError(async (req, res, next) => {

   const { name, email, course } = req.body;

   const subject = "Request form from user - CourseBundler";

   const to = "nitesh098suthar@gmail.com";

   const body = `name : ${name} | email : ${email} | cousre : ${course}`;
   const mailSendSuccessfully = await mailSender(to, subject, body);

   if (!mailSendSuccessfully)
     return next(new ErrorHandler("Mail sending failed", 500));

   res.status(200).send({
     success: true,
     message: "Mail has sent",
   });
 });