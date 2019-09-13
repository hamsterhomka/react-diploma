import { ADD_PRODUCT_TO_CART } from './actionTypes';

export const addProductToCart = (product) => ({
  type: ADD_PRODUCT_TO_CART,
  payload: { product },
});
