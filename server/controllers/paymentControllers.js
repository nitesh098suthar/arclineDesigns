import catchAsyncError from "../middlewares/catchAsyncError.js";
import { User } from "../Model/User.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import { instance } from "../server.js";
import crypto from "crypto"
import {Payment} from "../Model/Payment.js"

export const buySubscription = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.id);
  if (!user) return next(new ErrorHandler( "Please login Properly", 404));

  if (user.role === "admin") {
    return next(
      new ErrorHandler(
        "admin cannot subscribed as already has access to all resources",
        400
      )
    );
  }
  // create payment
  const createSubs = await instance.subscriptions.create({
    plan_id: "plan_O8LQ0c4yY63vsW",
    total_count: 12,
    customer_notify: 1,
  });

  // console.log(createSubs);
  user.subscription.subscriptions_id = createSubs.id;
  user.subscription.status = "created";
  await user.save();
  res.status(200).json({
    success: true,
    subscriptions_id: createSubs.id,
    msg: "Subscription Created",
  });
});

// razorpay_payment_id;razorpay_subscription_id;
//this will check in frontend. 
export const paymentVerification = catchAsyncError(async (req, res, next) => {
  const { razorpay_signature, razorpay_payment_id, razorpay_subscription_id, } = req.body;
  console.log(
    "razorpay_signature, razorpay_payment_id, razorpay_subscription_id ",
    razorpay_signature,
    razorpay_payment_id,
    razorpay_subscription_id
  );
  const user = await User.findById(req.id);
  console.log("fond user, ", user)
  if (!user) return next(new ErrorHandler( "Please login Properly", 404));

  const subscription_id = user.subscription.subscriptions_id
  console.log(subscription_id , "we got subscription id")
  
  const generated_signature = crypto.createHmac("sha256", "4Qi9PDzSszAr65u22zna8Qj9").update(razorpay_payment_id + "|" + subscription_id, "utf-8").digest("hex")
  
  console.log(generated_signature, "we got generated_signature");
  const isAuthentic = generated_signature === razorpay_signature
  
  console.log(isAuthentic, "generated_signature is matching with razorpay_signature");
  if(!isAuthentic) return res.redirect(`${process.env.FRONTEND_URL}/paymentfailed`);

  await Payment.create({razorpay_signature, razorpay_payment_id, razorpay_subscription_id})
console.log("payment is created")
user.subscription.status = "active"

await user.save()
console.log("status is activated", user.subscription.status)

  res.redirect(`${process.env.FRONTEND_URL}/paymentsuccess?reference=${razorpay_payment_id}`);

});


export const getRazorPayKey = catchAsyncError(async (req, res, next) => {
  
  res.status(200).send({
    success: true,
    key: "rzp_test_aara5FZVCRhWRd",
  });

});


export const subscriptionCancel = catchAsyncError(async (req, res, next) => {

  const user = await User.findById(req.id)

  const subscriptionId = user.subscription.subscriptions_id

  let refund = false
  await instance.subscriptions.cancel(subscriptionId)

  const payment = await Payment.findOne({
    razorpay_subscription_id : subscriptionId
  })

  const gap = Date.now() - payment.createdAt;

  const refundTime = 7*24*60*60*1000

  if(refundTime > gap){
    await instance.payments.refund(payment.razorpay_payment_id)
    refund = true
  }

  await payment.deleteOne()
  user.subscription.subscriptions_id=undefined
  user.subscription.status=undefined
  await user.save()

  res.status(200).send({
    success: true,
   message :
    refund ? "Subscription cancelled, You will get refund within 7 days"
    : "Subscription cancelled, No refund"
  });
});


