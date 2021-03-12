import { useState } from 'react';

import FormButton from './FormButton';

export default function LoginForm(props) {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

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
      } else if (res.data.error) {
        setError('Incorrect email or password');
      }
    });
  };

  return (
    <div>
      <div>{error}</div>
      <form onSubmit={event => event.preventDefault()}>
        <label htmlFor="email">Email</label>
        <input
          value={userInfo.email}
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={userInfo.password}
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="password"
        />
        <FormButton onClick={save}>Log in</FormButton>
      </form>
    </div>
  );
}
