import Image from "next/image";
import React from "react";
import capsCollection from "@/public/newCollection/caps-collection.png";
import hoodiesCollection from "@/public/newCollection/hoodies-collection.png";
import tshirtsCollection from "@/public/newCollection/t-shirts-collection.png";
import { frankRuhlLibrev, frankRuhlLibrevBold } from "@/app/utils/fonts";
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
    <div className="px-40 relative flex flex-col justify-center h-screen gap-5 pt-16 bg-lightBrown-20">
      <div className="w-full flex flex-col items-center gap-5 py-10">
        <h1
          className={`${frankRuhlLibrevBold.className} text-7xl text-primary`}
        >
          New Collection
        </h1>
        <p className={`${frankRuhlLibrev.className} text-xl text-primary`}>
          Unleash Your Inner Style Icon with Rastus closet: The Ultimate Fashion
          Must-Have!
        </p>
      </div>
      <div className="w-full flex justify-between z-20">
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
              className={`${frankRuhlLibrevBold.className} text-primary text-[18px] bg-white h-16 relative w-9/12 bottom-20 flex justify-center items-center hover:bg-primary hover:text-white`}
            >
              {item.title}
            </button>
          </div>
        ))}
      </div>
      <div className="bg-white w-[388px] h-[292px] absolute bottom-0 right-0">
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
