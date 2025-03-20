import React from "react";
import { frankRuhlLibrev, frankRuhlLibrevBold } from "../utils/fonts";
import DealTime from "./DealTime";
import Button from "./Button";
import Image from "next/image";
import customizedCap from "@/public/customized-cap.png";
import SquaredDots from "@/public/newCollection/squared-dots.svg";

const DealOfTheDay = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-lightBrown-100 w-[80%] h-[60%] mt-10  flex">
        <div className="flex flex-col gap-6 w-1/2 p-[80px] pl-[160px]">
          <h1
            className={`${frankRuhlLibrevBold.className} text-5xl text-primary`}
          >
            Deal Of The Day
          </h1>
          <p className={`${frankRuhlLibrev.className} text-primary text-lg`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ullamcorper congue erosget tincidunt{" "}
          </p>
          <DealTime />
          <Button
            width="w-[223px]"
            height="h-[64px]"
            textColor="text-white"
            backgroundColor="bg-primary"
            borderColor="border-primary"
            className="hover:bg-transparent hover:text-primary hover:border mt-5 cursor-pointer"
          >
            SHOP NOW
          </Button>
        </div>
        <div className="w-1/2 flex justify-center items-center relative">
          <div className="absolute top-0 right-0 w-[60%] h-[60%]">
            <div className="bg-lightBrown-50  w-[60%] h-[100%] absolute  right-0">
              <Image
                src={SquaredDots}
                alt="Squared dots"
                className="absolute -bottom-16 z-30"
                width={0}
                height={0}
                priority
              />
            </div>
          </div>
          <div className="relative">
            <Image
              src={customizedCap}
              priority
              alt="customized cap"
              width={0}
              height={0}
              className="w-[400px] h-[460px]"
            />
            <div className="w-[400px] h-[460px] hover:bg-black hover:bg-opacity-25 absolute top-0 cursor-pointer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealOfTheDay;
