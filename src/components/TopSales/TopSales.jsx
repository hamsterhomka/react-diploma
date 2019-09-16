import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Preloader from '../UI/Preloader/Preloader';
import CatalogProducts from '../CatalogProducts';
import { fetchTopSalesRequest } from '../../actions/topSalesActions';
import Error from '../Error';

function TopSales() {
  const { products, isLoading, error } = useSelector((state) => state.topSales);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopSalesRequest());
  }, [dispatch]);

  if (!isLoading && !products.length && !error) {
    return null;
  }

  const renderTopSalesContent = () => (
    isLoading
      ? <Preloader />
      : <CatalogProducts products={products} />
  );

  return (
    <section className="top-sales">
      <h2 className="text-center">Хиты продаж!</h2>
      {error
        ? <Error tryAction={fetchTopSalesRequest()} />
        : renderTopSalesContent()}

    </section>
  );
}

export default TopSales;
