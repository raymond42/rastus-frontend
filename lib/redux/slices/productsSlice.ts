import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { ProductType } from "@/app/types/product";
import { Products } from "@/app/constants";
import { RootState } from "../store"; // ✅ make sure path is correct

interface ProductsState {
  products: ProductType[];
}

const initialState: ProductsState = {
  products: Products,
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

// Memoized selectors
const selectProducts = (state: RootState) => state.products.products;

export const selectFeaturedProducts = createSelector(
  [selectProducts],
  (products) => products.filter((p) => p.isFeatured)
);

// Exports
export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
