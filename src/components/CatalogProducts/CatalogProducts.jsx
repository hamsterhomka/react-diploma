import React from 'react';
import PropTypes from 'prop-types';
import CatalogItemCard from '../Catalog/CatalogItemCard';
import { productPropType } from '../../types/shapes';

function CatalogProducts({ products }) {
  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-4" key={product.id}>
          <CatalogItemCard product={product} />
        </div>
      ))}
    </div>
  );
}

CatalogProducts.propTypes = {
  products: PropTypes.arrayOf(productPropType).isRequired,
};

export default CatalogProducts;
