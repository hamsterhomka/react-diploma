import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';
import { setCartDone } from '../../../actions/cartActions';

function OrderFormTemplate() {
  const { cartOrder } = useSelector((state) => state.form);
  const { products } = useSelector((state) => state.cart);
  const { phone, address, agreement } = cartOrder.values;
  const dispatch = useDispatch();


  const handleSubmit = (event) => {
    event.preventDefault();

    if (phone && address) {
      const data = {
        owner: {
          phone,
          address,
        },
        items: products.map((product) => ({
          id: product.id,
          price: product.price,
          count: product.quantity,
        })),
      };
      fetch(process.env.API_ORDER, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(() => dispatch(setCartDone()));
    }
  };

  return (
    <form className="card-body" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="phone">
          Телефон
          <Field className="form-control" id="phone" name="phone" component="input" placeholder="Ваш телефон" />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="address">
          Адрес доставки
          <Field className="form-control" id="address" name="address" component="input" placeholder="Адрес доставки" />
        </label>
      </div>
      <div className="form-group form-check">
        <label className="form-check-label" htmlFor="agreement">
          <Field type="checkbox" className="form-check-input" name="agreement" component="input" id="agreement" />
          Согласен с правилами доставки
        </label>
      </div>
      <button type="submit" disabled={!agreement} className="btn btn-outline-secondary">Оформить</button>
    </form>
  );
}

const OrderForm = reduxForm({
  form: 'cartOrder',
  initialValues: {
    phone: '',
    address: '',
    agreement: false,
  },
})(OrderFormTemplate);

export default OrderForm;
