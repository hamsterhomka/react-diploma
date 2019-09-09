import { ofType } from 'redux-observable';
import {
  catchError, map, retry, switchMap,
} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';
import { FETCH_TOP_SALES_REQUEST } from '../actions/actionTypes';
import { fetchTopSalesFailure, fetchTopSalesSuccess } from '../actions/topSalesActions';

export function fetchTopSalesEpic(action$) {
  return action$.pipe(
    ofType(FETCH_TOP_SALES_REQUEST),
    switchMap(() => ajax.getJSON(process.env.API_TOP_SALES_URL)
      .pipe(
        retry(3),
        map((products) => fetchTopSalesSuccess(products)),
        catchError((error) => of(fetchTopSalesFailure(error))),
      )),
  );
}
