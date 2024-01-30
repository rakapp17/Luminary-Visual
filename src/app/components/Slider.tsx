"use client";

import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image from "next/image";

function Slider() {
  const fadeImages = [
    {
      url: "/Hero.jpg",
      caption: "First Slide",
    },
    {
      url: "/Hero2.jpg",
      caption: "Second Slide",
    },
    {
      url: "/Hero3.jpg",
      caption: "Third Slide",
    },
    {
      url: "/Hero4.jpg",
      caption: "Third Slide",
    },
    {
      url: "/Hero5.jpg",
      caption: "Third Slide",
    },
    {
      url: "/Hero6.jpg",
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
