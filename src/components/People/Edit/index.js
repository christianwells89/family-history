import React, { useState, useMemo } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Layout } from 'antd';
import moment from 'moment';

import CurrentPerson from './Current';
import PersonDetails from './Details';
import PersonEvents from './Events';
import PersonFacts from './Facts';
import PersonSidebar from './Sidebar';

// TODO this would be a piece of state that would be retrieved from the store based on the search results
import { testEntities as peopleEntities } from '../../../testData';

const { Content } = Layout;

function PersonEdit({ id, match, history }) {
  const [person] = useState(peopleEntities[id]);

  const birthMoment = useMemo(() => person.dob && moment(person.dob), [person.dob]);
  const deathMoment = useMemo(() => person.dod && moment(person.dod), [person.dod]);
  const age = useMemo(() => (deathMoment || moment()).diff(birthMoment, 'years'));

  return (
    <div className="flex-column auto-flex">
      <CurrentPerson
        name={person.name}
        birthYear={birthMoment && birthMoment.year()}
        deathYear={deathMoment && deathMoment.year()}
        age={age}
        backToList={() => history.push('/people')}
      />
      <Layout className="layout-content">
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

// TODO use react-router-redux to manage router state once redux is set up
export default withRouter(PersonEdit);
