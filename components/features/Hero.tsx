import Image from "next/image";
import React from "react";
import HeroBackground from "@/public/hero-bg.png";
import { jost, jostSemiBold } from "@/utils/fonts";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center sm:h-full h-screen pt-10">
      <div className="absolute -z-10 border h-full w-full">
        <Image
          src={HeroBackground}
          alt="hero background"
          priority
          className="sm:max-h-screen h-full object-cover object-[5px]"
        />
      </div>

      <div className="sm:px-40 px-3 sm:pt-0 pt-28 flex flex-col justify-center items-center text-center h-full gap-10 sm:w-1/2">
        <h1
          className={`${jostSemiBold.className} sm:text-7xl text-5xl font-bold text-primary sm:leading-[100px]`}
        >
          Break Rules, Wear Rastus
        </h1>
        <p className={`${jost.className} text-xl text-primary`}>
          Upgrade Your Wardrobe with the Timeless Elegance of Clothes: Elevate
          Your Style Game Now with Rastus!
        </p>

        <Link
          href="/#products"
          className={`${jost.className} text-[18px] border border-primary text-white-primary bg-primary hover:bg-transparent hover:text-primary w-[223px] h-[64px] rounded transition-colors flex items-center justify-center`}
        >
          SHOP NOW
        </Link>
      </div>
    </div>
  );
};

export default Hero;
