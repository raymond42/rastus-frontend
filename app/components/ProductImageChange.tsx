import Image, { StaticImageData } from "next/image";
import React from "react";
import { ColorType } from "@/app/types/product";
import SwiperCube from "./SwiperCube";

type ProductImageChangeProps = {
  colors: {
    name: string;
    image: StaticImageData | string;
  }[];
  selectedColor: ColorType;
  onColorChange: (color: ColorType) => void;
};

const ProductImageChange = ({
  colors,
  selectedColor,
  onColorChange,
}: ProductImageChangeProps) => {
  const handleImageChange = (color: ColorType) => {
    onColorChange(color);
  };

  return (
    <div className="flex gap-5 h-full w-full">
      {/* Thumbnail Images */}
      <div className="sm:flex hidden flex-col items-center justify-center gap-5 h-full overflow-scroll scrollbar-hide">
        {colors.map((color, index) => {
          const isSelected = color.image === selectedColor.image;

          return (
            <Image
              key={index}
              src={color.image}
              alt={color.name || "product color"}
              width={0}
              height={0}
              className={`
                w-[60px] 
                h-[70px] 
                object-cover 
                border 
                border-primary 
                ${
                  isSelected
                    ? "border-opacity-50 border-2"
                    : "border-opacity-15 border-x-0"
                }
                cursor-pointer 
                rounded-sm
              `}
              priority
              onClick={() => handleImageChange(color)}
              role="button"
              tabIndex={0}
            />
          );
        })}
      </div>

      {/* Main Image */}
      <div className="border rounded-md w-full max-h-screen">
        <div className="sm:block hidden w-full h-full">
          <Image
            src={selectedColor.image}
            alt="Selected product"
            width={0}
            height={0}
            className="object-obtain rounded-md w-full h-full"
            priority
          />
        </div>
        <div className="sm:hidden block w-full">
          <SwiperCube
            images={colors}
            selectedColor={selectedColor}
            onColorChange={handleImageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductImageChange;
