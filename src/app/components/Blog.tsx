import React from "react";
import Image from "next/image";
import Link from "next/link";

function Blog() {
  return (
    <div>
      <div className="mt-8">
        <p className="text-[10px] text-center font-regular mb-2">FEATURED</p>
        <h2 className="text-4xl text-center font-bold mb-8">Blog Post</h2>
      </div>

      <div className="w-full h-auto p-4 flex flex-row flex-wrap justify-center items-center gap-3">
        {/* <Image src="/hero.jpg" alt="hero" fill={true}></Image>
        <Image src="/hero.jpg" alt="hero" fill={true}></Image>
        <Image src="/hero.jpg" alt="hero" fill={true}></Image>
        <Image src="/hero.jpg" alt="hero" fill={true}></Image>
        <Image src="/hero.jpg" alt="hero" fill={true}></Image>
        <Image src="/hero.jpg" alt="hero" fill={true}></Image> */}
        <Link href={"/"} className="w-[330px] h-[210px] border-2">
          <Image
            width={330}
            height={210}
            className="w-full h-full object-cover"
            src="/hero.jpg"
            alt="pic1"
          />
        </Link>
        <Link href={"/"} className="w-[330px] h-[210px]">
          <Image
            width={330}
            height={210}
            className="w-full h-full object-cover"
            src="/hero.jpg"
            alt="pic1"
          />
        </Link>
        <Link href={"/"} className="w-[330px] h-[210px]">
          <Image
            width={330}
            height={210}
            className="w-full h-full object-cover"
            src="/hero.jpg"
            alt="pic1"
          />
        </Link>
        <Link href={"/"} className="w-[330px] h-[210px]">
          <Image
            width={330}
            height={210}
            className="w-full h-full object-cover"
            src="/hero.jpg"
            alt="pic1"
          />
        </Link>
        <Link href={"/"} className="w-[330px] h-[210px]">
          <Image
            width={330}
            height={210}
            className="w-full h-full object-cover"
            src="/hero.jpg"
            alt="pic1"
          />
        </Link>
        <Link href={"/"} className="w-[330px] h-[210px]">
          <Image
            width={330}
            height={210}
            className="w-full h-full object-cover"
            src="/hero.jpg"
            alt="pic1"
          />
        </Link>
      </div>
      <div className="w-full h-auto p-8 flex justify-center items-center">
        <button className=" bg-slate-600 text-white font-bold text-sm p-3 rounded-xl hover:bg-slate-800">
          View All Portofolio
        </button>
      </div>
    </div>
  );
}

export default Blog;
