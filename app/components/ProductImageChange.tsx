"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

type ProductImageChangeProps = {
  colors: {
    name: string;
    image: StaticImageData | string;
  }[];
};

const ProductImageChange = ({ colors }: ProductImageChangeProps) => {
  const [selectedImageColor, setSelectedImageColor] = useState<
    StaticImageData | string
  >(colors[0].image);

  const handleImageClick = (image: StaticImageData | string) => {
    setSelectedImageColor(image);
  };

  return (
    <div className="flex gap-3 h-full">
      <div className="right-side-images-container flex flex-col gap-3 h-full overflow-scroll scrollbar-hide">
        {colors.map((color, index) => (
          <Image
            key={index}
            src={color.image}
            alt={color.name}
            width={0}
            height={0}
            className={`
                w-[50px] 
                h-[60px] 
                object-cover 
                border-y 
                border-primary 
                ${
                  color.image === selectedImageColor
                    ? "border-opacity-50 border"
                    : "border-opacity-15"
                } 
                cursor-pointer
              `}
            priority
            onClick={() => handleImageClick(color.image)}
          />
        ))}
      </div>
      <div className="left-side-images-container border">
        <Image
          src={selectedImageColor}
          alt="product"
          width={0}
          height={0}
          className="w-[500px] h-[600px] object-cover rounded-md"
          priority
        />
      </div>
    </div>
  );
};

export default ProductImageChange;
