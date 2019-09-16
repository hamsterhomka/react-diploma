import React from 'react';
import PropTypes from 'prop-types';

function CatalogItemProps({
  sku, manufacturer, color, material, season, reason,
}) {
  return (
    <table className="table table-bordered">
      <tbody>
        <tr>
          <td>Артикул</td>
          <td>{sku}</td>
        </tr>
        <tr>
          <td>Производитель</td>
          <td>{manufacturer}</td>
        </tr>
        <tr>
          <td>Цвет</td>
          <td>{color}</td>
        </tr>
        <tr>
          <td>Материалы</td>
          <td>{material}</td>
        </tr>
        <tr>
          <td>Сезон</td>
          <td>{season}</td>
        </tr>
        <tr>
          <td>Повод</td>
          <td>{reason}</td>
        </tr>
      </tbody>
    </table>
  );
}

CatalogItemProps.propTypes = {
  sku: PropTypes.string.isRequired,
  manufacturer: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  material: PropTypes.string.isRequired,
  season: PropTypes.string.isRequired,
  reason: PropTypes.string.isRequired,
};

export default CatalogItemProps;
