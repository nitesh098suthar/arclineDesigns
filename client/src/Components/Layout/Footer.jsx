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
      <div className="flex items-start justify-between px-6 bg-lightGrey py-10 mobile:justify-center mobile:text-center">
        <div className="flex flex-col justify-center  lg:w-[40%] md:w-[40%] w-full">
          <ScrollLink to="home" smooth={true} duration={500}>
            <Link to={"/"}>
              <div className="flex mobile:justify-center">
                <img src={logo} alt="" className="w-[120px]" />
              </div>
            </Link>
          </ScrollLink>
          <p className="text-xs leading-relaxed my-4">
            We pride ourselves on delivering innovative and sustainable
            architectural designs tailored to meet the unique needs of our
            clients.
          </p>
          {/* <div className="border-2 border-green-200"> */}
          <div className="flex gap-2 mobile:justify-center">
            <a
              className="bg-primary grid p-1 place-content-center rounded-md  hover:bg-primary/90"
              target="_blank" href="https://www.instagram.com/arcline.architects?igsh=OTN5cDIwc3NhdTBu"
            >
              <InstagramIcon style={{ fontSize: 24, color: "#fff" }} />
            </a>
            <a
              className="bg-primary grid p-1 place-content-center rounded-md hover:bg-primary/90 "
              target="_blank" href="https://www.facebook.com/share/j161GuLrF2zwWW5C/?mibextid=qi2Omg"
            >
              <FacebookIcon style={{ fontSize: 24, color: "#fff" }} />
            </a>
            {/* <a className="bg-primary grid p-1 place-content-center rounded-md  hover:bg-primary/90">
              <XIcon style={{ fontSize: 24, color: "#fffF" }} />
            </a> */}
            {/* <a className="bg-primary grid p-1 place-content-center rounded-md  hover:bg-primary/90">
              <YouTubeIcon style={{ fontSize: 24, color: "#fff" }} />
            </a> */}
            <a
              className="bg-primary grid p-1 place-content-center rounded-md  hover:bg-primary/90"
              target="_blank" href="https://www.linkedin.com/in/ankit-vishwakarma-a33a0b165?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            >
              <LinkedInIcon style={{ fontSize: 24, color: "#fff" }} />
            </a>
          </div>
          <div className="pt-4 hidden mobile:flex mobile: justify-center ">
            <p className="text-darkGrey text-xs mb-1  hover:text-black  mobile:text-primary">
              <Link to="/policy" className="inline-block mobile:w-[100px]">
                Privacy Policy
              </Link>
            </p>
            <p className="text-darkGrey text-xs mb-1 hover:text-black  mobile:text-primary">
              <Link to="/help">Help</Link>
            </p>
          </div>
        </div>
        <div className="flex gap-2 justify-between mobile:hidden  w-[40%]">
          <div className="">
            <h1 className="text-sm text-primary mb-2 font-semibold">
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
          <div className=" ">
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
          <div className="">
            <h1 className="text-sm text-primary mb-2 font-semibold ">Other</h1>
            <p className="text-darkGrey text-xs mb-1  hover:text-black">
              <Link to="/policy" className="inline-block mobile:w-[100px]">
                Privacy Policy
              </Link>
            </p>
            <p className="text-darkGrey text-xs mb-1 hover:text-black">
              <Link to="/help">Help</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="text-xs text-darkGrey text-center py-4">
        "© 2024 Arcline Designs. All rights reserved." <br /> "Contact us for
        creating your website - +91 63785 89875"
      </div>
    </div>
  );
};

export default Footer;
