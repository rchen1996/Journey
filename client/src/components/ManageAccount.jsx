import { useState } from 'react';
import AlertMessage from './AlertMessage';
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
    show: 'flex p-3 mt-4 bg-red-700 bg-opacity-50 rounded-xl',
    hide: 'hidden flex p-3 mt-4 bg-red-700 bg-opacity-50 rounded-xl',
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

        setError({
          ...error,
          status: false,
          message: 'Password update success!',
        });
      }
    });
  };

  return (
    <section className='flex flex-col items-center w-full h-full mt-16'>
      <div className='flex flex-col w-3/4 py-8 2xl:w-1/2'>
        <div className='space-y-4'>
          <h1 className='ml-1 text-2xl font-bold'>Manage Your Account</h1>
          <div className='px-4 py-4 space-y-4 shadow-md bg-gray-50 rounded-2xl'>
            <div className='flex items-center space-x-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='w-6 h-6'
              >
                <path
                  fillRule='evenodd'
                  d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                  clipRule='evenodd'
                />
              </svg>
              <p>
                {user.first_name} {user.last_name}
              </p>
            </div>
            <div className='flex items-center space-x-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='w-6 h-6'
              >
                <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
              </svg>
              <p>{user.email}</p>
            </div>
          </div>

          <h4 className='ml-1 text-2xl font-bold'>Change Account Password</h4>
          <AlertMessage
            isError={!error.status}
            show={'flex p-3 mt-4 bg-teal-600 rounded-xl'}
            hide={'hidden'}
            message={error.message}
          ></AlertMessage>
          <AlertMessage
            isError={error.status}
            show={error.show}
            hide={error.hide}
            message={error.message}
          ></AlertMessage>
          <div className='w-full mt-4 shadow-lg bg-gray-50 rounded-xl'>
            <form onSubmit={save} className='flex flex-col'>
              <fieldset className='flex flex-col mx-8 mt-6 mb-2'>
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
              </fieldset>
              <footer className='flex items-center px-8 py-3 space-x-4 bg-gray-300 bg-opacity-50 rounded-b-xl'>
                <FormButton type='submit'>Change Password</FormButton>
              </footer>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
