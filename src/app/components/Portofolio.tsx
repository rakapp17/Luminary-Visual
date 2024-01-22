import React from "react";

function Portofolio() {
  return (
    <div className="w-full h-[840px] md:mt-8 md:flex md:h-[400px] lg:h-[600px] xl:h-[840px]">
      <div className="w-full h-[50%] md:h-full bg-[url('/hero5.jpg')] bg-center bg-cover flex items-center justify-center cursor-pointer hover:scale-105 hover:ease-in-out transition duration-500 ">
        <p className="text-white inline text-xl">Couple</p>
      </div>
      <div className="w-full h-[50%] md:h-full bg-[url('/hero8.jpg')] bg-center bg-cover flex items-center justify-center cursor-pointer hover:scale-105 hover:ease-in-out transition duration-500">
        <p className="text-white inline text-xl">Graduation</p>
      </div>
    </div>
  );
}

export default Portofolio;
