import React from "react";

import { allListings } from "./allListings.js";
import ListingCard from "../Landing/ListingCard.jsx";
import { Link, useParams } from "react-router-dom";
const LocationCategory = () => {
  const { loc } = useParams();
  const filteredCategroy = allListings.filter((items) => {
    return items.location.toLowerCase().replace(/\s+/g, "-") === loc;
  });
  return (
    <div className="my-12 px-14 mobile:px-2">
      <div className="grid grid-cols-3 place-items-center">
        {filteredCategroy.map((item, index) => {
          return (
            <Link key={index} to={`/design/${item.id}`}>
              <ListingCard key={index} item={item} />;
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LocationCategory;
