import React from 'react';
import { Layout } from 'antd';

import Logo from './Logo';
import Links from './Links';
import Status from './Status';

const { Header } = Layout;

function MenuHeader() {
  // TODO use Redux to get these
  const isLoaded = true;
  const isDirty = true;
  const familyName = 'Wells';

  return (
    <Header style={{ display: 'inline-flex' }}>
      <Logo />
      <Links isLoaded={isLoaded} />
      <Status isLoaded={isLoaded} isDirty={isDirty} familyName={familyName} />
    </Header>
  );
}

export default MenuHeader;
