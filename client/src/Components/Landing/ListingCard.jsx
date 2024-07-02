import React from 'react';
import { Link } from 'react-router-dom';

const ListingCard = ({item}) => {
  return (
    <div className="">
      <div className="border-[1px] border-lightGrey rounded-xl w-[400px] mobile:w-[300px] min-h-[430px] my-2 hover:bg-lightGrey/30 transition-colors">
        <div className="p-2">
          <img src={item.houseImage} alt="" className="rounded-md" />
        </div>
        <div className="p-2">
          <div className="flex gap-2 items-baseline px-2">
            <h3 className="text-primary font-medium text-lg">{`${item.widthInFeet}' x ${item.heightInFeet}'`}</h3>
            <p className="text-darkGrey capitalize">{item.category}</p>
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
              <p className="text-sm text-darkGrey">{item.profession}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListingCard;
