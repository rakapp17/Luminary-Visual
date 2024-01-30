"use client";

import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image from "next/image";

function Slider() {
  const fadeImages = [
    {
      url: "/Hero.png",
      caption: "First Slide",
    },
    {
      url: "/Hero2.png",
      caption: "Second Slide",
    },
    {
      url: "/Hero3.png",
      caption: "Third Slide",
    },
    {
      url: "/Hero4.png",
      caption: "Third Slide",
    },
    {
      url: "/Hero5.png",
      caption: "Third Slide",
    },
    {
      url: "/Hero6.png",
      caption: "Third Slide",
    },
  ];

  return (
    <div className="slide-container w-full h-svh">
      <Fade
        pauseOnHover={false}
        duration={3000}
        arrows={false}
        canSwipe={true}
        cssClass="w-full h-svh"
      >
        {fadeImages.map((fadeImage, index) => (
          <div className="w-full h-full flex" key={index}>
            <Image
              width={1920}
              height={1080}
              className="w-full h-svh object-cover"
              src={fadeImage.url}
              alt="hero"
            />
          </div>
        ))}
      </Fade>
    </div>
  );
}

export default Slider;
