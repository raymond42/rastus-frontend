"use client";

import React, { useEffect, useRef, useState } from "react";
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
    className={`hover:bg-white-primary hover:text-primary text-white-primary text-[14px] border-2 border-white-primary w-48 h-16 justify-center font-bold items-center flex ${className}`}
  >
    SEE MORE
  </Link>
);

const HeavenlyHits: React.FC = () => {
  const [visibleStates, setVisibleStates] = useState<boolean[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();
  const { toast } = useToast();

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const featuredProducts = useSelector(selectFeaturedProducts);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const states: boolean[] = new Array(featuredProducts.length).fill(true);

    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll(".scroll-item");

    items.forEach((el, i) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          states[i] = entry.intersectionRatio >= 1;
          setVisibleStates([...states]);
        },
        {
          root: container,
          threshold: 1,
        }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [featuredProducts]);

  // Track active visible item for pagination dots
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      const scrollLeft = container.scrollLeft;
      const containerWidth = container.clientWidth;
      const index = Math.round(scrollLeft / containerWidth);
      setActiveIndex(index);
    };

    container.addEventListener("scroll", onScroll);

    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToIndex = (index: number) => {
    const container = containerRef.current;
    if (!container) return;

    const containerWidth = container.clientWidth;
    container.scrollTo({
      left: containerWidth * index,
      behavior: "smooth",
    });
  };

  const handleAdd = (product: ProductType) => {
    handleAddToBag({
      product: { ...product, quantity: 1 },
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

      <div
        ref={containerRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth w-full sm:full sm:pt-32 pt-6 sm:pl-16 gap-6 hide-scrollbar"
      >
        {featuredProducts.map((product, key) => (
          <div
            key={product.id}
            className={`scroll-item min-w-[calc(100%/3)] flex-shrink-0 snap-start transition-opacity duration-300 ${
              visibleStates[key] === false ? "opacity-50" : "opacity-100"
            }`}
          >
            <ProductCard
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
          </div>
        ))}
      </div>

      <div className="py-10 sm:hidden block">
        <SeeMoreButton className="flex" />
      </div>
    </div>
  );
};

export default HeavenlyHits;
