import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { change } from 'redux-form';
import ReactRouterPropTypes from 'react-router-prop-types';
import Preloader from '../UI/Preloader/Preloader';
import CatalogSearchForm from './CatalogSearchForm';
import {
  fetchCategoriesRequest, fetchProductsRequest, setOffset, setSearch,
} from '../../actions/catalogActions';
import { CATALOG_SEARCH_FORM, OFFSET_LOAD_AMOUNT, PATH_PARAMS } from '../../constants';
import CatalogContent from './CatalogContent';
import { goSearch } from '../../helpers';
import useScroll from '../../hooks/useScroll';

function Catalog({ withSearchForm, history, location }) {
  const params = new URLSearchParams(location.search);
  const searchLocationParam = params.get(PATH_PARAMS.catalog.search);

  const {
    needScroll,
    categories: {
      isLoading: isCategoriesLoading,
      items: categoriesList,
    },
    products: {
      search,
      areProductsOver,
      offset,
      items: productsList,
      isLoading: isProductsLoading,
    },
  } = useSelector((state) => state.catalog);
  const { catalogSearch } = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const isLoading = isCategoriesLoading || isProductsLoading;
  const isInitialLoading = isLoading && !offset;
  const isSecondaryLoading = isProductsLoading && offset > 0;

  useEffect(() => {
    // if we already have loaded categories we dont need it anymore
    if (!categoriesList.filter((category) => category.id).length) {
      dispatch(fetchCategoriesRequest());
    }

    // if we already loaded products we dont need it anymore
    if (productsList.length - OFFSET_LOAD_AMOUNT < offset && !areProductsOver) {
      dispatch(fetchProductsRequest());
    }

    // set form search field equal to query search param
    dispatch(change(CATALOG_SEARCH_FORM.name, CATALOG_SEARCH_FORM.fieldsNames.search, searchLocationParam));

    // if search in state isn't equal to search query param set new search state and fetch products
    if (searchLocationParam !== search) {
      dispatch(setOffset(0));
      dispatch(setSearch(searchLocationParam));
    }
  }, [dispatch, searchLocationParam]);

  useScroll(needScroll, dispatch);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const searchParam = catalogSearch.values ? catalogSearch.values.search : null;
    goSearch(searchParam, history);
  };

  return (
    <section className="catalog">
      <h2 className="text-center" id="catalog-h">Каталог</h2>
      {withSearchForm && <CatalogSearchForm handleSubmit={handleSearchSubmit} />}
      {isInitialLoading
        ? <Preloader />
        : (
          <CatalogContent
            areProductsOver={areProductsOver}
            productsList={productsList}
            isSecondaryLoading={isSecondaryLoading}
            offset={offset}
          />
        )}
    </section>
  );
}

Catalog.propTypes = {
  withSearchForm: PropTypes.bool,
  history: ReactRouterPropTypes.history.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
};

Catalog.defaultProps = {
  withSearchForm: false,
};

export default Catalog;
