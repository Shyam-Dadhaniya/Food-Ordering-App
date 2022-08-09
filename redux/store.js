import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, cartReducer);
export default configureStore({
  reducer: {
    cart: persistedReducer,
  },
});
