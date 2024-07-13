import React, { useEffect } from "react";

// import { allListings } from "./allListings.js";
import ListingCard from "../Landing/ListingCard.jsx";
import { Link, useParams } from "react-router-dom";
// import { getAllDesigns } from "../../../../server/controllers/designControllers.js";
import { getAllDesignsAction } from "../../redux/actions/designActions.js";
import { useDispatch, useSelector } from "react-redux";
const LocationCategory = () => {
  const dispatch = useDispatch();

  const { loc } = useParams();

  useEffect(() => {
    if (loc) {
      dispatch(getAllDesignsAction());
    }
  }, [dispatch, loc]);

  const { allListings } = useSelector((state) => state.designReducer);
  const filteredCategroy = allListings
    ? allListings.filter((items) => {
        return items.location.toLowerCase().replace(/\s+/g, "-") === loc;
      })
    : [];
  return (
    <div className="my-12 px-14 mobile:px-2">
      <div className="grid grid-cols-3 place-items-center">
        {filteredCategroy.map((item, index) => {
          return (
            <Link key={index} to={`/design/${item._id}`}>
              <ListingCard key={index} item={item} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LocationCategory;
