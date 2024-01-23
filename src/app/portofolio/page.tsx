import React from "react";
import Navbarabu from "../components/Navbarabu";
import Portofolio from "../components/Portofolio";
import Blogporto from "../components/Blogporto";
function page() {
  return (
    <div>
      <div>
        <Navbarabu />
      </div>
      <div className="w-full h-svh bg-[url('/hero5.jpg')] bg-center bg-cover"></div>
      <Blogporto />
    </div>
  );
}

export default page;
