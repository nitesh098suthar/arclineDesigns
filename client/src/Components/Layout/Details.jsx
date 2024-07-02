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
    <div className="px-14 py-10">
      <div className="flex justify-center items-center ">
        <div className=" flex items-center flex-col mb-8">
          <h1 className="text-3xl font-semibold">Testimonial</h1>
          <div className="flex gap-1 my-4">
            <div className="w-14 h-[5px] rounded-full bg-primary"></div>
            <div className="w-4 h-[5px] rounded-full bg-primary"></div>
          </div>
        </div>
      </div>
      <div className="">
        <Slider {...settings} className=" mb-10">
          {allListings[0].allImages.map((item, i) => (
            <div
              key={i}
              className=" bg-lightGrey rounded-xl p-1 w-[400px] h-[225px] "
            >
              <img src={item} alt="" className='object-cover h-full w-full rounded-lg ratio'/>
            </div>
          ))}
        </Slider>
      </div>
       <div className="capitalize" >
        <div className='flex items-baseline gap-4'>
          <h1 className='text-2xl text-primary mb-2 capitalize'>{`${allListings[0].heightInFeet}x${allListings[0].widthInFeet}`}</h1> <h1 className='text-darkGrey'>{allListings[0].category}</h1> 
        </div>
        <h1 className='text-2xl text-primary mb-2 capitalize'>{allListings[0].designTitle}</h1>
        <p className='text-sm text-darkGrey border-b-[1px] pb-4 text-justify'>{allListings[0].designDes}</p>
        <div className='flex py-4 gap-4 border-b-[1px] pb-4 mb-4 mobile:flex-col'>
          <h1>{`${allListings[0].noOfBedRooms} Bedrooms`}</h1>
          <h1 className='mobile:hidden mobile:text-center '>|</h1>
          <h1>{`${allListings[0].noOfBathRooms} Bathrooms`}</h1>
          <h1 className='mobile:hidden mobile:text-center '>|</h1>
          <h1>{`${allListings[0].areaInSquareFeet} Squarefeet`}</h1>
        </div>
          <div className='flex'>
          <h1 className=''>Location: </h1>
          <h1 className='pl-1 text-darkGrey'>{allListings[0].location}</h1>
          </div>
          <div className='flex'>
          <h1 className=''>{`${allListings[0].profession} Name: `}</h1>
          <h1 className='pl-1 text-darkGrey'>{`${allListings[0].architectName}`}</h1>
          </div>
       </div>
    </div>
  );
}

export default Details
