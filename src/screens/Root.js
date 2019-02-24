import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';

import ScreensPerson from './Person';
import ScreensChart from './Chart';

const { Header, Content, Footer } = Layout;

const ScreensRoot = () => (
  <Router>
    <Layout className="full-height" style={{ minHeight: 700 }}>
      <Header>
        <div
          style={{
            float: 'left',
            margin: '0 28px 16px 0',
            height: '31px',
            width: '31px',
            fontSize: '40px',
          }}
        >
          <Icon type="gold" theme="twoTone" />
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">
            <Icon type="user" />
            <span>People</span>
            <Link to="/person" />
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="bar-chart" />
            <span>Charts</span>
            <Link to="/chart" />
          </Menu.Item>
        </Menu>
      </Header>

      <Content className="layout-content">
        <Route path="/person" component={ScreensPerson} />
        <Route path="/chart" component={ScreensChart} />
      </Content>

      <Footer style={{ textAlign: 'center' }}>Work In Progress</Footer>
    </Layout>
  </Router>
);

export default ScreensRoot;
