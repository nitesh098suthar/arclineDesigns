import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
const Hero = () => {
  const nav = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.userReducer);
  return (
    <div id="heroSection" className="overflow-hidden">
      <div className="flex flex-col justify-center h-full mobile:px-2">
        <div className="mb-2">
          <h1 className="text-black text-5xl font-bold mobile:text-center mobile:px-0 px-6 ">
            Let’s Build
          </h1>
          <h1 className="text-primary text-5xl font-bold mobile:text-center mobile:px-0 px-6">
            Your Dream House
          </h1>
        </div>
        <p className=" text-xl text-darkGrey mobile:text-center mobile:px-0 px-6">
          Design Buildings, Interiors, and Landscapes in Just a Few Clicks
        </p>
        <div className="mobile:flex mobile:justify-center px-6 ">
          {isAuthenticated && (
            <button
              onClick={() => nav("/admin")}
              className="flex items-center gap-2 bg-primary text-center w-fit px-4 py-2 text-white font-semibold mt-2 rounded-md hover:bg-primary/90"
            >
              <p className="">Dashboard</p>
              <ArrowOutwardIcon />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
