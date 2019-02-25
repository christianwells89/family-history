import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import Header from '../components/UI/Header';
import ScreensPerson from './People';
import ScreensChart from './Chart';

const { Content, Footer } = Layout;

const ScreensRoot = () => (
  <Router>
    <Layout className="full-height" style={{ minHeight: 700 }}>
      <Header />

      <Content id="rootContent" className="flex-column">
        <Switch>
          <Route path="/people" component={ScreensPerson} />
          <Route path="/chart" component={ScreensChart} />
        </Switch>
      </Content>

      <Footer style={{ textAlign: 'center', color: 'red' }}>Work In Progress</Footer>
    </Layout>
  </Router>
);

export default ScreensRoot;
