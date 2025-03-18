import React from "react";
import Image from "next/image";
import { frankRuhlLibrev, frankRuhlLibrevBold } from "@/app/utils/fonts";
import aboutUsCover from "@/public/about-us-cover.png";
import SquaredDots from "@/public/newCollection/squared-dots.svg";
import logoWithBackground from "@/public/logo-color.png";

type Stat = {
  number: string;
  text: string;
};

const stats: Stat[] = [
  { number: "2025", text: "Rastus Founded" },
  { number: "5000+", text: "Products Sold" },
  { number: "1090+", text: "Best Reviews" },
];

const About: React.FC = () => {
  return (
    <div className="w-full h-screen p-40 relative">
      {/* Main About Section */}

      <div className="flex w-full justify-between relative">
        {/* Left Image Section */}

        <div className="w-1/2 relative">
          <div className="w-[140px] h-[98px] absolute right-16 -top-10">
            <Image
              src={SquaredDots}
              alt="squared dots"
              priority
              width={0}
              height={0}
              className="absolute w-[140px] h-[98px]"
            />
          </div>
          <Image
            src={aboutUsCover}
            alt="About Us Cover"
            priority
            className="w-[558px] h-[610px] object-cover"
          />
        </div>

        {/* Right Text Section */}
        <div className="w-1/2 pl-[100px]">
          <h1
            className={`${frankRuhlLibrevBold.className} leading-[78px] text-[68px] text-primary`}
          >
            Rastus Best In Fashion In 2025
          </h1>
          <p
            className={`${frankRuhlLibrev.className} pt-[30px] text-[20px] leading-[180%] text-primary`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ullamcorper congue eros, eget tincidunt ipsum eleifend ut. Lorem
            ipsum dolor sit amet consectetur adipiscing elit. Sed ullamcorper
            congue eros eleifend ut tincidunt ipsum.ipsum dolor sit amet,
            consectetur adipiscing elit. <br />
          </p>
          <button
            className={`${frankRuhlLibrev.className} text-[20px] text-center text-primary border border-primary mt-6 px-6 py-2 flex rounded-full hover:text-[22px] duration-500 transition-all hover:bg-primary hover:text-lightBrown-50`}
          >
            Read More <span className="pl-4">&gt;</span>
          </button>
        </div>
      </div>
      <div className="w-[150px] h-[150px] absolute bottom-[50px] left-16">
        <Image
          src={logoWithBackground}
          alt="squared dots"
          priority
          width={0}
          height={0}
          className="absolute w-full h-auto"
        />
      </div>
      {/* Statistics Section */}
      <div className="flex bg-primary text-lightBrown-50 w-[55%] h-[150px] absolute right-[150px] bottom-[50px] items-center rounded-[7px]">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`text-center w-full ${
              index !== stats.length - 1 ? "border-r border-white/20" : ""
            }`}
          >
            <h1
              className={`${frankRuhlLibrevBold.className} text-[40px] leading-[78px]`}
            >
              {item.number}
            </h1>
            <p
              className={`${frankRuhlLibrev.className} text-lg leading-[180%]`}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
