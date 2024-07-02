import app from "./app.js"
import connectDB from "./config/database.js";   
import cloudinary from "cloudinary"

connectDB();

cloudinary.v2.config({
    cloud_name : "duvgdcfxx",
    api_key : "865855176546777",
    api_secret : "2vviBbR4uQ8ok8hnT7xSvXolV6M"
})

app.listen(process.env.PORT, ()=>{
    console.log("Backend server started at", process.env.PORT)
})