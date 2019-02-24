import React from 'react';
import PersonList from '../../components/Person/List';

const ScreenPersonList = ({ match: { params } }) => (
  <div>
    <h1>Person List</h1>
    <PersonList />
  </div>
);

export default ScreenPersonList;
