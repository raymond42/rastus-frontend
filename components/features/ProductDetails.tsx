"use client";
import React from "react";
import { montserrat, montserratBold } from "@/utils/fonts";
import { ProductType, ColorType, SizeType } from "@/app/types/product";
import Box from "./Box";
import { CiClock2, CiRuler } from "react-icons/ci";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  toggleCart,
  updateCartItemQuantity,
} from "@/lib/redux/slices/cartSlice";
import { useToast } from "@/hooks/use-toast";
import { RootState } from "@/lib/redux/store";
import { FaShoppingCart } from "react-icons/fa";
import QuantitySelector from "./QuantitySelector";
import { handleAddToBag } from "@/utils/helpers";

type ProductDetailsProps = {
  product: ProductType;
  colors: ColorType[];
  onColorChange: (color: ColorType) => void;
  sizeOptions: SizeType[];
  onSizeChange: (size: SizeType) => void;
  selectedSize: SizeType;
  setQuantity: (quantity: number) => void;
  quantity: number;
};

const ProductDetails = ({
  product,
  colors,
  onColorChange,
  sizeOptions,
  onSizeChange,
  setQuantity,
  quantity,
}: ProductDetailsProps) => {
  const dispatch = useDispatch();

  const { toast } = useToast();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const updatedProduct: ProductType = {
    ...product,
    quantity,
  };

  const handleColorChange = (item: ColorType | SizeType) => {
    onColorChange(item as ColorType);
  };

  const handleSizeChange = (item: ColorType | SizeType) => {
    onSizeChange(item as SizeType);
  };

  return (
    <div className="text-primary flex flex-col gap-4">
      <div className="flex flex-col">
        <h1
          className={`${montserratBold.className} text-xl uppercase underline`}
        >
          {updatedProduct.name}
        </h1>
        <p className={`${montserrat.className} text-base capitalize`}>
          {updatedProduct.shortDescription}
        </p>
      </div>
      <div className="flex flex-col">
        <h1 className={`${montserratBold.className} text-base capitalize`}>
          color
        </h1>
        <Box
          items={colors}
          selectedItem={updatedProduct.color}
          handleItemChange={handleColorChange}
        />
      </div>
      <div className="size">
        <h1 className={`${montserratBold.className} text-base capitalize`}>
          size
        </h1>
        <Box
          items={sizeOptions}
          selectedItem={updatedProduct.size}
          handleItemChange={handleSizeChange}
        />
      </div>
      <div className="quantity">
        <h1 className={`${montserratBold.className} text-base capitalize`}>
          quantity
        </h1>
        <QuantitySelector
          quantity={updatedProduct.quantity}
          setQuantity={setQuantity}
        />
      </div>
      <div className="price pt-5">
        <h1 className={`${montserratBold.className} text-base capitalize`}>
          Price
        </h1>
        <div className="flex items-center gap-4">
          <p className={`${montserrat.className} text-[22px]`}>
            {updatedProduct.price}
          </p>
          <RiVerifiedBadgeFill className="text-primary opacity-85" size={25} />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-5">
          <CiClock2 />
        </span>
        <p className={`${montserrat.className} text-base`}>
          Delivery today between 8:00AM and 8:00PM
        </p>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-5">
          <CiRuler />
        </span>
        <p className={`${montserrat.className} text-base`}>
          What&apos;s my size?
          <b className="pl-2">{updatedProduct.size.fullName}</b>
        </p>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-5 h-full flex items-center justify-center">
          <div className="w-2 h-2 bg-green-500 rounded-full" />
        </div>
        <p className={`${montserrat.className} text-base`}>
          {updatedProduct.stock} in stock remaining, ready for delivery
        </p>
      </div>
      <div className="Buttons flex flex-col gap-5 mt-4">
        <Button
          className={`${montserrat.className} capitalize text-[18px] border-2 border-primary bg-primary text-white-primary sm:w-[500px] w-full h-[40px] rounded-md flex justify-center items-center gap-4`}
          onClick={() =>
            handleAddToBag({
              product: updatedProduct,
              cartItems,
              dispatch,
              toast,
              updateCartItemQuantity,
              addToCart,
              toggleCart,
            })
          }
        >
          <FaShoppingCart /> Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
