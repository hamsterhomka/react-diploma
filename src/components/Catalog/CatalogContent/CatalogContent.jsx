import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import CatalogCategories from '../CatalogCategories';
import CatalogProducts from '../../CatalogProducts';
import CatalogNotFound from '../CatalogNotFound/CatalogNotFound';
import Preloader from '../../UI/Preloader';
import { productPropType } from '../../../types/shapes';
import { fetchCategoriesRequest, fetchProductsRequest, setOffset } from '../../../actions/catalogActions';
import { OFFSET_LOAD_AMOUNT } from '../../../constants';
import Error from '../../Error';

function CatalogContent({
  productsList, isSecondaryLoading, areProductsOver, offset, categoriesError, productsError,
}) {
  const dispatch = useDispatch();
  const handleLoadMore = () => {
    dispatch(setOffset(offset + OFFSET_LOAD_AMOUNT));
  };

  if (categoriesError) {
    return <Error tryAction={fetchCategoriesRequest()} />;
  }

  if (productsError) {
    return <Error tryAction={fetchProductsRequest()} />;
  }

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
  areProductsOver: PropTypes.bool.isRequired,
  offset: PropTypes.number.isRequired,
  categoriesError: PropTypes.string,
  productsError: PropTypes.string,
};

CatalogContent.defaultProps = {
  categoriesError: null,
  productsError: null,
};

export default CatalogContent;
