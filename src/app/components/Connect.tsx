import React from "react";
import Image from "next/image";
import hero07 from "../../../public/Hero7.png";

function Connect() {
  return (
    <div className="relative w-full h-[646px]">
      <div className="absolute inset-0">
        <Image
          src={hero07}
          alt="background image"
          fill
          className="object-cover bg-center"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h2 className=" text-white text-center text-[30px] font-bold mb-2">
          Lets&apos; Connect
        </h2>
        <button className="text-white px-3 py-2 border-2 border-white rounded-xl self-center ml-[8px] hover:bg-white hover:text-slate-600">
          Download Pricelist
        </button>
      </div>
    </div>
  );
}

export default Connect;
