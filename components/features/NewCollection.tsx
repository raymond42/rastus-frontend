import Image from "next/image";
import React from "react";
import capsCollection from "@/public/newCollection/caps-collection.png";
import hoodiesCollection from "@/public/newCollection/hoodies-collection.png";
import tshirtsCollection from "@/public/newCollection/t-shirts-collection.png";
import { jost, jostSemiBold } from "@/utils/fonts";
import SquaredDots from "@/public/newCollection/squared-dots.svg";

const NewCollection = () => {
  const newCollectionArray = [
    {
      title: "HOODIES",
      image: hoodiesCollection,
    },
    {
      title: "T-SHIRTS",
      image: tshirtsCollection,
    },
    {
      title: "CAPS",
      image: capsCollection,
    },
  ];

  return (
    <div className="sm:px-40 pt-10 relative flex flex-col sm:justify-center text-center gap-5 sm:pt-16 bg-lightBrown-20 h-full">
      <div className="w-full flex flex-col items-center gap-5 sm:py-10 py-3">
        <h1
          className={`${jostSemiBold.className} sm:text-7xl text-5xl text-primary`}
        >
          What&apos;s Trending?
        </h1>
        <p className={`${jost.className} sm:text-xl text-lg text-primary`}>
          Unleash Your Inner Style Icon with Rastus closet: The Ultimate Fashion
          Must-Have!
        </p>
      </div>
      <div className="w-full flex sm:flex-row flex-col  justify-between z-20">
        {newCollectionArray.map((item, key) => (
          <div className="w-[1/3] h-auto flex flex-col items-center" key={key}>
            <div className="inline-block overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                priority
                width={0}
                height={0}
                className="w-auto h-auto object-cover hover:scale-110 duration-500 transition-transform cursor-pointer"
              />
            </div>
            <button
              className={`${jostSemiBold.className} text-primary sm:text-[18px] bg-white-primary h-16 relative w-9/12 bottom-20 flex justify-center items-center hover:bg-primary hover:text-white-primary`}
            >
              {item.title}
            </button>
          </div>
        ))}
      </div>
      <div className="bg-white-primary w-[388px] h-[292px] absolute bottom-0 right-0">
        <Image
          src={SquaredDots}
          alt="squared dots"
          priority
          width={0}
          height={0}
          className="absolute right-14 bottom-16 w-[182px] h-[110px]"
        />
      </div>
    </div>
  );
};

export default NewCollection;
