import { createStore } from "redux";
import cartItems from "./cart-items";

import { cartReducer as reducer } from "./reducers/CartReducer";

const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0,
};

const store = createStore(reducer, initialStore);

export default store;
