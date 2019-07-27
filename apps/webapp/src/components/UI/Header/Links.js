import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

function Links({ isLoaded }) {
  if (!isLoaded) return null;

  return (
    // TODO make this more tied to the actual route - https://stackoverflow.com/questions/41054657/react-routerantd-how-to-highlight-a-menu-item-when-press-back-forward-button
    // also the '/people' link doesn't work if you're in a person, probably because that item is already selected. may need an onClick to force a new history back to the list
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['1']}
      style={{ lineHeight: '64px', flex: 'auto' }}
    >
      <Menu.Item key="1">
        <Icon type="user" />
        <span>People</span>
        <Link to="/people" />
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="bar-chart" />
        <span>Charts</span>
        <Link to="/chart" />
      </Menu.Item>
    </Menu>
  );
}

export default Links;
