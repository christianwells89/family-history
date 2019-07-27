export const testData = [
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
  {
    id: 'gngw',
    name: 'Geoffrey Norman George Wells',
    gender: 'male',
    dob: '1930-07-05',
    dod: '2017-12-11',
    facts: [{ type: 'birth', date: '1930-07-05' }, { type: 'death', date: '2017-12-11' }],
  },
];

export const testEntities = testData.reduce((entities, person) => {
  return {
    ...entities,
    [person.id]: person,
  };
}, {});
