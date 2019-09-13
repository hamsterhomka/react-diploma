import { ADD_PRODUCT_TO_CART } from '../actions/actionTypes';

const initialState = {
  products: [],
};

export default function cartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_PRODUCT_TO_CART: {
      const { product } = payload;
      return { ...state, ...state.products.push(product) };
    }
    default:
      return { ...state };
  }
}
