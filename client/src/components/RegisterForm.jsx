import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormButton from './FormButton';
import { SET_USER } from '../reducers/application';

export default function RegisterForm(props) {
  const [firstName, setFirstName] = useState(props.first_name || '');
  const [lastName, setLastName] = useState(props.last_name || '');
  const [email, setEmail] = useState(props.email || '');
  const [password, setPassword] = useState(props.password || '');
  const [passwordConfirm, setPasswordConfirm] = useState(
    props.password_confirmation || ''
  );

  const [error, setError] = useState('');

  const save = function () {
    if (!firstName || !lastName || !email || !password) {
      setError('Fields cannot be blank');
      return;
    }

    if (password === passwordConfirm) {
      props.register(firstName, lastName, email, password)
      .then(res => {
        props.dispatch({
          type: SET_USER,
          user: res.data,
      });
    })
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setPasswordConfirm('');
      setError('');
      return;
    }
    setError('Passwords need to match');
  };
  return (
    <section>
      <section className='form__validation'>{error}</section>
      <form autoComplete='off' onSubmit={(event) => event.preventDefault()}>
        <label htmlFor='first-name'>First Name:</label>
        <input
          className='first-name'
          name='first-name'
          type='text'
          placeholder='Alice'
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <label htmlFor='last-name'>Last Name:</label>
        <input
          className='last-name'
          name='last-name'
          type='text'
          placeholder='Wonderland'
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        <label htmlFor='email'>Email:</label>
        <input
          className='email'
          name='email'
          type='text'
          placeholder='Enter Email:'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor='password'>Password:</label>
        <input
          className='password'
          name='password'
          type='password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <label htmlFor='password-confirmation'>Password confirmation:</label>
        <input
          className='password-confirmation'
          name='password-confirmation'
          type='password'
          value={passwordConfirm}
          onChange={(event) => setPasswordConfirm(event.target.value)}
        />
      </form>
      <footer>
        <span>
          Already have an account? <Link to='/login'>Sign in here!</Link>
        </span>
        <FormButton onClick={save}>Submit</ FormButton>
      </footer>
    </section>
  );
}
