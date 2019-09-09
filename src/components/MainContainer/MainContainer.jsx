import React from 'react';
import PropTypes from 'prop-types';

function MainContainer({ children }) {
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          {children}
        </div>
      </div>
    </main>
  );
}

MainContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

MainContainer.defaultProps = {
  children: null,
};

export default MainContainer;
