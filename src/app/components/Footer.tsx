import React from "react";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";
import { TiSocialInstagram } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { IoMdPin } from "react-icons/io";
function Footer() {
  return (
    <div className="w-full h-[200px] mt-8 flex bg-slate-600 px-16 pt-8 pb-4 py-4">
      <div className="w-[25%] h-full  px-10 flex flex-col gap-2">
        <h2 className="text-white font-bold  lg:text-[14px] md:text-[12px] xl:text-[14px] 2xl:text-[18px]">
          Link
        </h2>
        <Link
          className="text-slate-400 font-normal  lg:text-[12px] md:text-[12px] xl:text-[14px] 2xl:text-[18px]"
          href="/"
        >
          Home
        </Link>
        <Link
          className="text-slate-400 font-normal lg:text-[12px] md:text-[12px] xl:text-[14px] 2xl:text-[18px]"
          href="/"
        >
          Portofolio
        </Link>
        <Link
          className="text-slate-400 font-normal lg:text-[12px] md:text-[12px] xl:text-[14px] 2xl:text-[18px]"
          href="/"
        >
          Blog
        </Link>
        <Link
          className="text-slate-400 font-normal lg:text-[12px] md:text-[12px] xl:text-[14px] 2xl:text-[18px]"
          href="/"
        >
          Info
        </Link>
        <Link
          className="text-slate-400 font-normal lg:text-[12px] md:text-[12px] xl:text-[14px] 2xl:text-[18px]"
          href="/"
        >
          Contact
        </Link>
      </div>
      <div className="w-[25%] h-full px-10">
        <h2 className="text-white font-bold lg:text-[14px] md:text-[12px] xl:text-[14px] 2xl:text-[18px]">
          Social Media
        </h2>
        <div className="flex gap-4 w-full mt-2">
          <IoLogoWhatsapp size={22} color="#94a3b8" />
          <TiSocialInstagram size={22} color="#94a3b8" />
          <FaYoutube size={22} color="#94a3b8" />
          <FaTiktok size={22} color="#94a3b8" />
        </div>
      </div>
      <div className="w-auto h-full  px-10">
        <h2 className="text-white font-bold  lg:text-[14px] md:text-[12px] xl:text-[14px] 2xl:text-[18px]">
          Address
        </h2>
        <div className="flex items-center gap-2 w-full mt-2">
          <IoLogoWhatsapp size={15} color="#94a3b8" />
          <p className="text-slate-400 font-normal text-[12px]">088218936474</p>
        </div>
        <div className="flex items-center gap-2 w-full mt-2">
          <MdAttachEmail size={15} color="#94a3b8" />
          <p className="text-slate-400 font-normal text-[12px]">
            rakap17@gmail.com
          </p>
        </div>
        <div className="flex items-start gap-2 w-full mt-2">
          <IoMdPin size={40} color="#94a3b8" />
          <p className="text-slate-400 font-normal text-[12px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis numquam voluptatum in dolore ratione reprehenderit?
          </p>
        </div>
      </div>
      <div className="w-[25%] h-full px-10"></div>
    </div>
  );
}

export default Footer;
