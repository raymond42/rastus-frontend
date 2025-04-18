"use client";
import React, { useState } from "react";
import { frankRuhlLibrev, frankRuhlLibrevBold } from "../utils/fonts";

const productNavItems = ["HOT", "ON SALE", "TRENDING NOW", "NEW ARRIVAL"];

const ProductNavItems = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <ul className="flex gap-11">
      {productNavItems.map((navItem, index) => (
        <li
          key={index}
          className={`cursor-pointer transition-all text-[11px] sm:text-[16px] ${
            activeIndex === index
              ? `${frankRuhlLibrevBold.className} underline`
              : frankRuhlLibrev.className
          } text-primary`}
          onClick={() => setActiveIndex(index)}
        >
          {navItem}
        </li>
      ))}
    </ul>
  );
};

export default ProductNavItems;
