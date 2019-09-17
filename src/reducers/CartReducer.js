import {
  ADD_PRODUCT_TO_CART, LOAD_CART_PRODUCTS_STATE, REMOVE_PRODUCT_FROM_CART, RESET_CART, SET_CART_DONE,
} from '../actions/actionTypes';

const initialState = {
  products: [],
  isLoaded: false,
  isDone: false,
};

export default function cartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_PRODUCT_TO_CART: {
      const { product } = payload;
      const productExistInState = state.products.find((productInState) => (
        productInState.sku === product.sku && productInState.selectedSize === product.selectedSize
      ));

      if (productExistInState) {
        const modifiedProducts = state.products.map((productInState) => {
          if (productInState.sku === productExistInState.sku) {
            const productWithChanges = { ...productInState };
            productWithChanges.quantity += product.quantity;
            return productWithChanges;
          }

          return productInState;
        });

        return {
          ...state,
          products: modifiedProducts,
        };
      }

      return { ...state, ...state.products.push(product) };
    }
    case REMOVE_PRODUCT_FROM_CART: {
      const { id, selectedSize } = payload;
      return {
        ...state,
        products: state.products.filter((product) => product.id !== id && product.selectedSize !== selectedSize),
      };
    }
    case LOAD_CART_PRODUCTS_STATE: {
      const { products } = payload;
      return {
        ...state,
        products,
        isLoaded: true,
      };
    }
    case RESET_CART: {
      return { ...state, isDone: false };
    }
    case SET_CART_DONE: {
      return { ...initialState, products: [], isDone: true };
    }
    default:
      return { ...state };
  }
}
