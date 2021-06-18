import React from 'react';

import { Switch, BrowserRouter } from 'react-router-dom';

import Route from './Routes';

import Home from '../pages/Home';
import Login from '../pages/Login';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/home" component={Home} isPrivate />
    </Switch>
  </BrowserRouter>
);

export default Routes;
