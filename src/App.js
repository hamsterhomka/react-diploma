import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContainer from './components/MainContainer';
import Main from './views/Main';
import About from './views/About';
import Contacts from './views/Contacts';
import Page404 from './views/Page404';
import CatalogView from './views/CatalogView';
import { PATHS } from './constants';
import CatalogItem from './views/CatalogItem';
import Banner from './components/Banner';
import CartView from './views/CartView';
import useCart from './hooks/useCart';

function App() {
  useCart();

  const renderSwitch = () => {
    const routes = [
      {
        path: '/',
        exact: true,
        component: Main,
      },
      {
        path: PATHS.about,
        component: About,
      },
      {
        path: PATHS.contacts,
        component: Contacts,
      },
      {
        path: `${PATHS.catalog}/:id([0-9]+)`,
        component: CatalogItem,
      },
      {
        path: `${PATHS.catalog}`,
        component: CatalogView,
      },
      {
        path: `${PATHS.cart}`,
        component: CartView,
      },
      {
        path: '*',
        component: Page404,
      },
    ];

    return (
      <Switch>
        {routes.map((route) => (<Route key={route.path} path={route.path} exact={route.exact} component={route.component} />))}
      </Switch>
    );
  };

  return (
    <div className="app">
      <Header />
      <MainContainer>
        <Banner />
        {renderSwitch()}
      </MainContainer>
      <Footer />
    </div>
  );
}

export default App;
