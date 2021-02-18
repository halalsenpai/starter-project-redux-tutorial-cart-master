import { CLEAR_CART, DECREASE, INCREASE, REMOVE, TOTAL } from "../actions";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    case INCREASE:
      var tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload) {
          cartItem = { ...cartItem, amount: cartItem.amount + 1 };
          return cartItem;
        }
        return cartItem;
      });
      return {
        ...state,
        cart: tempCart,
      };

    case DECREASE:
      var tCart = [];
      if (action.payload.amount === 1) {
        tCart = state.cart.filter((item) => item.id !== action.payload.id);
      } else
        tCart = state.cart.map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            cartItem = { ...cartItem, amount: cartItem.amount - 1 };
          }
          return cartItem;
        });
      return {
        ...state,
        cart: tCart,
      };

    case REMOVE:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case TOTAL:
      let { amount, total } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;
          cartTotal.total += itemTotal;
          cartTotal.amount += amount;
          return cartTotal;
        },
        {
          amount: 0,
          total: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      return {
        ...state,
        total,
        amount,
      };

    default:
      return state;
  }
};
