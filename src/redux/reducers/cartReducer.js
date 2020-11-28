import { ADD_TO_CART, REMOVE_FROM_CART } from "../constatnts";

export const cartReducer = (
  state = {
    cartItems: JSON.parse(localStorage.getItem("cartitems") || "[]"),
  },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { cartItems: action.payload.cartItems };
    case REMOVE_FROM_CART:
      return { cartItems: action.payload.cartItems };
    default:
      return state;
  }
};
