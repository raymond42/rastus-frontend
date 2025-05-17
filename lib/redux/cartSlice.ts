// lib/redux/cartSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ColorType, ProductType, SizeType } from "@/app/types/product";

interface CartItem extends ProductType {
  quantity: number;
}

interface CartState {
  isOpen: boolean;
  items: CartItem[];
}

const initialState: CartState = {
  isOpen: false,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeCart: (state) => {
      state.isOpen = false;
    },
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          item.size === action.payload.size &&
          item.color === action.payload.color
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeFromCart: (
      state,
      action: PayloadAction<{ id: string; size: SizeType; color: ColorType }>
    ) => {
      state.items = state.items.filter((item) => {
        console.log("item: ", item);
        console.log("action.payload: ", action.payload);
        return !(
          item.id === action.payload.id &&
          item.size.name === action.payload.size.name &&
          item.color.name === action.payload.color.name
        );
      });
    },
  },
});

export const { toggleCart, closeCart, addToCart, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
