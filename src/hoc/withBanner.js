import React from 'react';
import Banner from '../components/Banner';

export default function withBanner(Component) {
  const WithBanner = (props) => (
    <>
      <Banner />
      <Component {...props} />
    </>
  );

  WithBanner.displayName = `prettyTime(${Component.displayName || Component.name}`;
  return WithBanner;
}
