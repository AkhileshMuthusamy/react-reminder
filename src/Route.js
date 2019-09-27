import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './components/App';
import { Login } from './components/Login';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  );
};

export { Routes };
