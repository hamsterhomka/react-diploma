import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { toggleNavBar } from '../../../actions/NavBarActions';
import { PATHS } from '../../../constants';

function HeaderControlsPics({ handleSubmit }) {
  const { isSearchFormHidden } = useSelector((state) => state.navBar);
  const { products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleSearchExpanderClick = (event) => {
    event.preventDefault();
    if (isSearchFormHidden) {
      dispatch(toggleNavBar());
    } else {
      handleSubmit(event);
    }
  };

  return (
    <div className="header-controls-pics">
      <button type="button" className="header-controls-pic header-controls-search" onMouseDown={handleSearchExpanderClick} />
      <Link to={PATHS.cart}>
        <div className="header-controls-pic header-controls-cart">
          {products.length
            ? <div className="header-controls-cart-full">{products.length}</div>
            : null}
          <div className="header-controls-cart-menu" />
        </div>
      </Link>
    </div>
  );
}

HeaderControlsPics.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default HeaderControlsPics;
