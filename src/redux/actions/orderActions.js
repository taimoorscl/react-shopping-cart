import { CREATE_ORDER, CLEAR_CART, CLEAR_ORDER } from "../constatnts";

export const createOrder = (order) => (dispatch) => {
  dispatch({ type: CREATE_ORDER, payload: order });
  localStorage.clear("cartItems");
  dispatch({ type: CLEAR_CART });
};

export const clearOrder = () => (dispatch) => {
  dispatch({ type: CLEAR_ORDER });
};
