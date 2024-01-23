import React from "react";
import Navbar from "../components/Navbar";
import Footeritem from "../components/Footeritem";
function page() {
  return (
    <div>
      <Navbar />
      <div className="bg-black w-full h-auto flex flex-col justify-center items-center">
        <img className="w-auto h-screen" src="/logo.png" alt="Logo" />
        <div className="w-[80%] lg:w-[50%] h-auto mb-8">
          <p className="text-white text-[12px] lg:text-[16px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
            veniam id aliquam odit a corporis.
          </p>
          <br />
          <p className="text-white text-[12px] lg:text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt vitae
            illo expedita fugit laborum! Voluptatum magni nihil ad itaque
            maiores quaerat optio cupiditate quas repudiandae ea error corporis
            laboriosam consectetur nesciunt molestias, deserunt aspernatur.
            Ducimus eius perferendis deleniti maxime. Ex similique ratione
            minima velit incidunt fuga natus consequuntur dolorem magni.
          </p>
          <br />
          <p className="text-white text-[12px] lg:text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            eum ratione. Eum fugiat pariatur veritatis repellat dolor fugit, qui
            accusamus?
          </p>
          <br />
          <p className="text-white text-[12px] lg:text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            eum ratione. Eum fugiat pariatur veritatis repellat dolor fugit, qui
            accusamus?
          </p>
        </div>
      </div>
      <Footeritem />
    </div>
  );
}

export default page;
