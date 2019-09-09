import {
  CATALOG_NEEDS_SCROLL,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  SET_CATEGORY, SET_OFFSET, SET_SEARCH,
} from '../actions/actionTypes';
import { OFFSET_LOAD_AMOUNT } from '../constants';

// Категория без id - "Все категории"
const initialCategoriesListState = [{
  id: null,
  title: 'Все',
}];

const initialState = {
  needScroll: false,
  categories: {
    items: initialCategoriesListState,
    isLoading: false,
    error: null,
    selectedCategoryId: null,
  },
  products: {
    offset: 0,
    search: '',
    items: [],
    isLoading: false,
    error: null,
    areProductsOver: false,
  },
};

export default function catalogReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORIES_REQUEST: {
      return {
        ...state,
        categories: {
          ...state.categories,
          isLoading: true,
          error: null,
        },
      };
    }
    case FETCH_CATEGORIES_FAILURE: {
      const { error } = action.payload;
      return {
        ...state,
        categories: {
          ...state.categories,
          isLoading: false,
          error,
        },
      };
    }
    case FETCH_CATEGORIES_SUCCESS: {
      const { items } = action.payload;
      return {
        ...state,
        categories: {
          ...state.categories,
          isLoading: false,
          items: [...initialCategoriesListState, ...items],
          error: null,
        },
      };
    }
    case SET_CATEGORY: {
      const { id } = action.payload;
      return {
        ...state,
        categories: {
          ...state.categories,
          selectedCategoryId: id,
        },
      };
    }

    case FETCH_PRODUCTS_REQUEST: {
      return {
        ...state,
        products: {
          ...state.products,
          isLoading: true,
          error: null,
        },
      };
    }
    case FETCH_PRODUCTS_FAILURE: {
      const { error } = action.payload;
      return {
        ...state,
        products: {
          ...state.products,
          isLoading: false,
          error,
        },
      };
    }
    case FETCH_PRODUCTS_SUCCESS: {
      const { products } = action.payload;
      const areProductsOver = products.length < OFFSET_LOAD_AMOUNT;
      return {
        ...state,
        products: {
          ...state.products,
          isLoading: false,
          items: state.products.offset === 0 ? products : [...state.products.items, ...products],
          error: null,
          areProductsOver,
        },
      };
    }
    case SET_OFFSET: {
      const { offset } = action.payload;
      return {
        ...state,
        products: {
          ...state.products,
          offset,
        },
      };
    }
    case SET_SEARCH: {
      const { search } = action.payload;
      return {
        ...state,
        products: {
          ...state.products,
          search,
        },
      };
    }
    case CATALOG_NEEDS_SCROLL: {
      const { needScroll } = action.payload;
      return { ...state, needScroll };
    }
    default: {
      return { ...state };
    }
  }
}
