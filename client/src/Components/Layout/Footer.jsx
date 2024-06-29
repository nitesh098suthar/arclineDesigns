import React from "react";
import logo from "/images/logo.png";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  return (
    <div className="">
      <div className="flex flex-wrap items-start justify-between bg-lightGrey py-10 mt-20 px-14  mobile:px-2 mobile:justify-center">
        <div className="flex flex-col items-center mobile:">
          <img src={logo} alt="" className="w-[120px] " />
          <p className="w-80 text-xs leading-relaxed my-4 mobile:text-center">
            We pride ourselves on delivering innovative and sustainable
            architectural designs tailored to meet the unique needs of our
            clients.
          </p>
          <div className="">
            <div className="flex justify-start gap-2 ">
              <div className="bg-primary grid p-1 place-content-center rounded-md  ">
                <InstagramIcon style={{ fontSize: 24, color: "#fff" }} />
              </div>
              <div className="bg-primary grid p-1 place-content-center rounded-md  ">
                <FacebookIcon style={{ fontSize: 24, color: "#fff" }} />
              </div>
              <div className="bg-primary grid p-1 place-content-center rounded-md  ">
                <XIcon style={{ fontSize: 24, color: "#fffF" }} />
              </div>
              <div className="bg-primary grid p-1 place-content-center rounded-md  ">
                <YouTubeIcon style={{ fontSize: 24, color: "#fff" }} />
              </div>
              <div className="bg-primary grid p-1 place-content-center rounded-md  ">
                <LinkedInIcon style={{ fontSize: 24, color: "#fff" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex border-2 w-1/3 justify-between">
          <div className="mobile:hidden">
            <h1 className="text-sm text-primary mb-2 font-semibold mobile:hidden">
              Navigation
            </h1>
            <p className="text-darkGrey text-xs mb-1">
              <Link to="/">Home</Link>
            </p>
            <p className="text-darkGrey text-xs mb-1">
              <Link to="/category">Category</Link>
            </p>

            <p className="text-darkGrey text-xs mb-1">
              <Link to="/about">About Us</Link>
            </p>
            <p className="text-darkGrey text-xs mb-1">
              <Link to="/contact">Contact Us</Link>
            </p>
          </div>
          <div className=" mobile:hidden">
            <h1 className="text-sm text-primary mb-2 font-semibold">
              Featured Location
            </h1>
            <p className="text-darkGrey text-xs mb-1">
              <Link to="/">Jaipur</Link>
            </p>
            <p className="text-darkGrey text-xs mb-1">
              <Link to="/category">Jalore</Link>
            </p>
            <p className="text-darkGrey text-xs mb-1">
              <Link to="/gallery">Barmer</Link>
            </p>
            <p className="text-darkGrey text-xs mb-1">
              <Link to="/about">Pali</Link>
            </p>
            <p className="text-darkGrey text-xs mb-1">
              <Link to="/contact">Sirohi</Link>
            </p>
          </div>
          <div className="mobile:flex mobile:gap-4 mobile:pt-8 mobile:font-bold ">
            <h1 className="text-sm text-primary mb-2 font-semibold mobile:hidden">Other</h1>
            <p className="text-darkGrey text-xs mb-1 mobile:text-primary">
              <Link to="/">Privacy Policy</Link>
            </p>
            <p className="text-darkGrey text-xs mb-1 mobile:text-primary">
              <Link to="/category">FAQ</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="text-xs text-darkGrey text-center py-4">
        "© 2024 Marketing Tools. All rights reserved."
      </div>
    </div>
  );
};

export default Footer;
