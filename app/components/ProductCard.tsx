import Image from "next/image";
import React from "react";
import customizedHoodie from "@/public/productSeller/customized-hoodie.png";
import StarRate from "./StarRate";
import { frankRuhlLibrevBold } from "../utils/fonts";

type ProductCardProps = {
  name: string;
  price: string;
};

const ProductCard = ({ name, price }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-md h-[538px]">
      <div className="w-[363px] h-[387px]">
        <Image
          src={customizedHoodie}
          alt="customized hoodie"
          priority
          className="w-full h-full rounded-t-md"
        />
      </div>
      <div className="p-9 flex flex-col gap-4">
        <StarRate />
        <h1 className={`${frankRuhlLibrevBold.className} text-primary text-lg`}>
          {name}
        </h1>
        <p
          className={`${frankRuhlLibrevBold.className} text-primary text-[16px]`}
        >
          {price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
