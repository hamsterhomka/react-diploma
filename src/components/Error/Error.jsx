import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

function Error({ tryAction }) {
  const dispatch = useDispatch();
  const tryLoad = () => {
    dispatch(tryAction);
  };

  return (
    <div className="alert alert-danger d-flex justify-content-center align-items-center" role="alert">
      <span>Ошибка загрузки</span>
      <button
        type="button"
        className="btn btn-outline-dark ml-2"
        onClick={tryLoad}
      >
        Попробовать еще раз
      </button>
    </div>
  );
}

Error.propTypes = {
  tryAction: PropTypes.shape({
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default Error;
