import { ofType } from 'redux-observable';
import { ignoreElements, tap } from 'rxjs/operators';
import { ADD_PRODUCT_TO_CART } from '../actions/actionTypes';

export function addProductToCartEpic(action$, $state) {
  return action$.pipe(
    ofType(ADD_PRODUCT_TO_CART),
    tap(() => {
      localStorage.setItem('cart', JSON.stringify($state.value.cart));
    }),
    ignoreElements(),
  );
}
