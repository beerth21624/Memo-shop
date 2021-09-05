import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ShopCenter from './pages/ShopCenter';
import Product from './pages/Product';
import Cart from './pages/Cart';
function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
