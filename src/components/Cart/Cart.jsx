import React from 'react';
import { useSelector } from 'react-redux';
import CartProducts from './CartProducts';

function Cart() {
  const { products, isDone } = useSelector((state) => state.cart);


  const renderProducts = () => (
    products.length
      ? <CartProducts products={products} />
      : <p>Корзина пуста</p>
  );


  return (
    <section className="cart">
      <h2 className="text-center">Корзина</h2>
      {isDone
        ? <div className="alert alert-success" role="alert">Ваш заказ успешно оформлен</div>
        : renderProducts()}
    </section>
  );
}

export default Cart;
