import React from "react";

const locationWise = [
  {
    locationImage: "images/house.jpg",
    title: "jaipur",
  },
  {
    locationImage: "images/house.jpg",
    title: "jaipur",
  },
  {
    locationImage: "images/house.jpg",
    title: "jaipur",
  },
  {
    locationImage: "images/house.jpg",
    title: "jaipur",
  },
  {
    locationImage: "images/house.jpg",
    title: "jaipur",
  },
  {
    locationImage: "images/house.jpg",
    title: "jaipur",
  },
];

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
        <div className="relative w-[300px] h-full rounded-lg overflow-hidden mobile:mb-7 mobile:w-[300px] mobile:h-[200px] hover:scale-105 transition-transform hover:shadow-lg">
          <img
            src={locationWise[0].locationImage}
            alt=""
            className="locationCard"
          />
          <p className="absolute left-0 bottom-0 text-white z-10 py-4 pl-5 capitalize">
            {locationWise[0].title}
          </p>
          <div className="gradien"></div>
        </div>
        <div className="flex flex-wrap justify-evenly w-[480px] ">
          {locationWise.slice(1, 5).map((item, i) => {
            return (
              <div
                key={i}
                className="relative w-[200px] h-[147px] rounded-lg overflow-hidden top-0 left-0 mb-7  mobile:w-[300px] mobile:h-[200px] hover:scale-105 transition-transform hover:shadow-lg"
              >
                <img
                  src={item.locationImage}
                  alt=""
                  className="locationCard hover:scale-120"
                />
                <div className="overlay">
                  <p className="text-white capitalize">{item.title}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="relative w-[300px] h-full rounded-lg overflow-hidden  mobile:w-[300px] mobile:h-[200px] hover:scale-105 transition-transform hover:shadow-lg">
          <img
            src={locationWise[5].locationImage}
            alt=""
            className="locationCard"
          />
          <p className="absolute left-0 bottom-0 text-white z-10 py-4 pl-5 capitalize">
            {locationWise[5].title}
          </p>
          <div className="gradien"></div>
        </div>
      </div>
    </div>
  );
};

export default FeatureLocation;
