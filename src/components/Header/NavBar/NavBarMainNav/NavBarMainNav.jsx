import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { HEADER_NAV_LINKS_POSITION } from '../../../../constants';

function NavBarMainNav() {
  const navLinks = useSelector((state) => state.navLinks);
  const headerLinks = navLinks.items.filter((link) => link.positions.includes(HEADER_NAV_LINKS_POSITION));

  return (
    <ul className="navbar-nav mr-auto">
      {headerLinks.map((link) => (
        <li className="nav-item" key={link.href}>
          <NavLink className="nav-link" activeClassName="active" to={link.href} exact>{link.name}</NavLink>
        </li>
      ))}
    </ul>
  );
}

export default NavBarMainNav;
