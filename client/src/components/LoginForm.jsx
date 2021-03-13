import { useState } from 'react';
import { SET_USER } from '../reducers/application';
import { Link, useHistory } from 'react-router-dom';

import FormButton from './FormButton';

export default function LoginForm(props) {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const history = useHistory();

  const handleChange = event => {
    const { value, name } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const save = () => {
    if (userInfo.email === '') {
      setError('Email cannot be blank');
      return;
    }

    if (userInfo.password === '') {
      setError('Password cannot be blank');
      return;
    }

    props.onSave(userInfo.email, userInfo.password).then(res => {
      if (res.data.email) {
        setError('');
        props.dispatch({
          type: SET_USER,
          user: res.data,
        });

        history.push(`/dashboard/${res.data.id}`);
      } else if (res.data.error) {
        setError('Incorrect email or password');
      }
    });
  };

  return (
    <section className="w-full shadow-lg bg-gray-50 rounded-xl">
      <div>{error}</div>
      <form
        onSubmit={event => event.preventDefault()}
        className="flex flex-col"
      >
        <div className="flex flex-col mx-8 my-6">
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <input
            value={userInfo.email}
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="Email"
            className="mb-4 border-gray-300 rounded-md appearance-none focus:ring-teal-600 focus:ring-1 focus:border-teal-600"
          />
          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <input
            value={userInfo.password}
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="Password"
            className="mb-2 border-gray-300 rounded-md focus:ring-teal-600 focus:ring-1 focus:border-teal-600"
          />
        </div>
      </form>
      <footer className="flex items-center justify-between px-8 py-3 bg-gray-300 bg-opacity-50 rounded-b-xl">
        <span className="text-xs font-semibold">
          Don't have an account? Sign up{' '}
          <Link to="/signup" className="text-teal-600 hover:underline">
            here!
          </Link>
        </span>
        <FormButton onClick={save}>Log in</FormButton>
      </footer>
    </section>
  );
}
