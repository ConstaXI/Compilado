import React from 'react';

import { Switch, BrowserRouter } from 'react-router-dom';

import Route from './Routes';

import Home from '../pages/Home';
import Registered from '../pages/Registered';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/registered" component={Registered} isPrivate />
    </Switch>
  </BrowserRouter>
);

export default Routes;
