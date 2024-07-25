import React from "react";
import firstImage from "/images/firstImage.jpg";
import secondImage from "/images/secondImage.jpg";
import thirdImage from "/images/thirdImage.jpg";
import fourthImage from "/images/fourthImage.jpg";
import fifthImage from "/images/fifthImage.jpg";
import sixthImage from "/images/sixthImage.jpg";
import { Link } from "react-router-dom";

const FeatureLocation = () => {
  return (
    <div className="px-6 my-12">
      <div className="flex justify-center items-center">
        <div className=" flex items-center flex-col mb-8">
          <h1 className="text-3xl font-semibold">Featured Location</h1>
          <div className="flex gap-1 my-4">
            <div className="w-14 h-[5px] rounded-full bg-primary"></div>
            <div className="w-4 h-[5px] rounded-full bg-primary"></div>
          </div>
        </div>
      </div>
      <div className="outerBox">
        <div className="child forOverlay">
          <Link to={"/location/jaipur"} className="relative">
            <img src={firstImage} alt="" className="locationCard" />
            <div className="overlay">
              <p className="text-white capitalize">Jaipur</p>
            </div>
          </Link>
        </div>
        <div className="child specialChild">
          <div className="grandChild forOverlay">
            <Link to={"/location/pali"} className="relative">
              <img src={secondImage} alt="" className="locationCard"/>
              <div className="overlay">
                <p className="text-white capitalize">Pali</p>
              </div>
            </Link>
          </div>
          <div className="grandChild forOverlay">
            <Link to={"/location/sirohi"} className="relative">
              <img src={thirdImage} alt="" className="locationCard"/>
              <div className="overlay">
                <p className="text-white capitalize">Sirohi</p>
              </div>
            </Link>
          </div>
          <div className="grandChild forOverlay">
            <Link to={"/location/barmer"} className="relative">
              <img src={fourthImage} alt="" className="locationCard"/>
              <div className="overlay">
                <p className="text-white capitalize">Barmer</p>
              </div>
            </Link>
          </div>
          <div className="grandChild forOverlay">
            <Link to={"/location/ahmedabad"} className="relative">
              <img src={fifthImage} alt="" className="locationCard"/>
              <div className="overlay">
                <p className="text-white capitalize">Ahmedabad</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="child forOverlay">
          <Link to={"/location/jalore"} className="relative">
            <img src={sixthImage} alt="" className="locationCard"/>
            <div className="overlay">
              <p className="text-white capitalize">Jalore</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureLocation;
