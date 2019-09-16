import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { decrementQuantity, incrementQuantity } from '../../../actions/catalogItemActions';

function CatalogItemQuantity({ quantity }) {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementQuantity());
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity());
  };

  return (
    <p>
      Количество:
      <span className="btn-group btn-group-sm pl-2">
        <button type="button" className="btn btn-secondary" onClick={handleDecrement}>-</button>
        <span className="btn btn-outline-primary">{quantity}</span>
        <button type="button" className="btn btn-secondary" onClick={handleIncrement}>+</button>
      </span>
    </p>
  );
}

CatalogItemQuantity.propTypes = {
  quantity: PropTypes.number.isRequired,
};

export default CatalogItemQuantity;
