import React from 'react';
import { object } from 'prop-types';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import { HomeView } from './Home';

const RouterProvider = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={HomeView} />
      </Switch>
    </ConnectedRouter>
  );
};

RouterProvider.propTypes = {
  history: object.isRequired,
};

export default RouterProvider;
