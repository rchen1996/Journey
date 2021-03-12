import { useState } from 'react';

import FormButton from './FormButton';

export default function LoginForm(props) {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const handleChange = event => {
    const { value, name } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const save = (email, password) => {
    props.onSave(email, password);
  };

  return (
    <form onSubmit={event => event.preventDefault()}>
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
      <FormButton onClick={save}>Log in</FormButton>
    </form>
  );
}
