import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Nav from '../components/Nav';

storiesOf('Nav', module).add('Default', () => <Nav />);