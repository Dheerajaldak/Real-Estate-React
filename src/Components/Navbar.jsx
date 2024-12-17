import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10  bg-black/30 bg-opacity-10">
      <div className=" container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        {/* <img src={assets.logo} alt="" /> */}
        <Link to="/home">
          <img src={assets.logo} alt="" />
        </Link>
        <ul className="hidden md:flex gap-7 text-white flex">
          <li>
            <Link className="cursor-pointer hover:text-gray-400" to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link className="cursor-pointer hover:text-gray-400" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="cursor-pointer hover:text-gray-400" to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="cursor-pointer hover:text-gray-400"
              to="/testimonials"
            >
              Testimonials
            </Link>
          </li>
        </ul>
        <Link to="/signup">
          <button className="hidden md:block bg-white px-8 py-2 rounded-full">
            Sign up
          </button>
        </Link>
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          className="md:hidden w-7 "
          alt=""
        />
      </div>
      {/*--------- Mobile-menu ------ */}
      <div
        className={`md:hidden ${
          showMobileMenu ? "fixed w-full" : "h-0 w-0"
        }  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            className="w-6 cursor-pointer"
            alt=""
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <li>
            <Link
              onClick={() => setShowMobileMenu(false)}
              to="/home"
              className="px-4 py2 rounded-full inline-block"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setShowMobileMenu(false)}
              to="/about"
              className="px-4 py2 rounded-full inline-block"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setShowMobileMenu(false)}
              to="/projects"
              className="px-4 py2 rounded-full inline-block"
            >
              Project
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setShowMobileMenu(false)}
              to="/testimonials"
              className="px-4 py2 rounded-full inline-block"
            >
              Testimonials
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
