import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Preloader from '../UI/Preloader/Preloader';
import CatalogProducts from '../CatalogProducts';
import { fetchTopSalesRequest } from '../../actions/topSalesActions';

function TopSales() {
  const { products, isLoading } = useSelector((state) => state.topSales);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopSalesRequest());
  }, [dispatch]);


  return (
    <>
      {isLoading && <Preloader />}
      {products ? (
        <section className="top-sales">
          <h2 className="text-center">Хиты продаж!</h2>
          <CatalogProducts products={products} />
        </section>
      ) : null}
    </>
  );
}

export default TopSales;
