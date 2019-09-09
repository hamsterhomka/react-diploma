import React from 'react';
import { useSelector } from 'react-redux';
import CatalogCategory from './CatalogCategory';

function CatalogCategories() {
  const { categories: { items: categoriesList, selectedCategoryId } } = useSelector((state) => state.catalog);

  if (!categoriesList) {
    return null;
  }

  return (
    <ul className="catalog-categories nav justify-content-center">
      {categoriesList.map((category) => (
        <CatalogCategory key={category.id || category.title} selectedCategoryId={selectedCategoryId} category={category} />
      ))}
    </ul>
  );
}

export default CatalogCategories;
