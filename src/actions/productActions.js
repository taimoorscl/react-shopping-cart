import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS_BY_SIZE,
  ORDER_PRODUCTS_BY_PRICE,
} from "../constatnts";
import data from "../data.json";

export const fetchProducts = () => (dispatch) => {
  dispatch({
    type: FETCH_PRODUCTS,
    payload: data.products,
  });
};

export const filterProducts = (products, size) => (dispatch) => {
  dispatch({
    type: FILTER_PRODUCTS_BY_SIZE,
    payload: {
      size: size,
      items:
        size === ""
          ? products
          : products.filter((x) => x.availableSizes.indexOf(size) >= 0),
    },
  });
};

export const sortProducts = (filterProduct, sort) => (dispatch) => {
  const sortedProduct = filterProduct.slice();
  if (sort === "latest") {
    sortedProduct.sort((a, b) => (a._id > b._id ? 1 : -1));
  } else {
    sortedProduct.sort((a, b) =>
      sort === "lowest"
        ? a.price > b.price
          ? 1
          : -1
        : a.price > b.price
        ? -1
        : 1
    );
  }
  dispatch({
    type: ORDER_PRODUCTS_BY_PRICE,
    payload: {
      sort: sort,
      items: sortedProduct,
    },
  });
};
