import React from "react";

function Quote() {
  return (
    <div className="px-16 py-10 w-full h-auto md:flex md:justify-between lg:h-[300px] 2xl:h-[500px]  md:relative">
      <div>
        <h2 className=" text-[#412d20] font-semibold text-[28px] mb-5 xl:text-[27px] lg:text-[26px] md:text-[14px] 2xl:text-[50px] pb-3md:absolute md:w-[50%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          reprehenderit ex unde aliquid fugit velit at temporibus explicabo ea,
          vitae nesciunt voluptatum.
        </h2>
      </div>
      <div>
        <h5 className=" text-[#412d20] text-[12px] text-right md:ml-0  xl:text-[15px] lg:text-[14px] md:text-[10px] 2xl:text-[27px] px-10 md:flex md:items-end md:absolute md:w-[50%] md:bottom-0 md:right-0 ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
          quibusdam magni totam, laboriosam doloremque vero ab rerum minima
          iusto numquam.
        </h5>
      </div>
    </div>
  );
}

export default Quote;
