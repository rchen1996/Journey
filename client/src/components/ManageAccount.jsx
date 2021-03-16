import { useState } from 'react';
import ErrorMessage from './ErrorMessage';
import FormButton from './FormButton';

export default function ManageAccount(props) {
  const { user, changePassword } = props;

  const [password, setPassword] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [error, setError] = useState({
    staus: false,
    message: '',
    show: 'flex p-3 mx-8 mt-8 bg-red-700 bg-opacity-50 rounded-xl',
    hide: 'hidden flex p-3 mx-8 mt-8 bg-red-700 bg-opacity-50 rounded-xl',
  });

  const [message, setMessage] = useState('');

  const handleChange = event => {
    const { value, name } = event.target;
    setPassword({ ...password, [name]: value });
  };

  const save = event => {
    event.preventDefault();

    const { oldPassword, newPassword, confirmPassword } = password;

    if (oldPassword === '' || newPassword === '' || confirmPassword === '') {
      setError({
        ...error,
        status: true,
        message: 'Password cannot be blank',
      });
      return;
    }

    if (newPassword !== confirmPassword) {
      setError({
        ...error,
        status: true,
        message: 'New passwords must match',
      });
      return;
    }

    changePassword(password).then(res => {
      if (res.data.error) {
        setError({
          ...error,
          status: true,
          message: res.data.error,
        });
      } else {
        setError({
          ...error,
          status: false,
          message: '',
        });

        setPassword({
          oldPassword: '',
          newPassword: '',
          confirmPassword: '',
        });

        setMessage('Password update success!');
      }
    });
  };

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
      <ErrorMessage
        isError={error.status}
        show={error.show}
        hide={error.hide}
        message={error.message}
      ></ErrorMessage>
      <div>{message}</div>
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
        <FormButton type='submit'>Change Password</FormButton>
      </form>
    </div>
  );
}
