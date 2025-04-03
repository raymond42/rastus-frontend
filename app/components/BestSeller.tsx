import React from "react";
import { frankRuhlLibrev, frankRuhlLibrevBold } from "../utils/fonts";
import Button from "./Button";
import ProductCard from "./ProductCard";

const BestSeller = () => {
  return (
    <>
      <div className="bg-primary flex sm:flex-row flex-col items-center sm:pl-[151px] sm:h-screen w-full sm:overflow-hidden h-full sm:text-start text-center">
        <div className="flex flex-col items-center sm:items-start gap-6">
          <h1
            className={`${frankRuhlLibrevBold.className} text-[52px] text-white-primary`}
          >
            Best Seller Product
          </h1>
          <p
            className={`${frankRuhlLibrev.className} text-[20px] text-white-primary px-6 sm:px-0`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ullamcorper congue eros
          </p>
          <Button
            textColor="text-white-primary"
            textSize="text-[14px]"
            borderColor="white-primary"
            width="w-48"
            height="h-16"
            className="hover:bg-white-primary hover:text-primary sm:block hidden"
          >
            SEE MORE
          </Button>
        </div>
        <div className="flex sm:flex-row flex-col gap-6 sm:pt-32 pt-6 sm:pl-16">
          {[...Array(3)].map((product, key) => (
            <ProductCard name="Customized Hoodies" price="25k FRW" key={key} />
            // <BestSellerCardSlider />
          ))}
        </div>
        <div className="py-10">
          <Button
            textColor="text-white-primary"
            textSize="text-[14px]"
            borderColor="white-primary"
            width="w-48"
            height="h-16"
            className="hover:bg-white-primary hover:text-primary"
          >
            SEE MORE
          </Button>
        </div>
      </div>
      <div>{/* <BestSellerCardSlider /> */}</div>
    </>
  );
};

export default BestSeller;
