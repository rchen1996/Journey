import React, { useEffect, useState } from 'react';
import ErrorMessage from './ErrorMessage';

export default function MyGroup(props) {
  const { user, removeCollaborator, addCollaborator } = props;
  const { users, creator_id, id } = props.itinerary;
  const [addInput, setAddInput] = useState('');
  const [error, setError] = useState({
    staus: false,
    message: '',
    show: 'flex p-3 bg-red-700 bg-opacity-50 rounded-xl',
    hide: 'hidden flex p-3 bg-red-700 bg-opacity-50 rounded-xl',
  });

  const [dropDown, setDropDown] = useState({
    formClass: 'items-center self-end hidden',
    textClass: 'flex items-center mr-2 space-x-2 cursor-pointer',
  });

  const handleRemove = (userId) => {
    removeCollaborator(id, userId);
  };

  const handleAdd = () => {
    const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!validEmailRegex.test(addInput)) {
      setError({
        ...error,
        status: true,
        message: 'Please enter an email.',
      });
      return;
    }
    addCollaborator(id, addInput).then((result) => {
      if (result.error) {
        setError({
          ...error,
          status: true,
          message: 'No user with this email.',
        });
      } else if (result.success) {
        setError({
          ...error,
          status: false,
          message: '',
        });
        handleDropDown();
      }
    });
  };

  const handleDropDown = () => {
    setDropDown((prev) => {
      const isClassHidden =
        prev?.formClass === 'items-center self-end hidden' ||
        prev?.formClass === undefined;
      setError({
        ...error,
        status: false,
        message: '',
      });
      return {
        formClass: isClassHidden
          ? 'items-center self-end flex'
          : 'items-center self-end hidden',
        textClass: isClassHidden
          ? 'hidden items-center mr-2 space-x-2 cursor-pointer'
          : 'flex items-center mr-2 space-x-2 cursor-pointer',
      };
    });
  };

  return (
    <section className='w-1/2 h-full mx-auto my-8'>
      <div className='flex flex-col items-center w-full h-full space-y-4'>
        {user.id === creator_id && (
          <header className='flex flex-col w-full space-y-2'>
            <div className='flex items-center justify-between'>
              <h1 className='text-2xl font-bold'>My Group</h1>
              <ErrorMessage
                isError={error.status}
                show={error.show}
                hide={error.hide}
                message={error.message}
              ></ErrorMessage>
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex space-x-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='w-6 h-6'
                >
                  <path d='M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z' />
                </svg>
                <span className='text-xl'>{users.length} People</span>
              </div>
              <div className='flex'>
                <div onClick={handleDropDown} className={dropDown.textClass}>
                  <span className='text-xl'>Add User</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <form
                  onSubmit={(event) => event.preventDefault()}
                  className={dropDown.formClass}
                >
                  <input
                    value={addInput}
                    onChange={(event) => setAddInput(event.target.value)}
                    placeholder='Enter Email'
                    type='email'
                    className='pr-8 border-gray-300 rounded-md appearance-none focus:ring-teal-600 focus:ring-1 focus:border-teal-600'
                  ></input>
                  <button
                    onClick={handleDropDown}
                    className='p-2 opacity-75 -ml-9 hover:opacity-100 focus:outline-none'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      className='w-4 h-4'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </button>
                  <button
                    onClick={handleAdd}
                    className='px-4 py-3 ml-6 font-semibold leading-none text-gray-200 bg-teal-600 border-2 border-transparent focus:ring-1 focus:ring-teal-600 hover:bg-transparent hover:border-teal-600 hover:text-teal-600 rounded-xl'
                  >
                    Add
                  </button>
                </form>
              </div>
            </div>
          </header>
        )}
        <div className='flex flex-col w-full space-y-4'>
          {users.map((member) => {
            return (
              <div
                key={member.id}
                className='flex items-center justify-between p-4 bg-gray-100 shadow-md rounded-xl'
              >
                <div className='flex flex-col space-y-1'>
                  <div className='flex items-center space-x-2'>
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
                    <span className='text-lg font-bold'>{`${member.first_name} ${member.last_name}`}</span>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      className='w-6 h-6'
                    >
                      <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                      <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                    </svg>
                    <span> {`${member.email}`}</span>
                  </div>
                </div>
                <div className='mr-2'>
                  {member.id === creator_id ? (
                    <span className='font-bold'>Host</span>
                  ) : (
                    user.id === creator_id && (
                      <button
                        onClick={() => handleRemove(member.id)}
                        className='mr-2'
                      >
                        <svg
                          width='20'
                          height='20'
                          viewBox='0 0 16 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='duration-200 transform fill-current hover:text-red-600 hover:scale-125'
                        >
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M7.1999 1.59998C7.05137 1.60005 6.9058 1.64148 6.77948 1.71962C6.65317 1.79775 6.5511 1.90951 6.4847 2.04238L5.9055 3.19998H3.1999C2.98773 3.19998 2.78425 3.28426 2.63422 3.43429C2.48419 3.58432 2.3999 3.7878 2.3999 3.99998C2.3999 4.21215 2.48419 4.41563 2.63422 4.56566C2.78425 4.71569 2.98773 4.79998 3.1999 4.79998V12.8C3.1999 13.2243 3.36847 13.6313 3.66853 13.9313C3.96859 14.2314 4.37556 14.4 4.7999 14.4H11.1999C11.6242 14.4 12.0312 14.2314 12.3313 13.9313C12.6313 13.6313 12.7999 13.2243 12.7999 12.8V4.79998C13.0121 4.79998 13.2156 4.71569 13.3656 4.56566C13.5156 4.41563 13.5999 4.21215 13.5999 3.99998C13.5999 3.7878 13.5156 3.58432 13.3656 3.43429C13.2156 3.28426 13.0121 3.19998 12.7999 3.19998H10.0943L9.5151 2.04238C9.44871 1.90951 9.34664 1.79775 9.22032 1.71962C9.09401 1.64148 8.94843 1.60005 8.7999 1.59998H7.1999ZM5.5999 6.39998C5.5999 6.1878 5.68419 5.98432 5.83422 5.83429C5.98425 5.68426 6.18773 5.59998 6.3999 5.59998C6.61208 5.59998 6.81556 5.68426 6.96559 5.83429C7.11562 5.98432 7.1999 6.1878 7.1999 6.39998V11.2C7.1999 11.4121 7.11562 11.6156 6.96559 11.7657C6.81556 11.9157 6.61208 12 6.3999 12C6.18773 12 5.98425 11.9157 5.83422 11.7657C5.68419 11.6156 5.5999 11.4121 5.5999 11.2V6.39998ZM9.5999 5.59998C9.38773 5.59998 9.18425 5.68426 9.03422 5.83429C8.88419 5.98432 8.7999 6.1878 8.7999 6.39998V11.2C8.7999 11.4121 8.88419 11.6156 9.03422 11.7657C9.18425 11.9157 9.38773 12 9.5999 12C9.81208 12 10.0156 11.9157 10.1656 11.7657C10.3156 11.6156 10.3999 11.4121 10.3999 11.2V6.39998C10.3999 6.1878 10.3156 5.98432 10.1656 5.83429C10.0156 5.68426 9.81208 5.59998 9.5999 5.59998Z'
                          />
                        </svg>
                      </button>
                    )
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
