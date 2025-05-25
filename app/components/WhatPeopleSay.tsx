import React from "react";
import { jost, jostSemiBold } from "../utils/fonts";
// import CardSlider from "./CardSlider";

const WhatPeopleSay = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <div className="w-full flex flex-col gap-5 items-center px-4 sm:px-8 lg:px-16 text-center py-10">
        <h1
          className={`${jostSemiBold.className} text-[32px] sm:text-[40px] lg:text-[48px] text-primary`}
        >
          What People Say About Us
        </h1>
        <p
          className={`${jost.className} text-[16px] sm:text-[18px] lg:text-[20px] leading-[180%] max-w-2xl`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          ullamcorper congue eros.
        </p>
      </div>
      <div className="w-full pb-10 px-4">{/* <CardSlider /> */}</div>
    </div>
  );
};

export default WhatPeopleSay;
