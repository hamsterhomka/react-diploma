import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleNavBar } from '../../../actions/NavBarActions';

function HeaderControlsPics({ handleSubmit }) {
  const { isSearchFormHidden } = useSelector((state) => state.navBar);
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
      { /* Do programmatic navigation on click to /cart.html */}
      <div className="header-controls-pic header-controls-cart">
        <div className="header-controls-cart-full">1</div>
        <div className="header-controls-cart-menu" />
      </div>
    </div>
  );
}

HeaderControlsPics.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default HeaderControlsPics;
