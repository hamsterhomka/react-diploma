import {
  DECREMENT_QUANTITY,
  FETCH_CATALOG_ITEM_FAILURE,
  FETCH_CATALOG_ITEM_REQUEST,
  FETCH_CATALOG_ITEM_SUCCESS,
  INCREMENT_QUANTITY,
  RESET_CATALOG_ITEM,
  SELECT_SIZE,
} from './actionTypes';

export const fetchCatalogItemRequest = (id) => ({
  type: FETCH_CATALOG_ITEM_REQUEST,
  payload: { id },
});

export const fetchCatalogItemFailure = (error) => ({
  type: FETCH_CATALOG_ITEM_FAILURE,
  payload: { error },
});

export const fetchCatalogItemSuccess = (product) => ({
  type: FETCH_CATALOG_ITEM_SUCCESS,
  payload: { product },
});

export const incrementQuantity = () => ({
  type: INCREMENT_QUANTITY,
});

export const decrementQuantity = () => ({
  type: DECREMENT_QUANTITY,
});

export const resetCatalogItem = () => ({
  type: RESET_CATALOG_ITEM,
});

export const selectSize = (size) => ({
  type: SELECT_SIZE,
  payload: { size },
});
