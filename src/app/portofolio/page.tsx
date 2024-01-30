import React from "react";
import Navbarabu from "../components/Navbarabu";
import Portofolio from "../components/Portofolio";
import Blogporto from "../components/Blogporto";
import Image from "next/image";
import hero4 from "../../../public/Hero4.png";

function page() {
  return (
    <div>
      <div>
        <Navbarabu />
      </div>
      <div className="w-full h-svh relative">
        <div className="absolute inset-0">
          <Image
            src={hero4}
            alt="background image"
            fill
            className="object-cover bg-center"
          />
        </div>
      </div>
      <Blogporto />
    </div>
  );
}

export default page;
