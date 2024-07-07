import React, { useEffect } from "react"
// import { oneDesing } from "./oneDesing.js"
import Slider from "react-slick"
import { useDispatch, useSelector } from "react-redux";
import { getAllDesignsAction } from "../../redux/actions/designActions.js";
import { useParams } from "react-router-dom";


const Details = () => {

   const dispatch = useDispatch();
   const {id} = useParams();
   useEffect(() => {
     dispatch(getAllDesignsAction(id));
   }, []);

   const { oneDesing } = useSelector((state) => state.designReducer);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // when the screen size is 430px or less
        settings: {
          slidesToShow: 1, // show only 1 slide
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="px-14 py-10">
      <div className="flex justify-center items-center ">
        <div className=" flex items-center flex-col mb-8">
          <h1 className="text-3xl font-semibold">Project Details</h1>
          <div className="flex gap-1 my-4">
            <div className="w-14 h-[5px] rounded-full bg-primary"></div>
            <div className="w-4 h-[5px] rounded-full bg-primary"></div>
          </div>
        </div>
      </div>
      <div className="">
        <Slider {...settings} className=" mb-10">
          {oneDesing.allImages.map((item, i) => (
            <div
              key={i}
              className=" bg-lightGrey rounded-xl p-1 w-[400px] h-[225px] "
            >
              <img
                src={item}
                alt=""
                className="object-cover h-full w-full rounded-lg ratio"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="capitalize">
        <div className="flex items-baseline gap-4">
          <h1 className="text-2xl text-primary mb-2 capitalize">{`${oneDesing.heightInFeet}x${oneDesing.widthInFeet}`}</h1>{" "}
          <h1 className="text-darkGrey">{oneDesing.category}</h1>
        </div>
        <h1 className="text-2xl text-primary mb-2 capitalize">
          {oneDesing.designTitle}
        </h1>
        <p className="text-sm text-darkGrey border-b-[1px] pb-4 text-justify">
          {oneDesing.designDes}
        </p>
        <div className="flex py-4 gap-4 border-b-[1px] pb-4 mb-4 mobile:flex-col">
          <h1>{`${oneDesing.noOfBedRooms} Bedrooms`}</h1>
          <h1 className="mobile:hidden mobile:text-center ">|</h1>
          <h1>{`${oneDesing.noOfBathRooms} Bathrooms`}</h1>
          <h1 className="mobile:hidden mobile:text-center ">|</h1>
          <h1>{`${oneDesing.areaInSquareFeet} Squarefeet`}</h1>
        </div>
        <div className="flex">
          <h1 className="">Location: </h1>
          <h1 className="pl-1 text-darkGrey">{oneDesing.location}</h1>
        </div>
        <div className="flex">
          <h1 className="">{`${oneDesing.profession} Name: `}</h1>
          <h1 className="pl-1 text-darkGrey">{`${oneDesing.architectName}`}</h1>
        </div>
      </div>
    </div>
  );
}

export default Details
