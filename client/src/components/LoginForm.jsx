import { useState } from 'react';

import FormButton from './FormButton';

export default function LoginForm() {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const handleForm = event => {
    event.preventDefault();
    // axios request with userInfo
    setUserInfo({
      email: '',
      password: '',
    });
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <form onSubmit={handleForm}>
      <label for="email">Email</label>
      <input
        value={userInfo.email}
        name="email"
        onChange={handleChange}
        type="email"
        placeholder="email"
      />
      <label for="password">Password</label>
      <input
        value={userInfo.password}
        name="password"
        onChange={handleChange}
        type="password"
        placeholder="password"
      />
      <FormButton>Log in</FormButton>
    </form>
  );
}
