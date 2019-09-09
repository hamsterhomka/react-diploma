import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FOOTER_NAV_LINKS_POSITION } from '../../../constants';

function FooterInfo() {
  const navLinks = useSelector((state) => state.navLinks);
  const footerLinks = navLinks.items.filter((link) => link.positions.includes(FOOTER_NAV_LINKS_POSITION));

  return (
    <section>
      <h5>Информация</h5>
      <ul className="nav flex-column">
        {footerLinks.map((link) => (
          <li className="nav-item" key={link.href}>
            <NavLink className="nav-link" activeClassName="active" to={link.href} exact>{link.name}</NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FooterInfo;
