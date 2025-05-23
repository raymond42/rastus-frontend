import Image, { StaticImageData } from "next/image";
import React from "react";
import customizedHoodie from "@/public/productSeller/customized-hoodie.png";
import { jostSemiBold, jost } from "../utils/fonts";

import { FaShoppingCart } from "react-icons/fa";
import { Button } from "@/components/ui/button";

type ProductCardProps = {
  name: string;
  price: string;
  image: StaticImageData | string;
  rating?: number;
  isButtonDisabled?: boolean;
  onAddToCart?: () => void;
};

const ProductCard = ({
  name,
  price,
  image,
  isButtonDisabled,
  onAddToCart,
}: ProductCardProps) => {
  return (
    <div className="bg-white-primary rounded-md w-[363px] shadow-sm hover:shadow-md transition-shadow">
      <div className="w-full h-[387px] relative overflow-hidden rounded-t-md">
        <Image
          src={image || customizedHoodie}
          alt="customized hoodie"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="p-4 flex justify-between gap-4">
        <div
          className={`flex flex-col ${
            isButtonDisabled ? "items-center w-full" : "items-start"
          }`}
        >
          <h1 className={`${jost.className} text-primary text-lg`}>{name}</h1>
          <p
            className={`${jostSemiBold.className} text-primary text-[16px] mt-1`}
          >
            {price}
          </p>
        </div>

        {/* Button Section */}
        {!isButtonDisabled && (
          <div className="self-center">
            <Button
              className="flex items-center gap-2 px-4 py-2 bg-primary text-white-primary rounded-full text-sm hover:bg-opacity-90 transition"
              onClick={onAddToCart}
            >
              <FaShoppingCart /> Add To Cart
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
