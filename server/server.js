import app from "./app.js"
import connectDB from "./config/database.js";   
import cloudinary from "cloudinary"
import Razorpay from "razorpay";

connectDB();

cloudinary.v2.config({
    cloud_name : "duvgdcfxx",
    api_key : "865855176546777",
    api_secret : "2vviBbR4uQ8ok8hnT7xSvXolV6M"
})

export var instance = new Razorpay({
    key_id: "rzp_test_aara5FZVCRhWRd",
    key_secret: "4Qi9PDzSszAr65u22zna8Qj9",
  });


app.listen(process.env.PORT, ()=>{
    console.log("Backend server started at", process.env.PORT)
})