import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Nav from '../components/Nav';
import RegisterForm from '../components/RegisterForm'

storiesOf('Nav', module).add('Default', () => <Nav />);


storiesOf('RegisterForm',module).add('Empty',()=> (
<RegisterForm
register={action('register')}
/>
))