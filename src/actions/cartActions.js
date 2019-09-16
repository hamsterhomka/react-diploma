import {
  ADD_PRODUCT_TO_CART, LOAD_CART_PRODUCTS_STATE, REMOVE_PRODUCT_FROM_CART, RESET_CART, SET_CART_DONE,
} from './actionTypes';

export const addProductToCart = (product) => ({
  type: ADD_PRODUCT_TO_CART,
  payload: { product },
});

export const loadCartProductsState = (products) => ({
  type: LOAD_CART_PRODUCTS_STATE,
  payload: { products },
});

export const removeProductFromCart = (id, selectedSize) => ({
  type: REMOVE_PRODUCT_FROM_CART,
  payload: { id, selectedSize },
});

export const resetCart = () => ({
  type: RESET_CART,
});

export const setCartDone = () => ({
  type: SET_CART_DONE,
});
