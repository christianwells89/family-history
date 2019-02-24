import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ScreensPersonEdit from './Edit';
import ScreensPeopleList from './List';

const PeopleScreensRoot = ({ match }) => (
  <Router>
    <Switch>
      <Route path={`${match.url}`} exact component={ScreensPeopleList} />
      <Route path={`${match.url}/create`} component={ScreensPersonEdit} />
      <Route path={`${match.url}/:id`} component={ScreensPersonEdit} />
    </Switch>
  </Router>
);

export default PeopleScreensRoot;
