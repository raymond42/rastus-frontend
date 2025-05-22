// store/slices/productsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "@/app/types/product";
import { Products } from "@/app/constants"; // import your constants

interface ProductsState {
  products: ProductType[];
}

const initialState: ProductsState = {
  products: Products, // use your constants here
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductType[]>) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
