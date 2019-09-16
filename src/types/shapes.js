import PropTypes from 'prop-types';

export const productPropType = PropTypes.shape({
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
});

export const cartProductPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  selectedSize: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
});

export const sizePropType = PropTypes.shape({
  size: PropTypes.string.isRequired,
  avalible: PropTypes.bool.isRequired,
});
