import React from "react";
import Hero from "../Landing/Hero";
import BestCategories from "../Landing/BestCategories";
import PopularListing from "../Landing/PopularListing";
import Insight from "../Landing/Insight";
import FeatureLocation from "../Landing/FeatureLocation";
import Testimonials from "../Landing/Testimonials";

const Landing = () => {
  return (
    <>
      <div className="">
        <Hero />
        <BestCategories />
        <PopularListing />
        <Insight />
        <FeatureLocation />
        <Testimonials/>
      </div>
    </>
  );
};

export default Landing;
