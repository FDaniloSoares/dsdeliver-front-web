import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './home';
import Navbar from './navbar';
import Order from './orders';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/orders">
        <Order />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
