import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from '../../components/Cart';
import Order from '../../components/Order/Order';
import { resetCart } from '../../actions/cartActions';
import useTitle from '../../hooks/useTitle';

function CartView() {
  const { products, isDone } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useTitle('Корзина');

  useEffect(() => () => {
    dispatch(resetCart());
  }, []);

  const renderOrder = () => (
    products.length
      ? <Order />
      : <p>Для оформления заказа добавьте товары в корзину</p>
  );

  return (
    <>
      <Cart />
      {!isDone && renderOrder()}
    </>
  );
}

export default CartView;
