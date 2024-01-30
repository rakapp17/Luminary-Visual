import React from "react";
import Image from "next/image";
import hero05 from "../../../public/Hero5.png";
import hero08 from "../../../public/Hero8.png";
function Portofolio() {
  return (
    <div className="w-full h-[840px] md:mt-8 md:flex md:h-[400px] lg:h-[600px] xl:h-[840px]">
      <div className="relative w-full h-[50%] md:h-full flex items-center justify-center cursor-pointer hover:scale-105 hover:ease-in-out transition duration-500 ">
        <div className="absolute inset-0">
          <Image
            src={hero05}
            alt="background image"
            fill
            className="object-cover bg-center"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h2 className=" text-white text-center text-[30px] font-normal">
            Couple
          </h2>
        </div>
      </div>
      <div className="relative w-full h-[50%] md:h-full flex items-center justify-center cursor-pointer hover:scale-105 hover:ease-in-out transition duration-500 ">
        <div className="absolute inset-0">
          <Image
            src={hero08}
            alt="background image"
            fill
            className="object-cover bg-center"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h2 className=" text-white text-center text-[30px] font-normal">
            Graduation
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Portofolio;
