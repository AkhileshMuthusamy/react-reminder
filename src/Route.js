import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import App from './components/App';
import { Login } from './components/Login';
import PrivateRoute from './auth/PrivateRoute';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/app" component={App} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

export { Routes };
