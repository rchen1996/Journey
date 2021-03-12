import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Nav from '../components/Nav';
import NavButton from '../components/NavButton';

storiesOf('Nav', module).add('Default', () => <Nav />);

storiesOf('NavButton', module)
  .add('Dashboard', () => <NavButton>Dashboard</NavButton>)
  .add('Log out', () => <NavButton>Log out</NavButton>)
  .add('Clickable', () => (
    <NavButton onClick={action('button-cicked')}>Clickable</NavButton>
  ));
