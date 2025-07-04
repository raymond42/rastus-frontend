"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import {
  addToCart,
  toggleCart,
  updateCartItemQuantity,
} from "@/lib/redux/slices/cartSlice";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import { jost, jostSemiBold } from "@/utils/fonts";
import ProductCard from "./ProductCard";
import { handleAddToBag } from "@/utils/helpers";
import { ProductType } from "@/app/types/product";
import { selectFeaturedProducts } from "@/lib/redux/slices/productsSlice";

const SeeMoreButton = ({ className = "" }: { className?: string }) => (
  <Link
    href="/#products"
    className={`hover:bg-white-primary hover:text-primary text-white-primary text-[14px] border-2 border-white-primary w-48 h-16 justify-center font-bold items-center ${className}`}
  >
    SEE MORE
  </Link>
);

const HeavenlyHits: React.FC = () => {
  const [selectedItemQuantity, setSelectedItemQuantity] = React.useState(1);
  const dispatch = useDispatch();
  const { toast } = useToast();

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const featuredProducts = useSelector(selectFeaturedProducts);

  const handleAdd = (product: ProductType) => {
    handleAddToBag({
      product: { ...product, quantity: selectedItemQuantity },
      cartItems,
      dispatch,
      toast,
      updateCartItemQuantity,
      addToCart,
      toggleCart,
    });
  };

  return (
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

        <div className="sm:flex hidden">
          <SeeMoreButton className="flex" />
        </div>
      </div>

      <div className="flex sm:flex-row flex-wrap sm:flex-nowrap justify-center sm:gap-6 gap-2 sm:pt-32 pt-6 sm:pl-16">
        {featuredProducts.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            isButtonDisabled={false}
            onAddToCart={() => {
              const cartItem = cartItems.find(
                (item) =>
                  item.id === product.id &&
                  item.size.name === product.size.name &&
                  item.color.name === product.color.name
              );
              const nextQuantity = cartItem ? cartItem.quantity + 1 : 1;

              handleAdd({
                ...product,
                quantity: nextQuantity,
              });
            }}
          />
        ))}
      </div>

      <div className="py-10 sm:hidden block">
        <SeeMoreButton className="flex" />
      </div>
    </div>
  );
};

export default HeavenlyHits;
