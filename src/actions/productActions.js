import { FETCH_PRODUCTS } from "../constatnts";
import data from "../data.json";

export const fetchProducts = () => {
  return {
    type: FETCH_PRODUCTS,
    payload: data.products,
  };
};
