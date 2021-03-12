import { useState } from 'react';

import FormButton from './FormButton';

export default function LoginForm(props) {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const handleForm = event => {
    event.preventDefault();
    setUserInfo({
      email: '',
      password: '',
    });
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const save = (email, password) => {
    props.login(email, password);
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
      <FormButton onClick={() => save(userInfo.email, userInfo.password)}>
        Log in
      </FormButton>
    </form>
  );
}
