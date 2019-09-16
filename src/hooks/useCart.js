import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadCartProductsState } from '../actions/cartActions';

export default function useCart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { products } = JSON.parse(localStorage.getItem('cart'));

  useEffect(() => {
    if (!cart.isLoaded) {
      dispatch(loadCartProductsState(products));
    }
  }, [dispatch]);

  return cart;
}
