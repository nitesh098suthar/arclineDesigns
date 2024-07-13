import React, { useEffect } from "react";
import Hero from "../Landing/Hero";
import BestCategories from "../Landing/BestCategories";
import PopularListing from "../Landing/PopularListing.jsx";
import Insight from "../Landing/Insight";
import FeatureLocation from "../Landing/FeatureLocation";
import Testimonials from "../Landing/Testimonials";

import { useDispatch, useSelector } from "react-redux";
import { getAllDesignsAction } from "../../redux/actions/designActions";

const Landing = () => {
  const dispatch = useDispatch();
  const {allListings} = useSelector(state => state.designReducer)
  useEffect(() => {
    dispatch(getAllDesignsAction());
  }, [dispatch]);

  
  return (
    <>
      <div className="">
        <Hero />
        <BestCategories />
        <PopularListing />
        <Insight />
        <FeatureLocation />
        <Testimonials />
      </div>
    </>
  );
};

export default Landing;
