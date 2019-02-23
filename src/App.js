import React, { useState } from 'react';
import PersonDeatils from './components/Person/Details';

function App() {
  const [person, setPerson] = useState({ name: 'Christian Wells', gender: 'male' });

  function handleChange(name, gender) {
    setPerson({ name, gender });
  }

  return (
    <div>
      <PersonDeatils name={person.name} gender={person.gender} onChange={handleChange} />
    </div>
  );
}

export default App;
