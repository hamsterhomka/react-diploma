import { ofType } from 'redux-observable';
import {
  switchMap, retry, map, catchError, mergeMap,
} from 'rxjs/operators';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import {
  FETCH_CATEGORIES_REQUEST, FETCH_PRODUCTS_REQUEST, SET_CATEGORY, SET_OFFSET,
} from '../actions/actionTypes';
import {
  fetchCategoriesFailure,
  fetchCategoriesSuccess,
  fetchProductsFailure,
  fetchProductsRequest,
  fetchProductsSuccess, setOffset,
} from '../actions/catalogActions';
import { fetchProductsUrl } from '../helpers/apiUrlCreators';

export function fetchCategoriesEpic(action$) {
  return action$.pipe(
    ofType(FETCH_CATEGORIES_REQUEST),
    switchMap(() => ajax.getJSON(process.env.API_CATEGORIES_URL)
      .pipe(
        retry(3),
        map((categories) => fetchCategoriesSuccess(categories)),
        catchError((error) => of(fetchCategoriesFailure(error))),
      )),
  );
}

export function fetchProductsEpic(action$, state$) {
  return action$.pipe(
    ofType(FETCH_PRODUCTS_REQUEST),
    switchMap(() => (
      ajax.getJSON(fetchProductsUrl(
        state$.value.catalog.categories.selectedCategoryId,
        state$.value.catalog.products.search,
        state$.value.catalog.products.offset,
      ))
        .pipe(
          retry(3),
          map((products) => fetchProductsSuccess(products)),
          catchError((error) => of(fetchProductsFailure(error))),
        ))),
  );
}

export function setCategoryEpic(action$) {
  return action$.pipe(
    ofType(SET_CATEGORY),
    mergeMap(() => of(
      setOffset(0),
      fetchProductsRequest(),
    )),
  );
}

export function setOffsetEpic(action$) {
  return action$.pipe(
    ofType(SET_OFFSET),
    map(() => fetchProductsRequest()),
  );
}
