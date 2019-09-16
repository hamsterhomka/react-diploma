import encodeQueryData from './index';
import { PATHS } from '../constants';

export const fetchProductsUrl = (categoryId, q, offset) => (
  `${process.env.API_PRODUCTS_URL}?${encodeQueryData({ categoryId, q, offset })}`
);

export const fetchProductUrl = (id) => (
  `${process.env.API_PRODUCTS_URL}/${id}`
);

export const productLinkUrl = (id) => (
  `${PATHS.catalog}/${id}`
);
