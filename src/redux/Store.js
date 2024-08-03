import {configureStore} from "@reduxjs/toolkit";
import CartSlice from "./Slices/CartSlice";
import CategorySlice from './Slices/CategorySlice.jsx'
import SearchSlice from './Slices/SearchSlice.jsx'
const Store= configureStore({
  reducer:{
    cart: CartSlice,
    category: CategorySlice,
    search: SearchSlice,
  }
});
export default Store;