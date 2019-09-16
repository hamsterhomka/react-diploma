import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactRouterPropTypes from 'react-router-prop-types';
import Preloader from '../../components/UI/Preloader';
import useTitle from '../../hooks/useTitle';
import CatalogItemContent from '../../components/CatalogItemContent';
import { fetchCatalogItemRequest, resetCatalogItem } from '../../actions/catalogItemActions';

function CatalogItem({ match: { params: { id } } }) {
  const productItem = useSelector((state) => state.catalogItem);
  const {
    isLoading, title,
  } = productItem;

  const dispatch = useDispatch();
  useTitle(title);

  useEffect(() => {
    dispatch(fetchCatalogItemRequest(id));

    return () => {
      dispatch(resetCatalogItem());
    };
  }, [dispatch]);

  return (
    <section className="catalog-item">
      {isLoading
        ? <Preloader />
        : <CatalogItemContent />}
    </section>
  );
}

CatalogItem.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default CatalogItem;
