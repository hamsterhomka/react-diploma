import React from 'react';
import PropTypes from 'prop-types';
import CartProductItem from '../CartProductItem';
import { cartProductPropType } from '../../../types/shapes';

function CartProducts({ products }) {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Название</th>
          <th scope="col">Размер</th>
          <th scope="col">Кол-во</th>
          <th scope="col">Стоимость</th>
          <th scope="col">Итого</th>
          <th scope="col">Действия</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, i) => (
          <CartProductItem
            key={`${product.id}${product.selectedSize}`}
            product={product}
            n={i + 1}
          />
        ))}
        <tr>
          <td colSpan="5" className="text-right">Общая стоимость</td>
          <td>
            {products.reduce((totalPrice, product) => totalPrice + product.price * product.quantity, 0)}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

CartProducts.propTypes = {
  products: PropTypes.arrayOf(cartProductPropType).isRequired,
};

export default CartProducts;
