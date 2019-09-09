import React, { useEffect } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types/';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import {
  decrementQuantity, fetchCatalogItemRequest, incrementQuantity, selectSize,
} from '../../actions/catalogItemActions';
import Preloader from '../../components/UI/Preloader';
import useTitle from '../../hooks/useTitle';

function CatalogItem({ match: { params: { id } } }) {
  const {
    isLoading, title, images, sku, manufacturer,
    color, material, reason, season, sizes, quantity, selectedSize,
  } = useSelector((state) => state.catalogItem);

  useTitle(title);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCatalogItemRequest(id));
  }, [dispatch]);

  const handleIncrement = () => {
    dispatch(incrementQuantity());
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity());
  };

  const handleSelectSize = (event, size) => {
    event.preventDefault();
    dispatch(selectSize(size));
  };

  return (
    <section className="catalog-item">
      {isLoading
        ? <Preloader />
        : (
          <>
            <h2 className="text-center">{title}</h2>
            <div className="row">
              <div className="col-5">
                <img
                  src={images[0]}
                  className="img-fluid"
                  alt={title}
                />
              </div>
              <div className="col-7">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td>Артикул</td>
                      <td>{sku}</td>
                    </tr>
                    <tr>
                      <td>Производитель</td>
                      <td>{manufacturer}</td>
                    </tr>
                    <tr>
                      <td>Цвет</td>
                      <td>{color}</td>
                    </tr>
                    <tr>
                      <td>Материалы</td>
                      <td>{material}</td>
                    </tr>
                    <tr>
                      <td>Сезон</td>
                      <td>{season}</td>
                    </tr>
                    <tr>
                      <td>Повод</td>
                      <td>{reason}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="text-center">
                  <p>
                    Размеры в наличии:
                    {/* <span className="catalog-item-size selected">18 US</span> */}
                    {/* <span className="catalog-item-size">20 US</span> */}

                    {sizes
                      .filter((size) => size.avalible)
                      .map((size) => {
                        const sizeClass = classNames({
                          'catalog-item-size': true,
                          selected: selectedSize === size.size,
                        });
                        return (
                          <button
                            key={size.size}
                            className={sizeClass}
                            onMouseDown={(event) => handleSelectSize(event, size.size)}
                            type="button"
                          >
                            {size.size}
                          </button>
                        );
                      })}
                  </p>
                  <p>
                    Количество:
                    <span className="btn-group btn-group-sm pl-2">
                      <button type="button" className="btn btn-secondary" onClick={handleDecrement}>-</button>
                      <span className="btn btn-outline-primary">{quantity}</span>
                      <button type="button" className="btn btn-secondary" onClick={handleIncrement}>+</button>
                    </span>
                  </p>
                </div>
                <button type="button" className="btn btn-danger btn-block btn-lg">В корзину</button>
              </div>
            </div>
          </>
        )}
    </section>
  );
}

CatalogItem.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default CatalogItem;
