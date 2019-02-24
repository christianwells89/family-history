import React from 'react';
import PersonDeatils from '../../components/Person/Details';

const ScreenPersonEdit = ({ match: { params } }) => (
  <div>
    <h1>Edit Person</h1>
    <PersonDeatils name={'Christian Wells'} gender={'male'} onChange={() => null} />
  </div>
);

export default ScreenPersonEdit;
