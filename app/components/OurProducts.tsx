import React from "react";
import { frankRuhlLibrevBold } from "../utils/fonts";
import ProductNavItems from "./ProductNavItems";
import ProductCard from "./ProductCard";

const OurProducts = () => {
  return (
    <div className="flex flex-col gap-10 items-center p-16 bg-lightBrown-100">
      <h1
        className={`${frankRuhlLibrevBold.className} text-primary text-[48px]`}
      >
        Our Products
      </h1>

      <ProductNavItems />

      {/* Ensure wrapping works correctly */}
      <div className="flex flex-wrap gap-8 justify-center">
        {[...Array(8)].map((_, key) => (
          <ProductCard name="Hoodie" price="23k FRW" key={key} />
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
