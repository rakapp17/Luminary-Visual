import React from "react";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";
import { TiSocialInstagram } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { IoMdPin } from "react-icons/io";

function Footeritem() {
  return (
    <div className="w-full h-[200px] flex bg-black px-16 pt-8 pb-4 py-4">
      <div className="w-1/3 h-full  px-10 flex flex-col gap-2">
        <h2 className="text-white font-bold text-[12px]  lg:text-[14px] md:text-[12px] xl:text-[14px] 2xl:text-[18px]">
          Link
        </h2>
        <Link
          className="text-white font-normal text-[12px]  lg:text-[14px] md:text-[12px] xl:text-[14px] 2xl:text-[14px] hover:text-white"
          href="/"
        >
          Home
        </Link>
        <Link
          className="text-white font-normal text-[12px]  lg:text-[14px] md:text-[12px] xl:text-[14px] 2xl:text-[14px] hover:text-white"
          href="/"
        >
          Portofolio
        </Link>
        <Link
          className="text-white font-normal text-[12px]  lg:text-[14px] md:text-[12px] xl:text-[14px] 2xl:text-[14px] hover:text-white"
          href="/"
        >
          Blog
        </Link>
        <Link
          className="text-white font-normal text-[12px]  lg:text-[14px] md:text-[12px] xl:text-[14px] 2xl:text-[14px] hover:text-white"
          href="/"
        >
          Info
        </Link>
        <Link
          className="text-white font-normal text-[12px]  lg:text-[14px] md:text-[12px] xl:text-[14px] 2xl:text-[14px] hover:text-white"
          href="/"
        >
          Contact
        </Link>
      </div>
      <div className="w-1/3 h-full px-10">
        <h2 className="text-white font-bold text-[12px] lg:text-[14px] md:text-[12px] xl:text-[14px] 2xl:text-[18px]">
          Social Media
        </h2>
        <div className="flex gap-1 md:gap-3 lg:gap-4 w-full mt-2">
          <Link href={"/"}>
            <IoLogoWhatsapp size={22} color="white" />
          </Link>
          <Link href={"/"}>
            <TiSocialInstagram size={22} color="white" />
          </Link>
          <Link href={"/"}>
            <FaYoutube size={22} color="white" />
          </Link>
          <Link href={"/"}>
            <FaTiktok size={22} color="white" />
          </Link>
        </div>
      </div>
      <div className="w-1/3 h-full  px-10">
        <h2 className="text-white font-bold text-[12px]  lg:text-[14px] md:text-[12px] xl:text-[14px] 2xl:text-[18px]">
          Address
        </h2>
        <div className="flex items-center gap-2 w-full mt-2">
          <IoLogoWhatsapp size={15} color="white" />
          <p className="text-white font-normal text-[12px]">088218936474</p>
        </div>
        <div className="flex items-center gap-2 w-full mt-2">
          <MdAttachEmail size={15} color="white" />
          <p className="text-white font-normal text-[12px]">
            rakap17@gmail.com
          </p>
        </div>
        <div className="flex items-start gap-2 w-full mt-2">
          <IoMdPin size={15} color="white" />
          <p className="text-white font-normal text-[12px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis numquam voluptatum in dolore ratione reprehenderit?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footeritem;
