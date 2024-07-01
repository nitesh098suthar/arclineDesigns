import React from 'react'
// import { popularListing } from './popularListing.js';
import { allListings } from '../Layout/allListings.js';
import ListingCard from './ListingCard.jsx';

const PopularListing = () => {
  const popularListing = allListings.filter((item)=>{
    return item.popular === true
  })
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
            return <ListingCard key={i} item={item} />;
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
