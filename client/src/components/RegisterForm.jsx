import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
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

  const history = useHistory();

  const save = function () {
    if (!firstName || !lastName || !email || !password) {
      setError('Fields cannot be blank');
      return;
    }

    if (password === passwordConfirm) {
      props.register(firstName, lastName, email, password).then(res => {
        props.dispatch({
          type: SET_USER,
          user: res.data,
        });

        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setPasswordConfirm('');
        setError('');

        history.push(`/dashboard/${res.data.id}`);

        return;
      });
    }
    setError('Passwords need to match');
  };
  return (
    <section className="w-full shadow-lg bg-gray-50 rounded-xl">
      <div className="form__validation">{error}</div>
      <form
        autoComplete="off"
        onSubmit={event => event.preventDefault()}
        className="flex flex-col"
      >
        <div className="flex flex-col mx-8 my-6">
          <label htmlFor="first-name" className="ml-1 font-semibold">
            First Name
          </label>
          <input
            className="mb-4 border-gray-300 rounded-md appearance-none first-name focus:ring-teal-600 focus:ring-1 focus:border-teal-600"
            name="first-name"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={event => setFirstName(event.target.value)}
          />
          <label htmlFor="last-name" className="ml-1 font-semibold">
            Last Name
          </label>
          <input
            className="mb-4 border-gray-300 rounded-md appearance-none last-name focus:ring-teal-600 focus:ring-1 focus:border-teal-600"
            name="last-name"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={event => setLastName(event.target.value)}
          />
          <label htmlFor="email" className="ml-1 font-semibold">
            Email
          </label>
          <input
            className="mb-4 border-gray-300 rounded-md appearance-none email focus:ring-teal-600 focus:ring-1 focus:border-teal-600"
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <label htmlFor="password" className="ml-1 font-semibold">
            Password
          </label>
          <input
            className="mb-4 border-gray-300 rounded-md appearance-none password focus:ring-teal-600 focus:ring-1 focus:border-teal-600"
            name="password"
            type="password"
            value={password}
            placeholder="Password"
            onChange={event => setPassword(event.target.value)}
          />
          <label htmlFor="password-confirmation" className="ml-1 font-semibold">
            Confirm Password
          </label>
          <input
            className="border-gray-300 rounded-md appearance-none password-confirmation focus:ring-teal-600 focus:ring-1 focus:border-teal-600"
            name="password-confirmation"
            type="password"
            placeholder="Confirm Password"
            value={passwordConfirm}
            onChange={event => setPasswordConfirm(event.target.value)}
          />
        </div>
      </form>
      <footer className="flex items-center justify-between px-8 py-3 bg-gray-300 bg-opacity-50 rounded-b-xl">
        <span className="text-xs font-semibold">
          Already have an account? Sign in{' '}
          <Link to="/login" className="text-teal-600 hover:underline">
            here!
          </Link>
        </span>
        <FormButton onClick={save}>Sign up</FormButton>
      </footer>
    </section>
  );
}
