import React from "react";
import { jost, jostSemiBold } from "../utils/fonts";
import DealTime from "./DealTime";
import Button from "./Button";
import Image from "next/image";
import customizedCap from "@/public/customized-cap.png";
import SquaredDots from "@/public/newCollection/squared-dots.svg";

const DealOfTheDay = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full px-3 sm:px-8">
      <div className="bg-lightBrown-100 w-full max-w-6xl flex flex-col sm:flex-row items-center sm:h-[60vh] rounded-lg shadow-lg sm:relative">
        {/* Left Content Section */}
        <div className="flex flex-col gap-6 sm:w-1/2 w-full p-6 sm:p-16">
          <h1
            className={`${jostSemiBold.className} text-4xl sm:text-5xl text-primary`}
          >
            Limited Time Offer
          </h1>
          <p className={`${jost.className} text-primary text-base sm:text-lg`}>
            Don’t miss out — today’s exclusive deal won’t last long! Handpicked
            pieces at unbeatable prices, available for 24 hours only
          </p>
          <p className={`${jost.className} text-[16px] text-primary mt-4`}>
            Time Remaining
          </p>
          <div className="sm:w-[350px] w-full">
            <DealTime />
          </div>
          <Button
            width="w-full sm:w-[223px]"
            height="h-[50px] sm:h-[64px]"
            textColor="text-white"
            backgroundColor="bg-primary"
            borderColor="border-primary"
            className="hover:bg-transparent hover:text-primary text-white-primary hover:border mt-4 sm:mt-5 cursor-pointer uppercase"
          >
            Shop The Drop
          </Button>
        </div>

        {/* Right Image Section */}
        <div className="relative sm:absolute sm:right-0 top-0 sm:w-1/2 w-full h-full flex justify-center items-center">
          {/* Background Dots */}
          <div
            className="absolute top-0 right-0 sm:w-[60%] w-full h-[70%]"
            aria-hidden="true"
          >
            <div className="bg-lightBrown-50 w-full h-full sm:absolute right-0">
              <Image
                src={SquaredDots}
                alt="Decorative squared dots"
                className="absolute -bottom-12 right-16 z-30"
                width={100}
                height={100}
                priority
              />
            </div>
          </div>

          {/* Cap Image */}
          <div className="relative self-center">
            <Image
              src={customizedCap}
              priority
              alt="Customized cap"
              width={400}
              height={460}
              className="w-[80%] sm:w-[400px] h-auto max-h-[460px] object-cover"
            />
            <div className="absolute inset-0 hover:bg-opacity-25 cursor-pointer transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealOfTheDay;
