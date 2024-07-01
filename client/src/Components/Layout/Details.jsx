import React from 'react'
import { allListings } from './allListings.js' 
import Slider from 'react-slick';
const Details = () => {

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
    };

  return (
    <div className="">
      <div className="flex justify-center items-center ">
        <div className=" flex items-center flex-col mb-8">
          <h1 className="text-3xl font-semibold">Testimonial</h1>
          <div className="flex gap-1 my-4">
            <div className="w-14 h-[5px] rounded-full bg-primary"></div>
            <div className="w-4 h-[5px] rounded-full bg-primary"></div>
          </div>
        </div>
      </div>
      <div className="pl-[5%]">
        <Slider {...settings} className="">
          {allListings[0].allImages.map((item, i) => (
            <div
              key={i}
              className=" bg-red-500 p-1 w-[400px] h-[225px]"
            >
              <img src={item} alt="" className='object-cover h-full w-full'/>
            </div>
          ))}
        </Slider>
      </div>
       <div className="pl-[5%] mt-[15%]">
        <h1>{allListings[0].designTitle}</h1>
        <h1>{allListings[0].architectName}</h1>
        <h1>{allListings[0].location}</h1>
        <h1>{allListings[0].}</h1>
       </div>
    </div>
  );
}

export default Details
