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
      const existingItem = state.items.some(
        (item) =>
          item.id === action.payload.id &&
          item.size.name === action.payload.size.name &&
          item.color.name === action.payload.color.name
      );
      if (!existingItem) {
        state.items.push(action.payload);
      }
      return;
    },
    updateCartItemQuantity: (
      state,
      action: PayloadAction<{
        id: string;
        size: SizeType;
        color: ColorType;
        quantity: number;
      }>
    ) => {
      const { id, size, color, quantity } = action.payload;

      const itemIndex = state.items.findIndex(
        (item) =>
          item.id === id &&
          item.size.name === size.name &&
          item.color.name === color.name
      );

      if (itemIndex !== -1) {
        const item = state.items[itemIndex];
        if (quantity > 0) {
          state.items[itemIndex] = {
            ...item,
            quantity: quantity,
          };
        } else {
          state.items.splice(itemIndex, 1);
        }
      }
    },
    removeFromCart: (
      state,
      action: PayloadAction<{ id: string; size: SizeType; color: ColorType }>
    ) => {
      state.items = state.items.filter((item) => {
        return !(
          item.id === action.payload.id &&
          item.size.name === action.payload.size.name &&
          item.color.name === action.payload.color.name
        );
      });
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  toggleCart,
  closeCart,
  addToCart,
  removeFromCart,
  clearCart,
  updateCartItemQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
