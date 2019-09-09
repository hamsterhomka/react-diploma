import { FETCH_TOP_SALES_FAILURE, FETCH_TOP_SALES_REQUEST, FETCH_TOP_SALES_SUCCESS } from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  products: [],
  error: null,
};

export default function topSalesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TOP_SALES_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }
    case FETCH_TOP_SALES_FAILURE: {
      const { error } = action.payload;
      return {
        ...state,
        isLoading: false,
        error,
      };
    }
    case FETCH_TOP_SALES_SUCCESS: {
      const { products } = action.payload;
      return {
        ...state,
        isLoading: false,
        products,
      };
    }
    default:
      return { ...state };
  }
}
