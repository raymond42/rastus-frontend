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
    <div className="w-full h-full sm:p-40 p-3 pb-4 flex flex-col gap-6 relative">
      {/* Main About Section */}

      <div className="flex sm:flex-row flex-col w-full justify-between relative">
        {/* Left Image Section */}

        <div className="sm:w-1/2 relative">
          <div className="w-[140px] h-[98px] absolute sm:right-16 sm:-top-10">
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
        <div className="sm:w-1/2 sm:pl-[100px] flex flex-col sm:block text-center items-center sm:text-start">
          <h1
            className={`${frankRuhlLibrevBold.className} sm:leading-[78px] sm:text-7xl text-5xl text-primary pt-6 sm:pt-0`}
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
            className={`${frankRuhlLibrev.className} w-[188px] text-[20px] text-center text-primary border border-primary mt-6 px-6 py-2 flex rounded-full hover:text-[22px] duration-500 transition-all hover:bg-primary hover:text-lightBrown-50`}
          >
            Read More <span className="pl-4">&gt;</span>
          </button>
        </div>
      </div>
      <div className="w-[150px] h-[150px] sm:block absolute hidden bottom-[50px] left-16 ">
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
      <div className="flex sm:flex-row flex-col gap-2 sm:gap-0 text-lightBrown-50 sm:w-[55%] sm:h-[150px] sm:absolute right-[150px] sm:bottom-[50px] items-center rounded-[7px]">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`text-center w-full bg-primary ${
              index !== stats.length - 1
                ? "border-r border-white-primary/20"
                : ""
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
