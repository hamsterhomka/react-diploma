import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { selectSize } from '../../../actions/catalogItemActions';
import { sizePropType } from '../../../types/shapes';

function CatalogItemSizes({ sizes, selectedSize }) {
  const dispatch = useDispatch();
  const handleSelectSize = (event, size) => {
    event.preventDefault();
    dispatch(selectSize(size));
  };

  return (
    <p>
      Размеры в наличии:
      {sizes
        .filter((size) => size.avalible)
        .map((size) => {
          const sizeClass = classNames({
            'catalog-item-size': true,
            selected: selectedSize === size.size,
          });
          return (
            <button
              key={size.size}
              className={sizeClass}
              onMouseDown={(event) => handleSelectSize(event, size.size)}
              type="button"
            >
              {size.size}
            </button>
          );
        })}
    </p>
  );
}

CatalogItemSizes.propTypes = {
  sizes: PropTypes.arrayOf(sizePropType).isRequired,
  selectedSize: PropTypes.string,
};

CatalogItemSizes.defaultProps = {
  selectedSize: null,
};

export default CatalogItemSizes;
