import React from 'react';
import { withRouter } from 'react-router';
import Catalog from '../../components/Catalog';
import useTitle from '../../hooks/useTitle';

const CatalogWithRouter = withRouter(Catalog);

function CatalogView() {
  useTitle('Каталог');

  return (
    <CatalogWithRouter withSearchForm />
  );
}

export default CatalogView;
