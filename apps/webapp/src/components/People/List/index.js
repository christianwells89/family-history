import React, { useState } from 'react';

import Search from './Search';
import Table from './Table';

// TODO this would be a piece of state that would be retrieved from the store based on the search results
import { testData as peopleRaw } from '../../../testData';

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
