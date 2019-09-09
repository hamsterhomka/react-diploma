import React from 'react';
import FooterInfo from './FooterInfo';
import FooterPayment from './FooterPayment';
import FooterContacts from './FooterContacts';

function Footer() {
  return (
    <footer className="container bg-light footer">
      <div className="row">
        <div className="col">
          <FooterInfo />
        </div>
        <div className="col">
          <FooterPayment />
        </div>
        <div className="col text-right">
          <FooterContacts />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
