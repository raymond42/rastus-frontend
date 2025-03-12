import Image from "next/image";
import React from "react";
import HeroBackground from "@/public/hero-bg.png";
import Navbar from "@/app/components/Navbar";
import { frankRuhlLibrev, frankRuhlLibrevBold } from "@/app/utils/fonts";

const LandingPage = () => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute -z-10">
        <Image src={HeroBackground} alt="hero background" />
      </div>
      <Navbar />
      <div className="px-40 flex flex-col justify-center h-screen gap-16 w-1/2">
        <h1
          className={`${frankRuhlLibrevBold.className} text-[78px] font-bold text-primary`}
        >
          Find the Best Fashion Style For You
        </h1>
        <p className={`${frankRuhlLibrev.className} text-[22px] text-primary`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          ullamcorper congue eros, eget tincidunt ipsum eleifend ut.{" "}
        </p>
        <button
          className={`${frankRuhlLibrev.className} text-[18px] border border-primary text-white bg-primary hover:bg-transparent hover:text-primary w-[223px] h-[64px] rounded transition-colors`}
        >
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
