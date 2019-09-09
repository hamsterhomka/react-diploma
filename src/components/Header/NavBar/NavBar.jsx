import React from 'react';
import { withRouter } from 'react-router-dom';
import NavBarBrand from './NavBarBrand';
import NavBarMain from './NavBarMain';

const NavBarMainWithRouter = withRouter(NavBarMain);

function NavBar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <NavBarBrand />
      <NavBarMainWithRouter />
    </nav>
  );
}

export default NavBar;
