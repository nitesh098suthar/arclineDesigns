

import React, { useEffect } from "react";
import ListingCard from "./ListingCard.jsx";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllDesignsAction } from "../../redux/actions/designActions.js";
import Loader from "../Layout/Loader.jsx"

const PopularListing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDesignsAction());
  }, [dispatch]);

  const { allListings} = useSelector((state) => state.designReducer);
  const { loading } = useSelector(state => state.globalReducer)
  // Ensure allListings is defined and not null
  const popularListing = allListings
    ? allListings.filter((item) => {
        return item.popular === "true";
      })
    : [];

  return (
    <>
    {
      loading ? (<Loader />) : (<div className="my-12 px-14 mobile:px-2">
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
            {popularListing.map((item, i) => (
              <Link key={i} to={`/design/${item._id}`}>
                <ListingCard item={item} />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-primary text-white rounded-full text-sm px-6 py-2 mt-8 hover:bg-primary/90 transition-colors">
            Load More
          </button>
        </div>
      </div>)
    }
    </>
    
  );
};

export default PopularListing;
