import React from 'react';
import { Link } from 'react-router-dom';
import { productPropType } from '../../../types/shapes';
import { productLinkUrl } from '../../../helpers/urlCreators';

function CatalogItemCard({
  product: {
    images, title, price, id,
  },
}) {
  return (
    <div className="card catalog-item-card">
      <div className="catalog-item-card-img-block">
        <img
          src={images[0]}
          className="card-img-top img-fluid"
          alt={title}
        />
      </div>
      <div className="card-body catalog-item-card__body">
        <p className="card-text">{title}</p>
        <p className="card-text">{price}</p>
        <Link to={productLinkUrl(id)} className="btn btn-outline-primary">Заказать</Link>
      </div>
    </div>
  );
}

CatalogItemCard.propTypes = {
  product: productPropType.isRequired,
};

export default CatalogItemCard;
