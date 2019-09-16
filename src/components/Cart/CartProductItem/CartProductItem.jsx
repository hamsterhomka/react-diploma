import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { productLinkUrl } from '../../../helpers/urlCreators';
import { removeProductFromCart } from '../../../actions/cartActions';
import { cartProductPropType } from '../../../types/shapes';

function CartProductItem({ product, n }) {
  const dispatch = useDispatch();

  const handleRemoveProduct = (id) => {
    dispatch(removeProductFromCart(id));
  };

  return (
    <tr>
      <th scope="row">{n}</th>
      <td><Link to={productLinkUrl(product.id)}>{product.title}</Link></td>
      <td>{product.selectedSize}</td>
      <td>{product.quantity}</td>
      <td>{product.price}</td>
      <td>{product.price * product.quantity}</td>
      <td>
        <button
          type="button"
          className="btn btn-outline-danger btn-sm"
          onClick={() => handleRemoveProduct(product.id)}
        >
          Удалить
        </button>
      </td>
    </tr>
  );
}

CartProductItem.propTypes = {
  product: cartProductPropType.isRequired,
  n: PropTypes.number.isRequired,
};

export default CartProductItem;
