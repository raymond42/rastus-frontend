import React from "react";
import { frankRuhlLibrev, frankRuhlLibrevBold } from "../utils/fonts";
import CardSlider from "./CardSlider";

const WhatPeopleSay = () => {
  return (
    <div className="h-screen">
      <div className="w-full flex gap-5 flex-col justify-center items-center p-10">
        <h1
          className={`${frankRuhlLibrevBold.className} text-[48px] text-primary`}
        >
          What People Say About Us
        </h1>
        <p
          className={`${frankRuhlLibrev.className} text-[20px] leading-[180%]`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          ullamcorper congue eros
        </p>
      </div>
      <CardSlider />
    </div>
  );
};

export default WhatPeopleSay;
