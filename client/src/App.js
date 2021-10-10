import React from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ShopCenter from './pages/ShopCenter';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Admin from './pages/Admin';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './Redux/ConfigureStore';

function App() {
  return (
    <ConnectedRouter history={history}>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/shop/:id">
        <ShopCenter />
      </Route>
      <Route exact path="/product/:id">
        <Product />
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
      <Route exact path="/admin/:id">
        <Admin />
      </Route>
      <Route exact path="/admin/update/:id">
        <Admin />
      </Route>
    </ConnectedRouter>
  );
}

export default App;
