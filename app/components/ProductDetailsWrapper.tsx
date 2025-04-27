"use client";

import { useState } from "react";
import ProductImageChange from "./ProductImageChange";
import ProductDetails from "./ProductDetails";
import { ColorType, ProductType, SizeType } from "@/app/types/product";

type Props = {
  colors: ColorType[];
  baseProduct: ProductType;
  sizeOptions: SizeType[];
};

const ProductImageDetailsWrapper = ({
  colors,
  baseProduct,
  sizeOptions,
}: Props) => {
  const [selectedColor, setSelectedColor] = useState<ColorType>(colors[0]);
  const [selectedSize, setSelectedSize] = useState<SizeType>(sizeOptions[0]);

  const updatedProduct = {
    ...baseProduct,
    image: selectedColor.image,
    color: selectedColor,
    size: selectedSize,
  };

  return (
    <div className="flex sm:flex-row flex-col justify-center w-full gap-10">
      <div className="sm:max-h-[700px] h-auto sm:w-2/5 w-full">
        <ProductImageChange
          colors={colors}
          selectedColor={selectedColor}
          onColorChange={setSelectedColor}
        />
      </div>
      <div className="flex flex-col sm:w-1/2 sm:pr-28 sm:px-0 sm:p-0 p-6 w-full overflow-hidden items-start">
        <ProductDetails
          product={updatedProduct}
          colors={colors}
          onColorChange={setSelectedColor}
          sizeOptions={sizeOptions}
          onSizeChange={setSelectedSize}
          selectedSize={selectedSize}
        />
      </div>
    </div>
  );
};

export default ProductImageDetailsWrapper;
