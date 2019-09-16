import React from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';

const HeaderSearchFormTemplate = ({ handleSubmit }) => {
  const { isSearchFormHidden } = useSelector((state) => state.navBar);

  const searchFormClass = classNames({
    'header-controls-search-form': true,
    'form-inline': true,
    invisible: isSearchFormHidden,
  });

  return (
    <form data-id="search-form" className={searchFormClass} onSubmit={handleSubmit}>
      <Field className="form-control" name="search" component="input" placeholder="Поиск" />
    </form>
  );
};

HeaderSearchFormTemplate.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

const HeaderSearchForm = reduxForm({
  form: 'headerSearch',
  initialValues: {
    search: '',
  },
})(HeaderSearchFormTemplate);

export default HeaderSearchForm;
