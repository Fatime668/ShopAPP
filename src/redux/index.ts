import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./slices/ProductSlice";

export const store = configureStore({
    reducer: {
        product: productSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;