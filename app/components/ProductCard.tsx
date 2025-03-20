import Image from "next/image";
import React from "react";
import customizedHoodie from "@/public/productSeller/customized-hoodie.png";
import StarRate from "./StarRate";
import { frankRuhlLibrev, frankRuhlLibrevBold } from "../utils/fonts";
import Button from "./Button";
import { FaShoppingCart } from "react-icons/fa";

type ProductCardProps = {
  name: string;
  price: string;
};

const ProductCard = ({ name, price }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-md w-[363px] h-auto">
      <div className="w-full h-[387px]">
        <Image
          src={customizedHoodie}
          alt="customized hoodie"
          priority
          className="w-full h-full object-cover rounded-t-md"
        />
      </div>
      <div className="p-6 flex items-center flex-col gap-4 box-border">
        {" "}
        {/* Added box-sizing */}
        <StarRate />
        <h1 className={`${frankRuhlLibrevBold.className} text-primary text-lg`}>
          {name}
        </h1>
        <p
          className={`${frankRuhlLibrevBold.className} text-primary text-[16px]`}
        >
          {price}
        </p>
        <Button
          width="w-full"
          className={`${frankRuhlLibrev.className} py-2 bg-primary text-white hover:text-primary hover:bg-transparent hover:border hover:border-primary`}
        >
          <FaShoppingCart className="mr-2" /> ADD TO CART
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
