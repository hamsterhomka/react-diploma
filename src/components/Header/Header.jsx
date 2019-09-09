import React from 'react';
import NavBar from './NavBar';

function Header() {
  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <NavBar />
        </div>
      </div>
    </header>
  );
}

export default Header;
