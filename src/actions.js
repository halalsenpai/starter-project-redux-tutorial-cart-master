export const INCREASE = "INCREASE";

export const DECREASE = "DECREASE";

export const REMOVE = "REMOVE";

export const CLEAR_CART = "CLEAR_CART";

export const TOTAL = "TOTAL";

export const GET_AMOUNT = "GET_AMOUNT";

export const clearCart = () => ({
  type: CLEAR_CART,
});
export const removeItem = (id) => ({
  type: REMOVE,
  payload: id,
});
export const increaseItem = (id) => ({
  type: INCREASE,
  payload: id,
});
export const decreaseItem = (id, amount) => ({
  type: DECREASE,
  payload: { id, amount },
});
export const getTotal = (payload) => ({
  type: TOTAL,
  payload,
});
