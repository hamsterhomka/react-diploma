import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { reducer as formReducer } from 'redux-form';
import navLinksReducer from '../reducers/navLinksReducer';
import catalogReducer from '../reducers/catalogReducer';
import topSalesReducer from '../reducers/topSalesReducer';
import {
  fetchCategoriesEpic, fetchProductsEpic, setCategoryEpic, setOffsetEpic,
} from '../epics/catalogEpic';
import { fetchTopSalesEpic } from '../epics/topSalesEpic';
import navBarReducer from '../reducers/navBarReducer';
import catalogItemReducer from '../reducers/catalogItemReducer';
import { fetchCatalogItemEpic } from '../epics/catalogItemEpic';

const rootReducer = combineReducers({
  form: formReducer,
  navLinks: navLinksReducer,
  catalog: catalogReducer,
  catalogItem: catalogItemReducer,
  topSales: topSalesReducer,
  navBar: navBarReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epic = combineEpics(
  fetchCategoriesEpic,
  fetchProductsEpic,
  setCategoryEpic,
  fetchTopSalesEpic,
  // setSearchEpic,
  setOffsetEpic,
  fetchCatalogItemEpic,
);
const epicMiddleware = createEpicMiddleware();
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(epicMiddleware),
));

epicMiddleware.run(epic);
export default store;
