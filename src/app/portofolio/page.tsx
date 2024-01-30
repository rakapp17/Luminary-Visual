import React from "react";
import Navbarabu from "../components/Navbarabu";
import Portofolio from "../components/Portofolio";
import Blogporto from "../components/Blogporto";
import Image from "next/image";
function page() {
  return (
    <div>
      <div>
        <Navbarabu />
      </div>
      <div className="w-full h-svh relative">
        <div className="absolute inset-0">
          <Image
            src={"/static/image/Hero04.png"}
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
