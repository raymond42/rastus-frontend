import { Navbar } from "@/app/components";
import React from "react";
import blueTshirt from "@/public/productDetails/t-shirts/blue-t-shirt.webp";
import brownTshirt from "@/public/productDetails/t-shirts/brown-t-shirt.webp";
import blackTshirt from "@/public/productDetails/t-shirts/black-t-shirt.webp";
import dirtyWhiteTshirt from "@/public/productDetails/t-shirts/dirty-white-t-shirt.webp";
import coffeeTshirt from "@/public/productDetails/t-shirts/coffee-color-t-shirt.webp";
import grayTshirt from "@/public/productDetails/t-shirts/gray-t-shirt.webp";
import greenTshirt from "@/public/productDetails/t-shirts/green-t-shirt.webp";
import cementGrayTshirt from "@/public/productDetails/t-shirts/cement-gray-t-shirt.webp";
import Image, { StaticImageData } from "next/image";
import ProductImageChange from "@/app/components/ProductImageChange";

type ProductDetailsProps = {
  id: string;
  name: string;
  image: StaticImageData | string;
  price: string;
  description: string;
  rating: number;
  reviews: number;
  category: string;
  stock: number;
  size: string;
  color: string;
  quantity: number;
};

type colorType = {
  name: string;
  image: StaticImageData | string;
};

type sizeType = {
  name: string;
  symbol: string;
};

const ProductDetailsPage = () => {
  const productDetails: ProductDetailsProps = {
    id: "1",
    name: "Customized Hoodie",
    image: blueTshirt,
    price: "30k FRW",
    description: "This is a customized hoodie.",
    rating: 4.5,
    reviews: 100,
    category: "Hoodies",
    stock: 50,
    size: "M",
    color: "Black",
    quantity: 1,
  };

  const colors: colorType[] = [
    { name: "Blue", image: blueTshirt },
    { name: "Brown", image: brownTshirt },
    { name: "Black", image: blackTshirt },
    { name: "Dirty White", image: dirtyWhiteTshirt },
    { name: "coffee", image: coffeeTshirt },
    { name: "Gray", image: grayTshirt },
    { name: "Green", image: greenTshirt },
    { name: "Cement Gray", image: cementGrayTshirt },
  ];

  const sizes: sizeType[] = [
    { name: "Small", symbol: "S" },
    { name: "Medium", symbol: "M" },
    { name: "Large", symbol: "L" },
    { name: "Extra Large", symbol: "XL" },
  ];

  return (
    <div>
      <div className="absolute bg-white-primary w-full">
        <Navbar />
      </div>
      <div className="main-div p-48 bg-gray-50">
        <div className="first-section flex">
          <div className="left-side-images max-h-[600px]">
            <ProductImageChange colors={colors} />
          </div>
          <div className="right-side-description"></div>
        </div>
        <div className="secoond-section"></div>
        <div className="third-section"></div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
