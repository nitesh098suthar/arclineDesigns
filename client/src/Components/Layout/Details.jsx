import React, { useEffect } from "react";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { getOneDesignAction } from "../../redux/actions/designActions.js";
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Loader from "./Loader.jsx";

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getOneDesignAction(id));
    }
  }, [dispatch, id]);

  const oneDesignData = useSelector(
    (state) => state.designReducer.oneDesignData
  );
  // console.log("oneDesignData:", oneDesignData);

  if (!oneDesignData) {
    return <Loader />;
  }

  const { oneDesign } = oneDesignData;

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // when the screen size is 768px or less
        settings: {
          slidesToShow: 1, // show only 1 slide
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (!oneDesign) {
    return <div>Loading...</div>;
  }

  return (
    <div className="px-6 py-10">
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
        <Carousel>
          {oneDesign?.allImages?.map((item, i) => (
            <div key={i} className="">
              <img
                src={item.secure_url}
                alt=""
                className="object-cover h-full w-full"
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="capitalize">
        <div className="flex items-baseline gap-4">
          <h1 className="text-2xl text-primary mb-2 capitalize">{`${oneDesign.heightInFeet}x${oneDesign.widthInFeet}`}</h1>{" "}
          <h1 className="text-darkGrey">{oneDesign.category}</h1>
        </div>
        <h1 className="text-2xl text-primary mb-2 capitalize">
          {oneDesign.designTitle}
        </h1>
        <p className="text-sm text-darkGrey border-b-[1px] pb-4 text-justify capitalize">
          {oneDesign.designDes}
        </p>
        <div className="flex py-4 gap-4 border-b-[1px] pb-4 mb-4 mobile:flex-col">
          <h1>{`${oneDesign.noOfBedRooms} Bedrooms`}</h1>
          <h1 className="mobile:hidden mobile:text-center ">|</h1>
          <h1>{`${oneDesign.noOfBathRooms} Bathrooms`}</h1>
          <h1 className="mobile:hidden mobile:text-center ">|</h1>
          <h1>{`${oneDesign.areaInSquareFeet} Squarefeet`}</h1>
        </div>
        <div className="flex items-center space-x-4 ">
        <div className="w-12 h-12 rounded-md overflow-hidden border-lightGrey border-[1px]">
  <img
    src={oneDesign?.architectImage?.secure_url} // Fallback to a default image if URL is not available
    alt="Architect Image"
    className="object-cover h-full w-full"
  />
</div>

          <div>
            <div className="flex">
              <h1 className="">Location: </h1>
              <h1 className="pl-1 text-darkGrey">{oneDesign.location}</h1>
            </div>
            <div className="flex">
              <h1 className="">{`${oneDesign.profession} Name: `}</h1>
              <h1 className="pl-1 text-darkGrey">{`${oneDesign.architectName}`}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
