import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { destroy } from 'redux-form';
import ReactRouterPropTypes from 'react-router-prop-types';
import NavBarMainNav from '../NavBarMainNav';
import HeaderControlsPics from '../../HeaderControlsPics';
import HeaderSearchForm from '../../HeaderSearchForm';
import { setCatalogNeedsScroll } from '../../../../actions/catalogActions';
import { goSearch } from '../../../../helpers';
import { toggleNavBar } from '../../../../actions/NavBarActions';

function NavBarMain({ history }) {
  const { headerSearch } = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (headerSearch) {
      const { search } = headerSearch.values;
      goSearch(search, history);
      if (document && document.activeElement) document.activeElement.blur();
      dispatch(destroy('headerSearch'));
      dispatch(setCatalogNeedsScroll(true));
    }

    dispatch(toggleNavBar());
  };

  return (
    <div className="collapase navbar-collapse" id="navbarMain">
      <NavBarMainNav />
      <HeaderControlsPics handleSubmit={handleSubmit} />
      <HeaderSearchForm handleSubmit={handleSubmit} />
    </div>
  );
}

NavBarMain.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default NavBarMain;
