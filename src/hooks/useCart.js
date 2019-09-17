import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadCartProductsState } from '../actions/cartActions';

export default function useCart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const cartStorage = localStorage.getItem('cart');

  useEffect(() => {
    if (cartStorage && !cart.isLoaded) {
      const { products } = JSON.parse(cartStorage);

      dispatch(loadCartProductsState(products));
    }
  }, [dispatch]);

  return cart;
}
