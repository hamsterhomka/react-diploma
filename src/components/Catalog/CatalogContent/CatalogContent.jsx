import React from 'react';
import PropTypes from 'prop-types';
import CatalogCategories from '../CatalogCategories';
import CatalogProducts from '../../CatalogProducts';
import CatalogNotFound from '../CatalogNotFound/CatalogNotFound';
import Preloader from '../../UI/Preloader';
import { productPropType } from '../../../types/shapes';

function CatalogContent({
  productsList, isSecondaryLoading, handleLoadMore, areProductsOver,
}) {
  return (
    <>
      <CatalogCategories />
      {productsList.length
        ? <CatalogProducts products={productsList} />
        : <CatalogNotFound />}
      {isSecondaryLoading && <Preloader />}
      {!areProductsOver && (
        <div className="text-center mt-4">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={handleLoadMore}
            disabled={isSecondaryLoading}
          >
            Загрузить ещё
          </button>
        </div>
      )}
    </>
  );
}

CatalogContent.propTypes = {
  productsList: PropTypes.arrayOf(productPropType).isRequired,
  isSecondaryLoading: PropTypes.bool.isRequired,
  handleLoadMore: PropTypes.func.isRequired,
  areProductsOver: PropTypes.bool.isRequired,
};

export default CatalogContent;
