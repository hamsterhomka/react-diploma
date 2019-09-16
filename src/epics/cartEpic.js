import { ofType } from 'redux-observable';
import { ignoreElements, tap } from 'rxjs/operators';
import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART, RESET_CART } from '../actions/actionTypes';

export function cartLocalStorageEpic(action$, $state) {
  return action$.pipe(
    ofType(
      ADD_PRODUCT_TO_CART,
      REMOVE_PRODUCT_FROM_CART,
      RESET_CART,
    ),
    tap(() => {
      localStorage.setItem('cart', JSON.stringify($state.value.cart));
    }),
    ignoreElements(),
  );
}
