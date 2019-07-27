import React from 'react';
import { Button, Dropdown, Menu, Icon } from 'antd';

const ButtonGroup = Button.Group;

function CurrentPerson({ name, birthYear, deathYear, age, profilePic, backToList }) {
  // TODO these should be passed in, and if there are clicked the callback should have them passed
  const backPeople = ['Christian Wells', 'Dane Wells'];
  const forwardPeople = ['Rebecca Wells'];

  // TODO move this out into its own component
  const buildDropdown = (array, callback) => (
    <Menu onClick={callback}>
      {array.map((name, index) => (
        <Menu.Item key={index}>
          <Icon type="user" />
          {name}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div style={{ display: 'inline-flex', margin: '24px 24px 0', alignItems: 'center' }}>
      <div style={{ width: 200, textAlign: 'center' }}>
        {/* TODO pass in whether these should be disabled. or even shown? */}
        <ButtonGroup>
          <Dropdown
            placement="bottomLeft"
            overlay={buildDropdown(backPeople, e => {
              console.log(e);
            })}
          >
            <Button onClick={() => 'Back clicked'}>
              <Icon type="left" />
            </Button>
          </Dropdown>

          <Dropdown
            placement="bottomLeft"
            overlay={buildDropdown(forwardPeople, e => {
              console.log(e);
            })}
          >
            <Button onClick={() => 'Forward clicked'}>
              <Icon type="right" />
            </Button>
          </Dropdown>
        </ButtonGroup>
      </div>
      <div style={{ fontSize: 20, fontWeight: 600, marginRight: 30 }}>{name}</div>
      {birthYear && age && (
        <div>
          {birthYear}-{deathYear || ''} ({age})
        </div>
      )}
      {profilePic && <div />}
      <div style={{ flex: 'auto' }} />
      <div>
        <Button onClick={backToList}>
          <Icon type="table" />
          <span>Back To List</span>
        </Button>
      </div>
    </div>
  );
}

export default CurrentPerson;
