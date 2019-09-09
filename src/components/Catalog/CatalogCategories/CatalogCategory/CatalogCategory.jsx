import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { setCategory, setOffset } from '../../../../actions/catalogActions';


function CatalogCategory({ category, selectedCategoryId }) {
  const buttonClass = classNames({
    'catalog-categories__link': true,
    'nav-link': true,
    active: category.id === selectedCategoryId || (!category.id && !selectedCategoryId),
  });

  const dispatch = useDispatch();
  const handleCategoryClick = (id) => {
    dispatch(setOffset(0));
    dispatch(setCategory(id));
  };

  return (
    <li className="nav-item" key={category.id}>
      <button type="button" className={buttonClass} onClick={() => handleCategoryClick(category.id)}>{category.title}</button>
    </li>
  );
}

CatalogCategory.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
  }).isRequired,
  selectedCategoryId: PropTypes.number,
};

CatalogCategory.defaultProps = {
  selectedCategoryId: null,
};

export default CatalogCategory;
