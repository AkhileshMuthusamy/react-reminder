import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import App from './components/App';
import { Login } from './components/Login';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/app" component={App} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

export { Routes };
