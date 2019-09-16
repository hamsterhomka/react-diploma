import React from 'react';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';

const CatalogSearchFormTemplate = ({ handleSubmit }) => (
  <form className="catalog-search-form form-inline" onSubmit={handleSubmit}>
    <Field className="form-control" name="search" component="input" placeholder="Поиск" />
  </form>
);

CatalogSearchFormTemplate.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

const CatalogSearchForm = reduxForm({
  form: 'catalogSearch',
  initialValues: {
    search: '',
  },
})(CatalogSearchFormTemplate);

export default CatalogSearchForm;
