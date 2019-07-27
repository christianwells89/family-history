import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';

const { Sider } = Layout;

function PersonSidebar({ id }) {
  return (
    <Sider width={200}>
      {/* TODO make this more tied to the actual route - https://stackoverflow.com/questions/41054657/react-routerantd-how-to-highlight-a-menu-item-when-press-back-forward-button */}
      <Menu mode="inline" defaultSelectedKeys={['/']} style={{ height: '100%' }}>
        <Menu.Item key="/">
          <Icon type="solution" />
          <span>Details</span>
          <Link to={`/people/${id}/`} />
        </Menu.Item>
        <Menu.Item key="/events">
          <Icon type="calendar" />
          <span>Events</span>
          <Link to={`/people/${id}/events`} />
        </Menu.Item>
        <Menu.Item key="/facts">
          <Icon type="bars" />
          <span>Facts</span>
          <Link to={`/people/${id}/facts`} />
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default PersonSidebar;
