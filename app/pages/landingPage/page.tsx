import Image from "next/image";
import React from "react";
import HeroBackground from "@/public/hero-bg.png";
import Navbar from "@/app/components/Navbar";

const LandingPage = () => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute -z-10">
        <Image src={HeroBackground} alt="hero background" />
      </div>
      <Navbar />
    </div>
  );
};

export default LandingPage;
