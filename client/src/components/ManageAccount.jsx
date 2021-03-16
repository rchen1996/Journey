import { useState } from 'react';

export default function ManageAccount(props) {
  const { user } = props;

  const [password, setPassword] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = event => {
    const { value, name } = event.target;
    setPassword({ ...password, [name]: value });
  };

  const save = event => {};

  return (
    <div className='pt-16'>
      <h1>Manage Your Account</h1>
      <h4>First Name:</h4>
      <p>{user.first_name}</p>

      <h4>Last Name:</h4>
      <p>{user.last_name}</p>

      <h4>Email:</h4>
      <p>{user.email}</p>

      <h4>Change Account Password</h4>
      <form onSubmit={save}>
        <label htmlFor='oldPassword' className='font-semibold'>
          Current Password
        </label>
        <input
          value={password.oldPassword}
          name='oldPassword'
          onChange={handleChange}
          type='password'
          placeholder='Current Password'
          className='mb-4 border-gray-300 rounded-md appearance-none focus:ring-teal-600 focus:ring-1 focus:border-teal-600'
        />
        <label htmlFor='newPassword' className='font-semibold'>
          New Password
        </label>
        <input
          value={password.newPassword}
          name='newPassword'
          onChange={handleChange}
          type='password'
          placeholder='New Password'
          className='mb-4 border-gray-300 rounded-md appearance-none focus:ring-teal-600 focus:ring-1 focus:border-teal-600'
        />
        <label htmlFor='confirmPassword' className='font-semibold'>
          Confirm New Password
        </label>
        <input
          value={password.confirmPassword}
          name='confirmPassword'
          onChange={handleChange}
          type='password'
          placeholder='Confirm New Password'
          className='mb-4 border-gray-300 rounded-md appearance-none focus:ring-teal-600 focus:ring-1 focus:border-teal-600'
        />
        <button>Change Password</button>
      </form>
    </div>
  );
}
