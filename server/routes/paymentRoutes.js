import express from "express"
import {authMiddleware} from "../middlewares/authMiddleware.js"
import {buySubscription, getRazorPayKey, paymentVerification, subscriptionCancel} from "../controllers/paymentControllers.js"
const Router = express.Router()

Router.route("/subscription").get(authMiddleware, buySubscription) //why this is get request even we're updating data in subscription of User.js
Router.route("/paymentverification").post(authMiddleware, paymentVerification)
Router.route("/getrazorpaykey").get(getRazorPayKey)
Router.route("/subscriptioncancel").delete(authMiddleware, subscriptionCancel)

export default Router