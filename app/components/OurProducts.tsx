"use client";
import React from "react";
import { frankRuhlLibrevBold } from "../utils/fonts";
import ProductNavItems from "./ProductNavItems";
import ProductCard from "./ProductCard";
import Link from "next/link";
import { Products } from "@/app/constants";

const OurProducts = () => {
  return (
    <div
      id="products"
      className="flex flex-col gap-10 items-center sm:p-16 p-3 bg-lightBrown-50 scroll-mt-24"
    >
      <h1
        className={`${frankRuhlLibrevBold.className} text-primary text-[48px]`}
      >
        Our Products
      </h1>
      <ProductNavItems />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
        {Products.map((product, key) => (
          <Link href={`/products/${product.id}`} key={key}>
            <ProductCard
              name={product.name}
              image={product.image}
              rating={product.rating}
              price={product.price}
              isButtonDisabled={true}
              key={key}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
