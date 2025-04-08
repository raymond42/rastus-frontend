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
    <div className="bg-white-primary rounded-md sm:w-[363px] w-[170px] h-auto">
      <div className="w-full sm:h-[387px]">
        <Image
          src={customizedHoodie}
          alt="customized hoodie"
          priority
          className="w-full h-full object-cover rounded-t-md"
        />
      </div>
      <div className="sm:p-6 p-4 flex items-center flex-col sm:gap-4 gap-2 box-border">
        {" "}
        {/* Added box-sizing */}
        <StarRate />
        <h1
          className={`${frankRuhlLibrevBold.className} text-primary sm:text-lg text-[14px]`}
        >
          {name}
        </h1>
        <p
          className={`${frankRuhlLibrevBold.className} text-primary sm:text-[16px] text-[14px]`}
        >
          {price}
        </p>
        <Button
          width="w-full"
          className={`${frankRuhlLibrev.className} text-[10px] py-2 bg-primary text-white-primary hover:text-primary hover:bg-transparent hover:border hover:border-primary`}
        >
          <FaShoppingCart className="mr-2" /> ADD TO CART
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
