import React from 'react'

const popularListing = [
  {
    designTitle: "Luxury Apartment",
    location: "pune",
    houseImage : "images/house.jpg",
    architectImage:"images/avatar.png",
    heightInFeet : 40,
    widthInFeet: 40,
    noOfBathRooms : 5,
    noOfBedRooms : 4,
    areaInSquareFeet: 1600,
    architectName : "Ankit Suthar",
    profession : "Architect",
    popular : true,
    category:"villa"
  },
  {
    designTitle: "Luxury Apartment",
    location: "pune",
    houseImage : "images/house.jpg",
    architectImage:"images/avatar.png",
    heightInFeet : 40,
    widthInFeet: 40,
    noOfBathRooms : 5,
    noOfBedRooms : 4,
    areaInSquareFeet: 1600,
    architectName : "Ankit Suthar",
    profession : "Architect",
    popular : true,
    category:"villa"
  },
  {
    designTitle: "Luxury Apartment",
    location: "pune",
    houseImage : "images/house.jpg",
    architectImage:"images/avatar.png",
    heightInFeet : 40,
    widthInFeet: 40,
    noOfBathRooms : 5,
    noOfBedRooms : 4,
    areaInSquareFeet: 1600,
    architectName : "Ankit Suthar",
    profession : "Architect",
    popular : true,
    category:"villa"
  },
  {
    designTitle: "Luxury Apartment",
    location: "pune",
    houseImage : "images/house.jpg",
    architectImage:"images/avatar.png",
    heightInFeet : 40,
    widthInFeet: 40,
    noOfBathRooms : 5,
    noOfBedRooms : 4,
    areaInSquareFeet: 1600,
    architectName : "Ankit Suthar",
    profession : "Architect",
    popular : true,
    category:"villa"
  },
  {
    designTitle: "Luxury Apartment",
    location: "pune",
    houseImage : "images/house.jpg",
    architectImage:"images/avatar.png",
    heightInFeet : 40,
    widthInFeet: 40,
    noOfBathRooms : 5,
    noOfBedRooms : 4,
    areaInSquareFeet: 1600,
    architectName : "Ankit Suthar",
    profession : "Architect",
    popular : true,
    category:"villa"
  },
  {
    designTitle: "Luxury Apartment",
    location: "pune",
    houseImage : "images/house.jpg",
    architectImage:"images/avatar.png",
    heightInFeet : 40,
    widthInFeet: 40,
    noOfBathRooms : 5,
    noOfBedRooms : 4,
    areaInSquareFeet: 1600,
    architectName : "Ankit Suthar",
    profession : "Architect",
    popular : true,
    category:"villa"
  },
]

const PopularListing = () => {
  return (
    <div className="my-12 px-14 mobile:px-2">
      <div className="flex justify-center items-center flex-wrap">
        <div className=" flex items-center flex-col mb-8">
          <h1 className="text-3xl font-semibold">Popular Listing</h1>
          <div className="flex gap-1 my-4">
            <div className="w-14 h-[5px] rounded-full bg-primary"></div>
            <div className="w-4 h-[5px] rounded-full bg-primary"></div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between w-full flex-wrap mobile:justify-center">
          {popularListing.map((item, i) => {
            return (
              <div key={i} className="">
                <div className="border-[1px] border-lightGrey rounded-xl w-[400px] mobile:w-[300px] min-h-[430px] my-2 hover:bg-lightGrey/30 transition-colors">
                  <div className="p-2">
                    <img src={item.houseImage} alt="" className="rounded-md" />
                  </div>
                  <div className="p-2">
                    <div className="flex gap-2 items-baseline px-2">
                      <h3 className="text-primary font-medium text-lg">{`${item.widthInFeet}' x ${item.heightInFeet}'`}</h3>
                      <p className="text-darkGrey capitalize">
                        {item.category}
                      </p>
                    </div>
                    <h1 className="px-2 font-semibold text-xl pt-2">
                      {item.designTitle}
                    </h1>
                    <div className="flex justify-between px-2 py-4 ">
                      <p className="text-xs">{`${item.noOfBedRooms} Bedrooms`}</p>
                      <p className="text-xs">|</p>
                      <p className="text-xs">{`${item.noOfBathRooms} Bathrooms`}</p>
                      <p className="text-xs">|</p>
                      <p className="text-xs">{`${item.areaInSquareFeet} SquareFT`}</p>
                    </div>
                    <div className="flex border-lightGrey border-t-[1px] pt-3 items-center">
                      <div className="w-[50px] h-[50px] overflow-hidden rounded-full border-[1px] border-lightGrey">
                        <img src={item.architectImage} alt="" />
                      </div>
                      <div className="pl-4">
                        <h3 className="font-medium">{item.architectName}</h3>
                        <p className="text-sm text-darkGrey">
                          {item.profession}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-primary text-white rounded-full text-sm px-6 py-2 mt-8 hover:bg-primary/90 transition-colors">
          Load More
        </button>
      </div>
    </div>
  );
}

export default PopularListing
