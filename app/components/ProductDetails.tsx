import React from "react";
import { montserrat, montserratBold } from "@/app/utils/fonts";
import { ProductType, ColorType, SizeType } from "@/app/types/product";
import Box from "./Box";
import QuantitySelector from "./QuantitySelector";
import { CiClock2, CiRuler, CiHeart } from "react-icons/ci";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { Button } from "@/components/ui/button";

type ProductDetailsProps = {
  product: ProductType;
  colors: ColorType[];
  onColorChange: (color: ColorType) => void;
  sizeOptions: SizeType[];
  onSizeChange: (size: SizeType) => void;
  selectedSize: SizeType;
};

const ProductDetails = ({
  product,
  colors,
  onColorChange,
  sizeOptions,
  onSizeChange,
}: ProductDetailsProps) => {
  const handleColorChange = (item: ColorType | SizeType) => {
    onColorChange(item as ColorType);
  };

  const handleSizeChange = (item: ColorType | SizeType) => {
    onSizeChange(item as SizeType);
  };

  return (
    <div className="text-primary flex flex-col gap-4">
      <div className="flex flex-col">
        <h1
          className={`${montserratBold.className} text-xl uppercase underline`}
        >
          {product.name}
        </h1>
        <p className={`${montserrat.className} text-base capitalize`}>
          {product.shortDescription}
        </p>
      </div>
      <div className="flex flex-col">
        <h1 className={`${montserratBold.className} text-base capitalize`}>
          color
        </h1>
        <Box
          items={colors}
          selectedItem={product.color}
          handleItemChange={handleColorChange}
        />
      </div>
      <div className="size">
        <h1 className={`${montserratBold.className} text-base capitalize`}>
          size
        </h1>
        <Box
          items={sizeOptions}
          selectedItem={product.size}
          handleItemChange={handleSizeChange}
        />
      </div>
      <div className="quantity">
        <h1 className={`${montserratBold.className} text-base capitalize`}>
          quantity
        </h1>
        <QuantitySelector />
      </div>
      <div className="price pt-5">
        <h1 className={`${montserratBold.className} text-base capitalize`}>
          Price
        </h1>
        <div className="flex items-center gap-4">
          <p className={`${montserrat.className} text-[22px]`}>20k RWF</p>
          <RiVerifiedBadgeFill className="text-primary opacity-85" size={25} />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-5">
          <CiClock2 />
        </span>
        <p className={`${montserrat.className} text-base`}>
          Delivery today between 8:00AM and 8:00PM
        </p>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-5">
          <CiRuler />
        </span>
        <p className={`${montserrat.className} text-base`}>
          What&apos;s my size?
          <b className="pl-2">{product.size.fullName}</b>
        </p>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-5 h-full flex items-center justify-center">
          <div className="w-2 h-2 bg-green-500 rounded-full" />
        </div>
        <p className={`${montserrat.className} text-base`}>
          {product.stock} in stock remaining, ready for delivery
        </p>
      </div>
      <div className="Buttons flex flex-col gap-5 mt-4">
        <Button
          className={`${montserrat.className} text-[18px] capitalize border-2 border-primary sm:w-[500px] w-full h-[40px] bg-transparent text-primary hover:text-opacity-65 hover:bg-transparent hover:border-opacity-65 rounded-md`}
        >
          Add to bag
        </Button>
        <Button
          className={`${montserrat.className} capitalize text-[18px] border-2 border-primary bg-primary text-white-primary sm:w-[500px] w-full h-[40px] rounded-md flex justify-center items-center gap-4`}
        >
          <span>
            <CiHeart />
          </span>
          Add to wishlist
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
