import React from 'react';
import OrderForm from './OrderForm';

function Order() {
  return (
    <section className="order">
      <h2 className="text-center">Оформить заказ</h2>
      <div
        className="card"
        style={{
          maxWidth: '30rem',
          margin: '0 auto',
        }}
      >
        <OrderForm />
      </div>
    </section>
  );
}

export default Order;
