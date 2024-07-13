import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
const Hero = () => {
  const nav = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.userReducer);
  return (
    <div id="heroSection">
      <div className="flex flex-col justify-center h-full px-14 mobile:px-2">
        <div className=" mb-2">
          <h1 className="text-black text-5xl font-bold mobile:text-center ">
            Let’s Build
          </h1>
          <h1 className="text-primary text-5xl font-bold mobile:text-center">
            Your Dream House
          </h1>
        </div>
        <p className=" text-xl text-darkGrey mobile:text-center">
          Design Buildings, Interiors, and Landscapes in Just a Few Clicks
        </p>
        {isAuthenticated && (
          <button
            onClick={() => nav("/admin")}
            className="flex items-center gap-2 bg-primary text-center w-fit px-4 py-2 text-white font-semibold mt-2 rounded-md hover:bg-primary/90"
          >
            <p>Dashboard</p>
            <ArrowOutwardIcon />
          </button>
        )}
      </div>
    </div>
  );
};

export default Hero;
