import { FETCH_TOP_SALES_FAILURE, FETCH_TOP_SALES_REQUEST, FETCH_TOP_SALES_SUCCESS } from './actionTypes';

export const fetchTopSalesRequest = () => ({
  type: FETCH_TOP_SALES_REQUEST,
});

export const fetchTopSalesFailure = (error) => ({
  type: FETCH_TOP_SALES_FAILURE,
  payload: { error },
});

export const fetchTopSalesSuccess = (products) => ({
  type: FETCH_TOP_SALES_SUCCESS,
  payload: { products },
});
