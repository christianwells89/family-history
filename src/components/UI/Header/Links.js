import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

function Links(props) {
  if (!props.isLoaded) return null;

  return (
    // TODO make this more tied to the actual route, may have to just do my own implementation entirely
    // also the '/people' link doesn't work if you in a person ('/people/:id') which maybe something extra I have to do
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
