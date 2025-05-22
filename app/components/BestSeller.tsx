import React from "react";
import { frankRuhlLibrev, frankRuhlLibrevBold } from "../utils/fonts";
import Button from "./Button";
import ProductCard from "./ProductCard";
import HoodyHeavenly from "@/public/productSeller/hoodie-heavenly.webp";
import TshirtHeavenly from "@/public/productSeller/t-shirt-heavenly.webp";
import CapHeavenly from "@/public/productSeller/cap-heavenly.webp";
import { StaticImageData } from "next/image";

type ProductCardProps = {
  name: string;
  image: StaticImageData | string;
  rating: number;
  price: string;
};

const HeavenlyHitsData: ProductCardProps[] = [
  {
    name: "Be Fearlessly Hoodie",
    image: HoodyHeavenly,
    rating: 4.5,
    price: "30k FRW",
  },
  {
    name: "Old School T-Shirt",
    image: TshirtHeavenly,
    rating: 4.7,
    price: "20k FRW",
  },
  {
    name: "Rastus White snapback",
    image: CapHeavenly,
    rating: 4.8,
    price: "15k FRW",
  },
];

const BestSeller = () => {
  return (
    <>
      <div className="bg-primary flex sm:flex-row flex-col items-center sm:pl-[151px] sm:h-screen w-full sm:overflow-hidden h-full sm:text-start text-center">
        <div className="flex flex-col items-center sm:items-start gap-6">
          <h1
            className={`${frankRuhlLibrevBold.className} text-[52px] text-white-primary`}
          >
            Heavenly Hits
          </h1>
          <p
            className={`${frankRuhlLibrev.className} text-[20px] text-white-primary px-6 sm:px-0`}
          >
            These are the best-selling products of the month. They are customer
            favorites and are highly recommended. <br />
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
        <div className="flex sm:flex-row flex-wrap sm:flex-nowrap justify-center sm:gap-6 gap-2 sm:pt-32 pt-6 sm:pl-16">
          {HeavenlyHitsData.map((product, key) => (
            <ProductCard
              name={product.name}
              image={product.image}
              rating={product.rating}
              price={product.price}
              isButtonDisabled={false}
              key={key}
            />
          ))}
        </div>
        <div className="py-10 sm:hidden block">
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
