import React from 'react';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';
import { CATALOG_SEARCH_FORM } from '../../../constants';

const CatalogSearchFormTemplate = ({ handleSubmit }) => (
  <form className="catalog-search-form form-inline" onSubmit={handleSubmit}>
    <Field className="form-control" name="search" component="input" placeholder="Поиск" />
  </form>
);

CatalogSearchFormTemplate.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

const CatalogSearchForm = reduxForm({
  form: CATALOG_SEARCH_FORM.name,
})(CatalogSearchFormTemplate);

export default CatalogSearchForm;
