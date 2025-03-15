import Image from "next/image";
import React from "react";
import HeroBackground from "@/public/hero-bg.png";
import Navbar from "@/app/components/Navbar";
import { frankRuhlLibrev, frankRuhlLibrevBold } from "@/app/utils/fonts";

const Hero = () => {
  return (
    <div className="relative w-full max-h-screen pt-10">
      <div className="absolute -z-10">
        <Image
          src={HeroBackground}
          alt="hero background"
          priority
          className="max-h-screen"
        />
      </div>
      <div className="absolute bg-white w-full">
        <Navbar />
      </div>
      <div className="px-40 flex flex-col justify-center h-screen gap-10 w-1/2">
        <h1
          className={`${frankRuhlLibrevBold.className} text-7xl font-bold text-primary leading-[100px]`}
        >
          Find the Best Fashion Style For You
        </h1>
        <p className={`${frankRuhlLibrev.className} text-xl text-primary`}>
          Upgrade Your Wardrobe with the Timeless Elegance of Clothes: Elevate
          Your Style Game Now with Rastus!
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

export default Hero;
