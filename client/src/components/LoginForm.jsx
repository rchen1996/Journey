import { useState } from 'react';

export default function LoginForm() {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const handleForm = event => {
    event.preventDefault();
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <form onSubmit={handleForm}>
      <input
        value={userInfo.email}
        name="email"
        onChange={handleChange}
        type="email"
        placeholder="email"
      />
      <input
        value={userInfo.password}
        name="password"
        onChange={handleChange}
        type="password"
        placeholder="password"
      />
    </form>
  );
}
