import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { reducer as formReducer } from 'redux-form';
import navLinksReducer from '../reducers/navLinksReducer';
import catalogReducer from '../reducers/catalogReducer';
import topSalesReducer from '../reducers/topSalesReducer';
import {
  fetchCategoriesEpic, fetchProductsEpic, setCategoryEpic, setOffsetEpic, setSearchEpic,
} from '../epics/catalogEpic';
import { fetchTopSalesEpic } from '../epics/topSalesEpic';
import navBarReducer from '../reducers/navBarReducer';
import catalogItemReducer from '../reducers/catalogItemReducer';
import { fetchCatalogItemEpic } from '../epics/catalogItemEpic';
import cartReducer from '../reducers/CartReducer';
import { addProductToCartEpic } from '../epics/cartEpic';

const rootReducer = combineReducers({
  form: formReducer,
  navLinks: navLinksReducer,
  catalog: catalogReducer,
  catalogItem: catalogItemReducer,
  topSales: topSalesReducer,
  navBar: navBarReducer,
  cart: cartReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epic = combineEpics(
  fetchCategoriesEpic,
  fetchProductsEpic,
  setCategoryEpic,
  fetchTopSalesEpic,
  setSearchEpic,
  setOffsetEpic,
  fetchCatalogItemEpic,
  addProductToCartEpic,
);
const epicMiddleware = createEpicMiddleware();
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(epicMiddleware),
));

epicMiddleware.run(epic);
export default store;
