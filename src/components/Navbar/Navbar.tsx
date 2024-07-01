// import React from 'react'
import Navlinks from "./Navlinks";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

export default function Navbar() {
  let nav_links = {
    padding: "0 1rem",
    fontWeight: 500,
  };

  return (
    <nav className="font-1 bg-white text-black h-[70px] w-full py-1 px-16 fixed z-[99] flex justify-between sm:items-center drop-shadow-md ">
      <div className="logo md:w-auto w-full flex justify-between sm:p-0 px-8 py-2 z-[99]">
        <Link to="/" className="text-3xl font-bold">
          Fips
        </Link>
      </div>
      <ul className="nav_links md:flex hidden capitalize">
        <li
          style={nav_links}
          className="hover:border-b-4 hover:border-purple-500 duration-300"
        >
          <Link to="/home" className="leading-[70px]">
            home
          </Link>
        </li>
        <li>
          <Navlinks />
        </li>
      </ul>
      {/* search section */}
      <div className="flex items-center w-[400px] h-[35px] border border-[#c6c6c6] rounded">
        <div className=" ">
          <a
            href=""
            className="block py-[5px] px-[9px] text-2xl bg-[#f5f5f6] rounded"
          >
            {<BiSearch />}
          </a>
        </div>
        <div className="w-full">
          <input
            type="text"
            placeholder="Search for products, brands, and more."
            autoComplete="off"
            className="bg-white  w-full  px-[10px] outline-none"
          />
        </div>
      </div>
      <div className="flex">
        <a href="" className="text-2xl px-3">
          {<AiOutlineUser />}
        </a>
        <a href="" className="text-2xl px-3">
          {<AiOutlineHeart />}
        </a>
        <a href="" className="text-2xl px-3">
          {<PiShoppingCartSimpleBold />}
        </a>
      </div>
    </nav>
  );
}
