import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./counters/cartSlice"

export const store = configureStore({
  reducer: {
    counter: cartReducer,
  },
})