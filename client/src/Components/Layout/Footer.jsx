import React from "react";
import logo from "/images/logo.png";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link as ScrollLink } from "react-scroll";
const Footer = () => {
  return (
    <div className="">
      <div className="flex flex-wrap items-start justify-between bg-lightGrey py-10 px-14  mobile:px-2 mobile:justify-center">
        <div className="flex flex-col justify-center mobile:items-center">
          <ScrollLink to="home" smooth={true} duration={500}>
            <Link to={"/"}>
              {" "}
              <img src={logo} alt="" className="w-[120px]" />
            </Link>
          </ScrollLink>
          <p className="w-80 text-xs leading-relaxed my-4 mobile:text-center">
            We pride ourselves on delivering innovative and sustainable
            architectural designs tailored to meet the unique needs of our
            clients.
          </p>
          {/* <div className="border-2 border-green-200"> */}
          <div className="flex gap-2 ">
            <div className="bg-primary grid p-1 place-content-center rounded-md  hover:bg-primary/90">
              <InstagramIcon style={{ fontSize: 24, color: "#fff" }} />
            </div>
            <div className="bg-primary grid p-1 place-content-center rounded-md hover:bg-primary/90 ">
              <FacebookIcon style={{ fontSize: 24, color: "#fff" }} />
            </div>
            <div className="bg-primary grid p-1 place-content-center rounded-md  hover:bg-primary/90">
              <XIcon style={{ fontSize: 24, color: "#fffF" }} />
            </div>
            <div className="bg-primary grid p-1 place-content-center rounded-md  hover:bg-primary/90">
              <YouTubeIcon style={{ fontSize: 24, color: "#fff" }} />
            </div>
            <div className="bg-primary grid p-1 place-content-center rounded-md  hover:bg-primary/90">
              <LinkedInIcon style={{ fontSize: 24, color: "#fff" }} />
            </div>
          </div>
          {/* </div> */}
        </div>
        <div className="flex border-2 w-1/3 justify-between mobile:justify-center">
          <div className="mobile:hidden">
            <h1 className="text-sm text-primary mb-2 font-semibold mobile:hidden">
              Navigation
            </h1>
            <ScrollLink to="home" smooth={true} duration={500}>
              <p className="text-darkGrey text-xs mb-1 hover:text-black">
                <Link to="/">Home</Link>
              </p>
            </ScrollLink>
            <p className="text-darkGrey text-xs mb-1 hover:text-black">
              <Link to="/category/all">Category</Link>
            </p>

            <p className="text-darkGrey text-xs mb-1 hover:text-black">
              <Link to="/about-us">About Us</Link>
            </p>
            <p className="text-darkGrey text-xs mb-1 hover:text-black">
              <Link to="/contact-us">Contact Us</Link>
            </p>
          </div>
          <div className=" mobile:hidden">
            <h1 className="text-sm text-primary mb-2 font-semibold">
              Featured Location
            </h1>
            <p className="text-darkGrey text-xs mb-1 hover:text-black">
              <Link to="/location/jaipur">Jaipur</Link>
            </p>
            <p className="text-darkGrey text-xs mb-1 hover:text-black">
              <Link to="/location/jalore">Jalore</Link>
            </p>
            <p className="text-darkGrey text-xs mb-1 hover:text-black">
              <Link to="/location/barmer">Barmer</Link>
            </p>
            <p className="text-darkGrey text-xs mb-1 hover:text-black">
              <Link to="/location/pali">Pali</Link>
            </p>
            <p className="text-darkGrey text-xs mb-1 hover:text-black">
              <Link to="/location/sirohi">Sirohi</Link>
            </p>
          </div>
          <div className="mobile:flex mobile:pt-8 mobile:font-bold mobile:items-center">
            <h1 className="text-sm text-primary mb-2 font-semibold mobile:hidden">
              Other
            </h1>
            <p className="text-darkGrey text-xs mb-1 mobile:text-primary hover:text-black">
              <Link to="/policy" className="inline-block mobile:w-[100px]">
                Privacy Policy
              </Link>
            </p>
            <p className="text-darkGrey text-xs mb-1 mobile:text-primary hover:text-black">
              <Link to="/help">Help</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="text-xs text-darkGrey text-center py-4">
        "© 2024 Arcline Designs. All rights reserved." "Contact us for creating
        your website - +91 63785 89875"
      </div>
    </div>
  );
};

export default Footer;
