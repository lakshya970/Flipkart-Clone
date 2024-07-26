import React, { useState } from "react";
import logo from "../assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiMobileDownloadLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { AiOutlineShop } from "react-icons/ai";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ text }) => {
  return (
    <header className=" sticky top-0 z-20">
      {/*  navbar  */}
      <nav className="flex justify-between items-center   h-[48px] px-5 md:h-[65px] md:px-16 bg-white overflow-hidden md:gap-4 ">
        <div className="flex items-center gap-4">
          <RxHamburgerMenu size={21} className="sm:hidden cursor-pointer" />
          <div>
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img src={logo} alt="" className="w-[100px]" />
            </Link>
          </div>
        </div>
        <div className="hidden md:flex ">
          <form className=" px-3 py-2 bg-blue-50 flex items-center rounded-md  w-[250px] lg:w-[500px]">
            <CiSearch size={23} />

            <input
              type="text"
              placeholder="Search for Products, Brands and More"
              className=" bg-transparent w-full focus:outline-none px-3"
            />
          </form>
        </div>
        <div className="flex items-center gap-3 md:gap-8">
          <RiMobileDownloadLine size={21} className="md:hidden" />
          <NavLink to="/Login">
            <span
              className={`flex items-center gap-2 cursor-pointer  md:px-3 md:py-2 rounded-lg md:hover:bg-blue-600 md:hover:text-white`}
            >
              <FaRegUserCircle size={21} />
              <button>Login</button>
              <FiChevronDown className=" hidden sm:flex hover:rotate-180 duration-300" />
            </span>
          </NavLink>

          <span className="flex items-center gap-2 cursor-pointer relative">
            <IoCartOutline size={23} className="isolate" />
            <p className=" absolute -right-2 -top-2 bg-red-500 px-2 rounded-full ">
              {text}
            </p>
            <button className="hidden lg:flex">Cart</button>
          </span>
          <span className="flex items-center gap-2 cursor-pointer hidden md:flex items-center">
            <AiOutlineShop size={22} />
            <button className="hidden lg:flex">Become a Seller</button>
          </span>
          <span className=" cursor-pointer hidden md:flex ">
            <PiDotsThreeVerticalBold size={23} />
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
