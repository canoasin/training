import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";
import stock from "./store/stockSlice";
import basket from "./store/basketSlice";

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    basket: basket.reducer,
  },
});
