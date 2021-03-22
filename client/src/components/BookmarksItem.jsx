import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { SET_BOOKMARKS } from '../reducers/application';

import AlertMessage from './AlertMessage';

export default function BookmarksItem(props) {
  const {
    name,
    description,
    image,
    id,
    trip_type,
    bookmark_id,
    days,
  } = props.bookmark;

  const [error, setError] = useState({
    staus: false,
    message: '',
    show: 'flex p-3 mx-8 mt-8 bg-red-700 bg-opacity-50 rounded-xl',
    hide: 'hidden flex p-3 mx-8 mt-8 bg-red-700 bg-opacity-50 rounded-xl',
  });

  const history = useHistory();

  const DEFAULT = 'DEFAULT';
  const DELETE = 'DELETE';

  const [view, setView] = useState(DEFAULT);

  const handleDelete = () => {
    props.deleteBookmark(bookmark_id).then(res => {
      if (res.data.error) {
        setError({
          ...error,
          status: true,
          message: res.data.error,
        });
      } else {
        props.dispatch({
          type: SET_BOOKMARKS,
          bookmarks: res.data,
        });
        history.push(`/dashboard/${props.user.id}/bookmarks`);
      }
    });
  };

  return (
    <div className='w-full h-auto p-4 transition duration-500 transform bg-gray-100 shadow-lg rounded-xl hover:scale-105'>
      <article className='flex flex-col justify-between'>
        <div>
          <figure className='mb-0.25 rounded-md aspect-w-2 aspect-h-1 group'>
            {view === DEFAULT && (
              <div className='z-10 flex items-center justify-center space-x-8 rounded-md hover:bg-gray-700 hover:bg-opacity-90 group'>
                {props.user.id && (
                  <button type='button' onClick={() => setView(DELETE)}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      className='hidden w-8 h-8 text-gray-100 duration-300 transform group-hover:inline-block transiton hover:scale-110 hover:text-red-600'
                    >
                      <path
                        fillRule='evenodd'
                        d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </button>
                )}
              </div>
            )}
            {view === DELETE && (
              <div className='z-10 flex space-x-8 bg-gray-700 rounded-md bg-opacity-90'>
                <article className='flex flex-col items-center justify-center w-full h-full'>
                  <AlertMessage
                    isError={error.status}
                    show={error.show}
                    hide={error.hide}
                    message={error.message}
                  ></AlertMessage>
                  <h4 className='p-2 text-base font-bold text-gray-100 shadow-md whitespace-nowrap lg:text-base'>
                    Delete This Bookmark?
                  </h4>
                  <div className='flex space-x-4'>
                    <button
                      type='button'
                      onClick={() => setView(DEFAULT)}
                      className='px-2 py-2 font-semibold leading-none text-gray-200 transition duration-300 transform bg-teal-600 border-2 border-transparent focus:ring-1 focus:ring-teal-600 hover:scale-110 rounded-xl'
                    >
                      Cancel
                    </button>
                    <button
                      type='button'
                      onClick={handleDelete}
                      className='px-2 py-2 font-semibold leading-none text-gray-200 transition duration-300 transform bg-red-600 border-2 border-transparent focus:ring-1 focus:ring-red-600 hover:scale-110 rounded-xl'
                    >
                      Delete
                    </button>
                  </div>
                </article>
              </div>
            )}
            <img
              src={image}
              alt='itinerary cover'
              className='object-cover rounded-md shadow-lg'
            />
          </figure>
          <div className='flex pt-2 pb-1.5 space-x-2 text-gray-200'>
            <div className='flex items-center justify-center px-2 py-1.5 bg-teal-600 shadow-md w-min whitespace-nowrap rounded-2xl'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='w-3.5 h-3.5 mr-1.5 mb-0.5'
              >
                <path
                  fillRule='evenodd'
                  d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                  clipRule='evenodd'
                />
              </svg>
              <span className='text-xs font-bold'>
                {days === '1' ? '1 Day' : `${days} Days`}
              </span>
            </div>
            <div className='flex items-center justify-center px-2 py-1.5 bg-teal-600 shadow-md w-min whitespace-nowrap rounded-2xl'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='w-3.5 h-3.5 mr-1.5'
              >
                <path
                  fillRule='evenodd'
                  d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
                  clipRule='evenodd'
                />
              </svg>
              <span className='text-xs font-bold'>
                {`${trip_type.charAt(0).toUpperCase()}${trip_type.slice(1)}`}
              </span>
            </div>
          </div>
          <div className='pb-2'>
            <Link to={`/itineraries/${id}`}>
              <h4 className='text-xl font-bold hover:underline'>{name}</h4>
            </Link>
            <p className='text-sm text-gray-500 line-clamp-3'>{description}</p>
          </div>
        </div>
      </article>
    </div>
  );
}
