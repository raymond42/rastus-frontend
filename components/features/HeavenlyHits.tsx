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
  const [itemsPerPage, setItemsPerPage] = useState(3); // default desktop

  const containerRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();
  const { toast } = useToast();

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const featuredProducts = useSelector(selectFeaturedProducts);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.matchMedia("(max-width: 640px)").matches) {
        setItemsPerPage(1); // mobile shows 1 item per page
      } else {
        setItemsPerPage(3); // desktop shows 3 items per page
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(featuredProducts.length / itemsPerPage);

  // Scroll handler: calculate active page index based on scrollLeft and page width
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      const scrollLeft = container.scrollLeft;
      const pageWidth = container.offsetWidth; // container width = one "page" width
      const index = Math.round(scrollLeft / pageWidth);
      setActiveIndex(index);
    };

    container.addEventListener("scroll", onScroll);
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;

    const updateVisibility = () => {
      const items = container.querySelectorAll(".scroll-item");
      const containerRect = container.getBoundingClientRect();
      const newVisibleStates: boolean[] = [];

      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const itemWidth = itemRect.right - itemRect.left;
        const visibleWidth =
          Math.min(itemRect.right, containerRect.right) -
          Math.max(itemRect.left, containerRect.left);
        const visibilityRatio = visibleWidth / itemWidth;

        // Visible if more than 90% is in view
        newVisibleStates.push(visibilityRatio >= 0.9);
      });

      setVisibleStates(newVisibleStates);
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(updateVisibility);
    };

    updateVisibility();
    container.addEventListener("scroll", onScroll);
    window.addEventListener("resize", updateVisibility);

    return () => {
      container.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateVisibility);
      cancelAnimationFrame(animationFrameId);
    };
  }, [featuredProducts]);

  // Scroll to page by scrolling container by container width (page width)
  const scrollToIndex = (index: number) => {
    const container = containerRef.current;
    if (!container) return;

    if (itemsPerPage === 1) {
      // Mobile: scroll by item width
      const firstItem = container.querySelector(
        ".scroll-item"
      ) as HTMLElement | null;
      if (!firstItem) return;

      const gap = parseInt(
        getComputedStyle(container).columnGap ||
          getComputedStyle(container).gap ||
          "0",
        10
      );
      const itemWidth = firstItem.offsetWidth + gap;

      container.scrollTo({
        left: index * itemWidth,
        behavior: "smooth",
      });
    } else {
      // Desktop: scroll by full container width (1 "page" = 3 items)
      container.scrollTo({
        left: index * container.offsetWidth,
        behavior: "smooth",
      });
    }
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
    <div className="bg-primary flex flex-col sm:flex-row items-center sm:pl-[151px] sm:h-screen w-full overflow-hidden h-full sm:text-start text-center sm:gap-6">
      {/* Text Section */}
      <div className="flex flex-col items-center sm:items-start gap-6 sm:w-1/3 sm:px-24 px-6 py-8 w-full">
        <h1
          className={`${jostSemiBold.className} text-white-primary
          text-[36px] sm:text-[52px] leading-tight sm:leading-none`}
        >
          Heavenly Hits
        </h1>
        <p
          className={`${jost.className} text-white-primary
          text-[16px] sm:text-[20px] px-0 sm:px-0`}
        >
          These are the best-selling products of the month. They are customer
          favorites and are highly recommended.
        </p>

        <div className="sm:flex hidden">
          <SeeMoreButton className="flex" />
        </div>
      </div>

      {/* Products Section */}
      <div className="flex flex-col sm:w-2/3 w-full">
        <div
          ref={containerRef}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar gap-4 px-6 sm:px-0"
        >
          {featuredProducts.map((product, key) => (
            <div
              key={product.id}
              className={`pl-3 sm:pl-0 scroll-item flex-shrink-0 snap-start transition-opacity duration-300
              ${visibleStates[key] === false ? "opacity-50" : "opacity-100"}
              sm:min-w-[calc(100%/3)] 
              w-[90vw] sm:w-auto
            `}
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

        {/* Pagination dots */}
        <div className="flex sm:justify-start justify-center gap-2 sm:gap-3 sm:pt-6 w-full z-10 mt-8 sm:mt-0 px-6 sm:px-0">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`w-3 h-3 rounded-full transition-colors ${
                i === activeIndex ? "bg-white-primary" : "bg-transparent border"
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* See more button only visible on mobile */}
      <div className="py-10 sm:hidden block px-6 w-full justify-center">
        <SeeMoreButton className="flex w-full max-w-xs mx-auto" />
      </div>
    </div>
  );
};

export default HeavenlyHits;
