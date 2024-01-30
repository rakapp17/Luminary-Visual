import React from "react";

function Connect() {
  return (
    <div className="w-full h-[646px] bg-[url('/hero7.jpg')] bg-cover flex items-center justify-center backdrop-blur-lg backdrop-brightness-50 bg-center">
      <div className="items-center justify-center">
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
