import { ADD_TO_CART, REMOVE_FROM_CART } from "../constatnts";

export const addToCart = (product) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice();
  let alreayExists = false;
  cartItems.forEach((x) => {
    if (x._id === product._id) {
      alreayExists = true;
      x.count++;
    }
  });
  if (!alreayExists) {
    cartItems.push({ ...product, count: 1 });
  }
  dispatch({
    type: ADD_TO_CART,
    payload: { cartItems },
  });
  localStorage.setItem("cartitems", JSON.stringify(cartItems));
};

export const removeFromCart = (product) => (dispatch, getState) => {
  const cartItems = getState()
    .cart.cartItems.slice()
    .filter((x) => x._id !== product._id);
  dispatch({
    type: REMOVE_FROM_CART,
    payload: { cartItems },
  });
  localStorage.setItem("cartitems", JSON.stringify(cartItems));
};
