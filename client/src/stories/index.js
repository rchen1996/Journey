import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Nav from '../components/Nav';
import RegisterForm from '../components/RegisterForm';
import NavButton from '../components/NavButton';
import LoginForm from '../components/LoginForm';
import LeftNav from '../components/LeftNav';
import NewItineraryForm from '../components/NewItineraryForm';

import '../index.css';

storiesOf('Nav', module).add('Default', () => <Nav />);

storiesOf('RegisterForm', module).add('Empty', () => (
  <RegisterForm register={action('register')} />
));

storiesOf('Nav', module).add('Default', () => <Nav />);

storiesOf('NavButton', module)
  .add('Dashboard', () => <NavButton>Dashboard</NavButton>)
  .add('Log out', () => <NavButton>Log out</NavButton>)
  .add('Clickable', () => (
    <NavButton onClick={action('button-cicked')}>Clickable</NavButton>
  ));

storiesOf('LoginForm', module).add('Login', () => (
  <LoginForm onSave={action('login')} />
));

const user = {
  id: 5,
  first_name: 'Bob',
  last_name: 'Smith',
  email: 'test@test.com',
};
const itinerary = {
  id: 1,
  name: 'My Switzerland Trip',
  description: 'Pretty scenery',
  days: [
    { id: 2, day_order: 1, location: { id: 1, name: 'Zurich' } },
    { id: 4, day_order: 3, location: { id: 2, name: 'Lucerne' } },
    { id: 3, day_order: 2, location: { id: 1, name: 'Zurich' } },
    { id: 4, day_order: 4, location: { id: 2, name: 'Lucerne' } },
    { id: 4, day_order: 5, location: { id: 2, name: 'Lucerne' } },
    { id: 1, day_order: 6, location: { id: 1, name: 'Zurich' } },
  ],
};

const newitinerary = {
  id: 1,
  name: 'My Switzerland Trip',
  description: 'Pretty scenery',
  
};

storiesOf('LeftNav', module)
  .add('With Itinerary State', () => (
    <LeftNav
      itinerary={itinerary}
      user={user}
      addLocation={action('adding location')}
    />
  ))
  .add('Dashboard LeftNav', () => <LeftNav user={user} />)
  .add('With new Itinerary',() => (
    <LeftNav
    itinerary={newitinerary}
    user={user}
    addLocation= {action('adding location')}
    />
  ));


storiesOf('NewItineraryForm', module).add('New Itinerary', () => (
  <NewItineraryForm />
));
