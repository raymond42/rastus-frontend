"use client";

import React from "react";
import { jost, jostSemiBold } from "../utils/fonts";
import Button from "./Button";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { addToCart, toggleCart } from "@/lib/redux/slices/cartSlice";
import { useToast } from "@/hooks/use-toast";
import { ProductType } from "../types/product";
import Link from "next/link";

const BestSeller: React.FC = () => {
  const dispatch = useDispatch();
  const { toast } = useToast();

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const products = useSelector((state: RootState) => state.products.products);

  const featuredProducts = products.filter((p) => p.isFeatured === true);

  const handleAddToBag = (product: ProductType) => {
    const exists = cartItems.some(
      (item) =>
        item.id === product.id &&
        item.size.name === product.size.name &&
        item.color.name === product.color.name
    );

    if (exists) {
      toast({
        title: "Already in cart",
        description: "This item is already in your cart.",
        variant: "default",
        duration: 2000,
      });
      return;
    }

    dispatch(addToCart(product));
    dispatch(toggleCart());
  };

  return (
    <>
      <div className="bg-primary flex sm:flex-row flex-col items-center sm:pl-[151px] sm:h-screen w-full sm:overflow-hidden h-full sm:text-start text-center">
        <div className="flex flex-col items-center sm:items-start gap-6">
          <h1
            className={`${jostSemiBold.className} text-[52px] text-white-primary`}
          >
            Heavenly Hits
          </h1>
          <p
            className={`${jost.className} text-[20px] text-white-primary px-6 sm:px-0`}
          >
            These are the best-selling products of the month. They are customer
            favorites and are highly recommended.
          </p>
          {/* <Button
            textColor="text-white-primary"
            textSize="text-[14px]"
            borderColor="white-primary"
            width="w-48"
            height="h-16"
            className="hover:bg-white-primary hover:text-primary sm:block hidden"
          > */}
          <Link
            href="/#products"
            className="hover:bg-white-primary hover:text-primary sm:flex hidden text-white-primary text-[14px] border-2 border-white-primary w-48 h-16 justify-center font-bold items-center"
          >
            SEE MORE
          </Link>
          {/* </Button> */}
        </div>
        <div className="flex sm:flex-row flex-wrap sm:flex-nowrap justify-center sm:gap-6 gap-2 sm:pt-32 pt-6 sm:pl-16">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              image={product.image}
              rating={product.rating}
              price={product.price}
              isButtonDisabled={false}
              onAddToCart={() => handleAddToBag(product)}
            />
          ))}
        </div>
        <div className="py-10 sm:hidden block">
          <Button
            textColor="text-white-primary"
            textSize="text-[14px]"
            borderColor="white-primary"
            width="w-48"
            height="h-16"
            className="hover:bg-white-primary hover:text-primary"
          >
            SEE MORE
          </Button>
        </div>
      </div>
      <div>{/* <BestSellerCardSlider /> */}</div>
    </>
  );
};

export default BestSeller;
