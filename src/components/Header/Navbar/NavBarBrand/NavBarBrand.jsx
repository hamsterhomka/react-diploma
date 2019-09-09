import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../img/header-logo.png';

function NavBarBrand() {
  return (
    <Link className="navbar-brand" to="/">
      <img src={logo} alt="Bosa Noga" />
    </Link>
  );
}

export default NavBarBrand;
