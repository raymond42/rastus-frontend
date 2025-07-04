import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import cartReducer from "./slices/cartSlice";
import productsReducer from "./slices/productsSlice";
import loadingReducer from "./slices/loadingSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      loading: loadingReducer,
      cart: cartReducer,
      products: productsReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore);
