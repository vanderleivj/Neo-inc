import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/login';
import Dashboard from '../pages/dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path='/' exact component={Login} />
    <Route path='/dashboard' component={Dashboard} />
  </Switch>
)

export default Routes
