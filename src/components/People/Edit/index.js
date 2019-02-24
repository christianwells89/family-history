import React, { useState } from 'react';

import PersonDetails from './Details';

// TODO this would be a piece of state that would be retrieved from the store based on the search results
const peopleEntities = {
  cgw: {
    id: 'cgw',
    name: 'Christian Wells',
    gender: 'male',
    dob: '1989-02-08',
    facts: [{ type: 'birth', date: '1989-02-08' }],
  },
  daw: {
    id: 'daw',
    name: 'Dane Wells',
    gender: 'male',
    dob: '1991-01-10',
    facts: [{ type: 'birth', date: '1991-01-10' }],
  },
  rmw: {
    id: 'rmw',
    name: 'Rebecca Wells',
    gender: 'female',
    dob: '1991-01-10',
    facts: [{ type: 'birth', date: '1991-01-10' }],
  },
  nrw: {
    id: 'nrw',
    name: 'Nicola Wells',
    gender: 'female',
    dob: '1992-07-08',
    facts: [{ type: 'birth', date: '1992-07-08' }],
  },
};

function PersonEdit(props) {
  const [person] = useState(peopleEntities[props.id]);

  return <PersonDetails name={person.name} gender={person.gender} onChange={() => null} />;
}

export default PersonEdit;
