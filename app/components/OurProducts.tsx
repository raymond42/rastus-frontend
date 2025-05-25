"use client";

import React, { MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { startLoading, stopLoading } from "@/lib/redux/slices/loadingSlice";

import { jostSemiBold } from "../utils/fonts";
import ProductCard from "./ProductCard";
import { Products } from "@/app/constants";

const OurProducts = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleOnProductClick = (
    e: MouseEvent<HTMLDivElement>,
    product: (typeof Products)[number]
  ) => {
    e.preventDefault();
    const href = `/products/${product.id}`;
    dispatch(startLoading());

    router.push(href);
  };

  return (
    <div
      id="products"
      className="flex flex-col gap-10 items-center sm:p-16 p-3 bg-lightBrown-50 scroll-mt-24"
    >
      <h1 className={`${jostSemiBold.className} text-primary text-[48px]`}>
        Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
        {Products.map((product) => (
          <div
            key={product.id}
            onClick={(e) => handleOnProductClick(e, product)}
            className="cursor-pointer"
          >
            <ProductCard
              name={product.name}
              image={product.image}
              rating={product.rating}
              price={product.price}
              isButtonDisabled={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
