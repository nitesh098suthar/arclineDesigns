import catchAsyncError from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import { mailSender } from "../utils/mailSender.js";

 export const contactUsController = catchAsyncError(async(req, res, next)=>{

    const {name, phone, message} = req.body
  
    const subject = "Contact form from user - Arcline Designs";

    const to = "nitesh098suthar@gmail.com"

    const body = `name : ${name} | phone : ${phone} | message : ${message}`;
    const mailSendSuccessfully = await mailSender(to, subject, body);

    if (!mailSendSuccessfully)
      return next(new ErrorHandler("Mail sending failed", 500));

    res.status(200).send({
        success:true,
        message : "Mail has sent"
    })
})

