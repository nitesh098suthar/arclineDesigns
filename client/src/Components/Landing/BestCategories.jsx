import React from "react";

const bestCategories = [
  "Residential",
  "Commercial Hospitality",
  "Exterior",
  "Interior",
  "Temples",
  "Other",
];
const BestCategories = () => {
  return (
    <div className="my-10 mobile:text-center mobile:px-2">
      <div className="flex justify-center items-center ">
        <div className=" flex items-center flex-col mb-8">
          <h1 className="text-3xl font-semibold">Browse From Top Categories</h1>
          <div className="flex gap-1 my-4">
            <div className="w-14 h-[5px] rounded-full bg-primary"></div>
            <div className="w-4 h-[5px] rounded-full bg-primary"></div>
          </div>
        </div>
      </div>
      <div className="flex gap-6 justify-center flex-wrap">
        {bestCategories.map((item, index) => (
          <button
            key={index}
            className="border-[1px] border-lightGrey px-6 p-2 rounded-full text-darkGrey hover:bg-lightGrey"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BestCategories;
