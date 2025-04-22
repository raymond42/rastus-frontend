"use client";
import React from "react";
import { frankRuhlLibrevBold } from "../utils/fonts";
import ProductNavItems from "./ProductNavItems";
import ProductCard from "./ProductCard";
import HoodiesCollection from "@/public/our products/Hoodies-collection.png";
import Jacket from "@/public/our products/jacket.webp";
import Jeans from "@/public/our products/jeans.webp";
import Pants from "@/public/our products/pants.webp";
import TShirt from "@/public/our products/t-shirt.webp";
import SoftLongValez from "@/public/our products/soft-long-valez.webp";
import Shorts from "@/public/our products/shorts.webp";
import LongTshirts from "@/public/our products/long-tshirts-col.webp";
import { StaticImageData } from "next/image";

type ProductCardProps = {
  name: string;
  image: StaticImageData | string;
  rating: number;
  price: string;
};

const Products: ProductCardProps[] = [
  {
    name: "Hoodies",
    image: HoodiesCollection,
    rating: 4.5,
    price: "30k FRW",
  },
  {
    name: "T-shirt",
    image: TShirt,
    rating: 4.7,
    price: "20k FRW",
  },
  {
    name: "Jeans",
    image: Jeans,
    rating: 4.8,
    price: "25k FRW",
  },
  {
    name: "Shorts",
    image: Shorts,
    rating: 4.8,
    price: "25k FRW",
  },
  {
    name: "Long Valez",
    image: SoftLongValez,
    rating: 4.8,
    price: "25k FRW",
  },
  {
    name: "Jackets",
    image: Jacket,
    rating: 4.8,
    price: "25k FRW",
  },
  {
    name: "Pants",
    image: Pants,
    rating: 4.8,
    price: "25k FRW",
  },
  {
    name: "Long T-shirts",
    image: LongTshirts,
    rating: 4.8,
    price: "25k FRW",
  },
];

const OurProducts = () => {
  return (
    <div className="flex flex-col gap-10 items-center sm:p-16 p-3 bg-lightBrown-50">
      <h1
        className={`${frankRuhlLibrevBold.className} text-primary text-[48px]`}
      >
        Our Products
      </h1>

      <ProductNavItems />

      {/* Ensure wrapping works correctly */}
      <div className="flex flex-wrap sm:gap-8 gap-2 justify-center">
        {Products.map((product, key) => (
          <ProductCard
            name={product.name}
            image={product.image}
            rating={product.rating}
            price={product.price}
            isButtonDisabled={false}
            key={key}
          />
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
