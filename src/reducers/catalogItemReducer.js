import {
  FETCH_CATALOG_ITEM_REQUEST,
  FETCH_CATALOG_ITEM_FAILURE,
  FETCH_CATALOG_ITEM_SUCCESS,
  INCREMENT_QUANTITY, DECREMENT_QUANTITY, SELECT_SIZE, RESET_CATALOG_ITEM,
} from '../actions/actionTypes';
import { CATALOG_ITEM_MAX_QUANTITY } from '../constants';

const initialState = {
  isLoading: true,
  error: null,
  id: null,
  category: null,
  title: '',
  images: [],
  sku: '',
  manufacturer: '',
  color: '',
  material: '',
  reason: '',
  season: '',
  price: null,
  heelSize: '',
  sizes: [],
  quantity: 1,
  selectedSize: null,
};

export default function catalogReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATALOG_ITEM_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case FETCH_CATALOG_ITEM_FAILURE: {
      const { error } = action.payload;
      return { ...state, isLoading: false, error };
    }
    case FETCH_CATALOG_ITEM_SUCCESS: {
      const { product } = action.payload;
      return {
        ...state, ...product, isLoading: false, error: null,
      };
    }
    case INCREMENT_QUANTITY: {
      const quantity = state.quantity < CATALOG_ITEM_MAX_QUANTITY ? state.quantity + 1 : state.quantity;
      return {
        ...state, quantity,
      };
    }
    case DECREMENT_QUANTITY: {
      const quantity = state.quantity > 1 ? state.quantity - 1 : state.quantity;
      return {
        ...state, quantity,
      };
    }
    case SELECT_SIZE: {
      const { size } = action.payload;
      return {
        ...state, selectedSize: size,
      };
    }
    case RESET_CATALOG_ITEM: {
      return {
        ...initialState,
      };
    }
    default: {
      return { ...state };
    }
  }
}
