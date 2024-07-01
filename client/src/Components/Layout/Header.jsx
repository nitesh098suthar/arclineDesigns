import React, { useState } from "react";
import logo from "/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const Header = () => {
  const location = useLocation();
  const [navVisible, setNavVisible] = useState(false);

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
    <div>
      <div className={`navSlider ${navVisible ? "open" : ""}`}>
        <div className="h-[100vh] w-[80%] bg-white border-l-2 float-right absolute right-0 flex justify-center items-center">
          <div
            className="p-2 border-2 border-lightGrey rounded-full bg-white w-[44px] h-[44px] absolute top-10 left-[-22px] z-10"
            onClick={closingNav}
          >
            <KeyboardDoubleArrowRightIcon className="text-primary" />
          </div>
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-center font-semibold text-primary border-b-2 border-lightGrey w-[100%] py-4 px-20"
                onClick={closingNav}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex mobile:px-2 justify-between items-center h-16 border-b-[1px] border-lightGrey px-14 mobile:no-wrap xxs:no-wrap">
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
            className="bg-green-500 px-3 py-1 flex gap-1 items-center justify-center rounded-md hover:bg-green-500/90"
            href="https://wa.me/919636537466"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon className="text-white" />
            <p className="pt-[1px] text-white text-sm">WhatsApp</p>
          </a>
          <span
            className="hidden mobile:block xxs:block border-[1px] border-lightGrey p-[2px] rounded-md hover:lightGrey"
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
