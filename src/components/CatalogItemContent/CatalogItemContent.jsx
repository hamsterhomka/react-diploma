import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { addProductToCart } from '../../actions/cartActions';
import { PATHS } from '../../constants';
import CatalogItemProps from './CatalogItemProps';
import CatalogItemSizes from './CatalogItemSizes/CatalogItemSizes';
import CatalogItemQuantity from './CatalogItemQuantity/CatalogItemQuantity';
import Error from '../Error';
import { fetchCatalogItemRequest } from '../../actions/catalogItemActions';

function CatalogItemContent({ match: { params: { id } }, history }) {
  const productItem = useSelector((state) => state.catalogItem);

  const {
    title, images, sku, manufacturer, error,
    color, material, reason, season, sizes, quantity, selectedSize,
  } = productItem;

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    const addProduct = { ...product };
    delete addProduct.isLoading;
    delete addProduct.error;
    dispatch(addProductToCart(addProduct));
    history.push(PATHS.cart);
  };

  if (error) {
    return <Error tryAction={fetchCatalogItemRequest(id)} />;
  }

  return (
    <>
      <h2 className="text-center">{title}</h2>
      <div className="row">
        <div className="col-5">
          <img
            src={images[0]}
            className="img-fluid"
            alt={title}
          />
        </div>
        <div className="col-7">
          <CatalogItemProps reason={reason} color={color} manufacturer={manufacturer} material={material} season={season} sku={sku} />
          <div className="text-center">
            <CatalogItemSizes selectedSize={selectedSize} sizes={sizes} />
            <CatalogItemQuantity quantity={quantity} />
          </div>
          <button
            type="button"
            className="btn btn-danger btn-block btn-lg"
            disabled={!selectedSize}
            onClick={() => handleAddToCart(productItem)}
          >
            В корзину
          </button>
        </div>
      </div>
    </>
  );
}

CatalogItemContent.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
};

export default withRouter(CatalogItemContent);
