import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Nav from '../components/Nav';
import RegisterForm from '../components/RegisterForm';
import NavButton from '../components/NavButton';
import LoginForm from '../components/LoginForm';
import LeftNav from '../components/LeftNav'

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
  id: 5, first_name: 'Bob', last_name: 'Smith', email: 'test@test.com'
}

storiesOf('LeftNav', module)
.add('With Itinerary State', () => (
  <LeftNav itinerary={1} user={user}/>
))
.add('Dashboard LeftNav')