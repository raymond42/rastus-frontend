import Image, { StaticImageData } from "next/image";
import React from "react";
import customizedHoodie from "@/public/productSeller/customized-hoodie.png";
import StarRate from "./StarRate";
import { frankRuhlLibrev, frankRuhlLibrevBold } from "../utils/fonts";
import Button from "./Button";
import { FaShoppingCart } from "react-icons/fa";

type ProductCardProps = {
  name: string;
  price: string;
  image: StaticImageData | string;
  rating?: number;
  isButtonDisabled?: boolean;
};

const ProductCard = ({
  name,
  price,
  image,
  rating = 0,
  isButtonDisabled,
}: ProductCardProps) => {
  return (
    <div className="bg-white-primary rounded-md w-[363px] h-auto">
      <div className="w-full h-[387px]">
        <Image
          src={image || customizedHoodie}
          alt="customized hoodie"
          priority
          className="w-full h-full object-cover rounded-t-md"
        />
      </div>
      <div
        className={`p-6 flex ${
          isButtonDisabled ? "sm:items-start items-center" : "items-center"
        } flex-col gap-4 box-border`}
      >
        {/* Added box-sizing */}
        <StarRate rate={rating} />
        <h1 className={`${frankRuhlLibrevBold.className} text-primary text-lg`}>
          {name}
        </h1>
        <p
          className={`${frankRuhlLibrevBold.className} text-primary text-[16px]`}
        >
          {price}
        </p>
        {!isButtonDisabled ? (
          <Button
            width="w-full"
            className={`${frankRuhlLibrev.className} py-2 bg-primary text-white-primary hover:text-primary hover:bg-transparent hover:border hover:border-primary`}
          >
            <FaShoppingCart className="mr-2" /> ADD TO CART
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default ProductCard;
