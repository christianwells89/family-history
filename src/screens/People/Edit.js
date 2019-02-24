import React from 'react';
import PersonEdit from '../../components/People/Edit';

const ScreenPersonEdit = ({ match: { params } }) => {
  return (
    <div>
      <PersonEdit id={params.id} />
    </div>
  );
};

export default ScreenPersonEdit;
