import React, { useState } from 'react';

import Search from './Search';
import Table from './Table';

// TODO this would be a piece of state that would be retrieved from the store based on the search results
const peopleRaw = [
  {
    id: 'cgw',
    name: 'Christian Wells',
    gender: 'male',
    dob: '1989-02-08',
    facts: [{ type: 'birth', date: '1989-02-08' }],
  },
  {
    id: 'daw',
    name: 'Dane Wells',
    gender: 'male',
    dob: '1991-01-10',
    facts: [{ type: 'birth', date: '1991-01-10' }],
  },
  {
    id: 'rmw',
    name: 'Rebecca Wells',
    gender: 'female',
    dob: '1991-01-10',
    facts: [{ type: 'birth', date: '1991-01-10' }],
  },
  {
    id: 'nrw',
    name: 'Nicola Wells',
    gender: 'female',
    dob: '1992-07-08',
    facts: [{ type: 'birth', date: '1992-07-08' }],
  },
];

function PersonList() {
  const [people, setPeople] = useState(peopleRaw);

  function handleSearch(value) {
    setPeople(peopleRaw.map(p => p.name.includes(value)));
  }

  // could save terms to the store, so that the search can be returned to. may be easier to just keep the component mounted?

  return (
    <div>
      <Search search={handleSearch} />
      <Table people={people} />
    </div>
  );
}

export default PersonList;
