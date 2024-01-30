"use client";

import React from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
const handleClick = () => {
  const hamburger = document.querySelector("#hamburger");
  const navMenu = document.querySelector("#nav-menu");
  // hamburger?.classList.toggle("hidden");
  navMenu?.classList.toggle("hidden");
};

function Navbarabu() {
  const [header, setHeader] = useState(false);
  // const Scroll = () => {
  //   if (window.scrollY >= 0) {
  //     setHeader(true);
  //   } else {
  //     setHeader(false);
  //   }

  //   useEffect(() => {
  //     window.addEventListener("scroll", scrollHeader);
  //   }, []);
  // };
  return (
    <div>
      <div
        id="nav"
        className="bg-slate-600 w-full h-[80px] lg:h-[85px] flex justify-between items-center px-8 md:px-16 lg:px-20 xl:px-24 md:h-[70px] xl:h-[100px] 2xl:h-[120px] z-20"
        // // className={
        // //   header
        // //     ? "bg-red-700"
        // //     : "bg-red-300 w-full h-[80px] lg:h-[85px] flex justify-between items-center px-8 md:px-16 lg:px-20 xl:px-24 md:h-[70px] xl:h-[100px] 2xl:h-[120px] z-20 fixed"
        // }
      >
        <div>
          {/* <Image src={Logo} alt="logo" width={80} height={32} /> */}
          <h1 className="text-white font-bold text-[20px] xl:text-[30px] lg:text-[24px] md:text-[22px] 2xl:text-[38px] ">
            Luminary
          </h1>
          <h2 className="text-white font-bold text-[20px] xl:text-[30px] lg:text-[24px] md:text-[22px] 2xl:text-[38px] ">
            Visual
          </h2>
        </div>
        <div className="hidden md:flex-row gap-16 md:flex md:gap-8  xl:gap-14 2xl:gap-32">
          <Link
            className="text-white font-normal  lg:text-[13px] md:text-[12px] xl:text-[14px] 2xl:text-[18px] hover:scale-105 hover:font-bold hover:ease-out transition duration-300"
            href="/"
          >
            HOME
          </Link>
          <Link
            className="text-white font-normal lg:text-[13px] md:text-[12px] xl:text-[14px] 2xl:text-[18px] hover:scale-105 hover:font-bold hover:ease-out transition duration-300 "
            href="portofolio"
          >
            PORTOFOLIO
          </Link>
          <Link
            className="text-white font-normal lg:text-[13px] md:text-[12px] xl:text-[14px] 2xl:text-[18px] hover:scale-105 hover:font-bold hover:ease-out transition duration-300"
            href="/"
          >
            BLOG
          </Link>
          <Link
            className="text-white font-normal lg:text-[13px] md:text-[12px] xl:text-[14px] 2xl:text-[18px] hover:scale-105 hover:font-bold hover:ease-out transition duration-300"
            href="/"
          >
            INFO
          </Link>
          <Link
            className="text-white font-normal lg:text-[13px] md:text-[12px] xl:text-[14px] 2xl:text-[18px] hover:scale-105 hover:font-bold hover:ease-out transition duration-300"
            href="about"
          >
            CONTACT
          </Link>
        </div>
        <div id="hamburger" className="md:hidden cursor-pointer">
          <button onClick={handleClick}>
            <RxHamburgerMenu size={38} color="white" />
          </button>
        </div>
      </div>
      <div>
        <div
          id="nav-menu"
          className=" hidden bg-[#ebbf87] w-full h-svh flex flex-col items-center pt-[30px] pb-[120px] gap-12 z-20 transition-opacity transition-duration-500ms fixed"
        >
          <button onClick={handleClick}>
            <IoCloseOutline size={50} color="white" />
          </button>
          <div className="w-[80%] h-[2px] bg-white"></div>
          <Link className="text-[18px] text-white " href="/">
            HOME
          </Link>
          <div className="w-[80%] h-[1px] bg-white bg-opacity-30"></div>
          <Link className=" text-[18px] text-white " href="/">
            PORTOFOLIO
          </Link>
          <div className="w-[80%] h-[1px] bg-white bg-opacity-30"></div>
          <Link className=" text-[18px] text-white " href="/">
            BLOG
          </Link>
          <div className="w-[80%] h-[1px] bg-white bg-opacity-30"></div>
          <Link className=" text-[18px] text-white " href="/">
            INFO
          </Link>
          <div className="w-[80%] h-[1px] bg-white bg-opacity-30"></div>
          <Link className=" text-[18px] text-white " href="/">
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbarabu;
