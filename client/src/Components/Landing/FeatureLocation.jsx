import React from "react";
import firstImage from "/images/firstImage.jpg";
import secondImage from "/images/secondImage.jpg";
import thirdImage from "/images/thirdImage.jpg";
import fourthImage from "/images/fourthImage.jpg";
import fifthImage from "/images/fifthImage.jpg";
import { Link } from "react-router-dom";

const FeatureLocation = () => {


  return (
    <div className="my-12 mobile:h-[1500px] mobile:border-black">
      <div className="flex justify-center items-center">
        <div className=" flex items-center flex-col mb-8">
          <h1 className="text-3xl font-semibold">Featured Location</h1>
          <div className="flex gap-1 my-4">
            <div className="w-14 h-[5px] rounded-full bg-primary"></div>
            <div className="w-4 h-[5px] rounded-full bg-primary"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-center h-[320px] px-14 flex-wrap mobile:px-2">
        <Link to={"/location/jaipur"} className=" cursor-pointer relative w-[300px] h-full rounded-lg overflow-hidden mobile:mb-7 mobile:w-[300px] mobile:h-[200px] hover:scale-105 transition-transform hover:shadow-lg">
          <img src={firstImage} alt="" className="locationCard" />
          <p className="absolute left-0 bottom-0 text-white z-10 py-4 pl-5 capitalize">
            Jaipur
          </p>
          <div className="gradien"></div>
        </Link>

        <div className="flex flex-wrap justify-evenly w-[480px] ">
          
          <Link to={"/location/pali"} className="relative w-[200px] h-[147px] rounded-lg overflow-hidden top-0 left-0 mb-7  mobile:w-[300px] mobile:h-[200px] hover:scale-105 transition-transform hover:shadow-lg">
            <img
              src={secondImage}
              alt=""
              className="locationCard hover:scale-120"
            />
            <div className="overlay">
              <p className="text-white capitalize">Pali</p>
            </div>
          </Link>
          <Link to={"/location/sirohi"} className="relative w-[200px] h-[147px] rounded-lg overflow-hidden top-0 left-0 mb-7  mobile:w-[300px] mobile:h-[200px] hover:scale-105 transition-transform hover:shadow-lg">
            <img
              src={thirdImage}
              alt=""
              className="locationCard hover:scale-120"
            />
            <div className="overlay">
              <p className="text-white capitalize">Sirohi</p>
            </div>
          </Link>
          <Link to={"/location/barmer"} className="relative w-[200px] h-[147px] rounded-lg overflow-hidden top-0 left-0 mb-7  mobile:w-[300px] mobile:h-[200px] hover:scale-105 transition-transform hover:shadow-lg">
            <img
              src={thirdImage}
              alt=""
              className="locationCard hover:scale-120"
            />
            <div className="overlay">
              <p className="text-white capitalize">Barmer</p>
            </div>
          </Link>
          <Link to={"/location/ahmedabad"} className="relative w-[200px] h-[147px] rounded-lg overflow-hidden top-0 left-0 mb-7  mobile:w-[300px] mobile:h-[200px] hover:scale-105 transition-transform hover:shadow-lg">
            <img
              src={fourthImage}
              alt=""
              className="locationCard hover:scale-120"
            />
            <div className="overlay">
              <p className="text-white capitalize">Ahmedabad</p>
            </div>
          </Link>
        </div>

        <Link to={"/location/jalore"} className="relative w-[300px] h-full rounded-lg overflow-hidden  mobile:w-[300px] mobile:h-[200px] hover:scale-105 transition-transform hover:shadow-lg">
          <img
            src={fifthImage}
            alt=""
            className="locationCard"
          />
          <p className="absolute left-0 bottom-0 text-white z-10 py-4 pl-5 capitalize">
            Jalore
          </p>
          <div className="gradien"></div>
        </Link>

      </div>
    </div>
  );
};

export default FeatureLocation;
