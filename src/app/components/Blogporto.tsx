import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "./Footer";
function Blogporto() {
  return (
    <div>
      <div className="mt-8">
        <h2 className="text-xl text-center font-bold mb-8">
          Our Latest Photowork
        </h2>
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
      <Footer />
    </div>
  );
}

export default Blogporto;
