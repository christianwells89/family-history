import React from 'react';
import PersonEdit from '../../components/People/Edit';

const ScreenPersonEdit = ({ match }) => {
  return (
    <div>
      <PersonEdit id={match.params.id} match={match} />
    </div>
  );
};

export default ScreenPersonEdit;
