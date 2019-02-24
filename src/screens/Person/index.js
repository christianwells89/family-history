import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import ScreensPersonEdit from './Edit';
import ScreensPersonList from './List';

const ScreensRoot = ({ match }) => (
  <Router>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/create`} />
      <Route path={`${match.url}/list`} component={ScreensPersonList} />
      <Route path={`${match.url}/create`} component={ScreensPersonEdit} />
      <Route path={`${match.url}/:id`} component={ScreensPersonEdit} />
    </Switch>
  </Router>
);

export default ScreensRoot;
