import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { fakeAuth } from './fake-auth';

export default function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        console.log('pr', props.location);
        if (fakeAuth.isAuthenticated === true) {
          return <Component {...props} />;
        } else {
          return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
        }
      }}
    />
  );
}
