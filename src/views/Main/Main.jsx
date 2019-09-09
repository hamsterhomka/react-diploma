import React from 'react';
import { withRouter } from 'react-router';
import TopSales from '../../components/TopSales';
import Catalog from '../../components/Catalog';
import useTitle from '../../hooks/useTitle';

const CatalogWithRouter = withRouter(Catalog);

function MainView() {
  useTitle('Главная');

  return (
    <>
      <TopSales />
      <CatalogWithRouter />
    </>
  );
}

export default MainView;
