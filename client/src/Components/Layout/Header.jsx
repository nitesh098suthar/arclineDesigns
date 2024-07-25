import React, { useState } from "react";
import logo from "/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Element } from "react-scroll";
const Header = ({ navVisible, setNavVisible }) => {
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/category/all", label: "Category" },
    { to: "/about-us", label: "About Us" },
    { to: "/contact-us", label: "Contact Us" },
  ];

  const showNavigation = () => {
    setNavVisible(true);
  };

  const closingNav = () => {
    setNavVisible(false);
  };

  return (
    <div className="">
      <Element name="home" className="element"></Element>
      <div className={`navSlider z-30 ${navVisible ? "open" : ""}`}>
        <div className=" w-[80%] float-right absolute right-0 flex justify-center items-center h-screen">
          <div
            className={`p-2 border-2 border-lightGrey rounded-full bg-white w-[44px] h-[44px] absolute top-10 left-[-88px] z-10 ${
              navVisible ? "block" : "hidden"
            }`}
            onClick={closingNav}
          >
            <KeyboardDoubleArrowRightIcon className="text-primary" />
          </div>
          <div className="flex flex-col  items-center justify-center absolute left-[-9%] top-20 ">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-center font-semibold text-primary w-[100%] py-4 px-20"
                onClick={closingNav}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center h-16 border-b-[1px] border-lightGrey px-6 mobile:no-wrap">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-[120px] cursor-pointer" />
        </Link>
        <div className="flex gap-1 p-1 mobile:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              className={`text-sm ${
                location.pathname === link.to ||
                (link.to === "/category/all" &&
                  location.pathname.startsWith("/category"))
                  ? "text-primary font-bold"
                  : "text-darkGrey hover:text-darkGrey/90"
              } px-3 py-1 rounded-md`}
              to={link.to}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex gap-2 items-center">
          <a
            className="bg-green-500 px-4 py-2 flex gap-1 items-center justify-center rounded-md hover:bg-green-500/90"
            href="https://wa.me/919636537466"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon className="text-white" />
            <p className="pt-[1px] text-white text-sm hidden sm:block">
              WhatsApp
            </p>
          </a>
          <span
            className="hidden border-[1px] border-lightGrey px-2 py-2 rounded-md hover:lightGrey mobile:grid mobile:place-items-center"
            onClick={showNavigation}
          >
            <MenuIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
