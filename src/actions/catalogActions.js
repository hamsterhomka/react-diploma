import {
  CATALOG_NEEDS_SCROLL,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS,
  SET_CATEGORY, SET_OFFSET, SET_SEARCH,
} from './actionTypes';


export const fetchCategoriesRequest = () => ({
  type: FETCH_CATEGORIES_REQUEST,
});

export const fetchCategoriesFailure = (error) => ({
  type: FETCH_CATEGORIES_FAILURE,
  payload: { error },
});

export const fetchCategoriesSuccess = (items) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: { items },
});

export const setCategory = (id) => ({
  type: SET_CATEGORY,
  payload: { id },
});

export const setSearch = (search) => ({
  type: SET_SEARCH,
  payload: { search },
});

export const setOffset = (offset) => ({
  type: SET_OFFSET,
  payload: { offset },
});

export const fetchProductsRequest = (categoryId, search, offset) => ({
  type: FETCH_PRODUCTS_REQUEST,
  payload: {
    categoryId,
    search,
    offset,
  },
});

export const fetchProductsFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error: error.message },
});

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products },
});

export const setCatalogNeedsScroll = (needScroll) => ({
  type: CATALOG_NEEDS_SCROLL,
  payload: { needScroll },
});
