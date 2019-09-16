import { ofType } from 'redux-observable';
import {
  switchMap, map, catchError,
} from 'rxjs/operators';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { fetchProductUrl } from '../helpers/urlCreators';
import { FETCH_CATALOG_ITEM_REQUEST } from '../actions/actionTypes';
import { fetchCatalogItemFailure, fetchCatalogItemSuccess } from '../actions/catalogItemActions';

export function fetchCatalogItemEpic(action$) {
  return action$.pipe(
    ofType(FETCH_CATALOG_ITEM_REQUEST),
    map((action) => action.payload.id),
    switchMap((id) => (
      ajax.getJSON(fetchProductUrl(id))
        .pipe(
          // retry(3),
          map((product) => fetchCatalogItemSuccess(product)),
          catchError((error) => of(fetchCatalogItemFailure(error.message))),
        ))),
  );
}
