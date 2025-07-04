import { ProductType } from "@/app/types/product";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

type handleAddToBagProps = {
  product: ProductType;
  cartItems: ProductType[];
  dispatch: any;
  toast: any;
  updateCartItemQuantity: (item: ProductType) => void;
  addToCart: (item: ProductType) => void;
  toggleCart: () => void;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleAddToBag = ({
  product,
  cartItems,
  dispatch,
  toast,
  updateCartItemQuantity,
  addToCart,
  toggleCart,
}: handleAddToBagProps) => {
  const cartItem = {
    ...product,
    size: product.size,
    color: product.color,
    quantity: product.quantity,
  };

  const existingCartItem = cartItems.find(
    (item) =>
      item.id === product.id &&
      item.size.name === product.size.name &&
      item.color.name === product.color.name
  );

  if (existingCartItem) {
    if (product.quantity !== existingCartItem.quantity) {
      dispatch(
        updateCartItemQuantity({
          ...existingCartItem,
          quantity: product.quantity,
        })
      );
    } else {
      toast({
        title: "Already in cart",
        description: "This item is already in your cart.",
        variant: "default",
        duration: 2000,
      });
      return;
    }
  }

  dispatch(addToCart(cartItem));
  dispatch(toggleCart());
};
