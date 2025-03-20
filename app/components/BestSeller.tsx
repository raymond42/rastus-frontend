import React from "react";
import { frankRuhlLibrev, frankRuhlLibrevBold } from "../utils/fonts";
import Button from "./Button";
import ProductCard from "./ProductCard";

const BestSeller = () => {
  return (
    <>
      <div className="bg-primary flex items-center pl-[151px] h-screen overflow-hidden">
        <div className="flex flex-col gap-6">
          <h1
            className={`${frankRuhlLibrevBold.className} text-[52px] text-white`}
          >
            Best Seller Product
          </h1>
          <p className={`${frankRuhlLibrev.className} text-[20px] text-white`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ullamcorper congue eros
          </p>
          <Button
            textColor="text-white"
            textSize="text-[14px]"
            borderColor="white"
            width="w-48"
            height="h-16"
            className="hover:bg-white hover:text-primary"
          >
            SEE MORE
          </Button>
        </div>
        <div className="flex gap-6 pt-32 pl-16">
          {[...Array(3)].map((product, key) => (
            <ProductCard name="Customized Hoodies" price="25k FRW" key={key} />
            // <BestSellerCardSlider />
          ))}
        </div>
      </div>
      <div>{/* <BestSellerCardSlider /> */}</div>
    </>
  );
};

export default BestSeller;
