import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import PersonDetails from './Details';
import PersonEvents from './Events';
import PersonFacts from './Facts';
import PersonSidebar from './Sidebar';

const { Content } = Layout;

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

function PersonEdit({ id, match }) {
  const [person] = useState(peopleEntities[id]);

  // return <PersonDetails name={person.name} gender={person.gender} onChange={() => null} />;
  return (
    <div className="layout-content flex-column auto-flex">
      <Layout>
        <PersonSidebar id={id} />
        <Content style={{ backgroundColor: '#fff', padding: 10 }}>
          <Switch>
            {/* TODO these should just be container components as well, grabbing the relevant part of the person from state themselves */}
            <Route path={`${match.url}`} exact render={() => <PersonDetails person={person} />} />
            <Route path={`${match.url}/events`} render={() => <PersonEvents person={person} />} />
            <Route path={`${match.url}/facts`} render={() => <PersonFacts person={person} />} />
          </Switch>
        </Content>
      </Layout>
    </div>
  );
}

export default PersonEdit;
