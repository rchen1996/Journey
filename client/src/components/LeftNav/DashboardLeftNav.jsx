import React from 'react';
import { NavLink } from 'react-router-dom';
export default function DashboardLeftNav(props) {
  const { user } = props;
  return (
    <nav className='w-16 h-full mt-16 bg-gray-600 sm:w-64'>
      <div className='sticky flex flex-col items-center w-full px-4 py-6 text-xl font-semibold text-gray-100 sm:block top-16'>
        <div className='mb-4'>
          <NavLink
            to='/itineraries/new'
            activeClassName='selected bg-gray-200 bg-opacity-25'
            className='flex items-center justify-between p-4 sm:px-4 sm:py-2 hover:bg-gray-200 hover:bg-opacity-25 rounded-xl'
          >
            <span className='hidden sm:flex'>New Itinerary</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='w-6 h-6 sm:ml-4'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z'
                clipRule='evenodd'
              />
            </svg>
          </NavLink>
        </div>
        <div className='mb-4'>
          <NavLink
            exact
            to={`/dashboard/${user.id}`}
            activeClassName='selected bg-gray-200 bg-opacity-25'
            className='flex items-center justify-between p-4 sm:px-4 sm:py-2 hover:bg-gray-200 hover:bg-opacity-25 rounded-xl'
          >
            <span className='hidden sm:flex'>My Itineraries</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='w-6 h-6 sm:ml-4'
            >
              <path d='M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z' />
            </svg>
          </NavLink>
        </div>
        <div className='mb-4'>
          <NavLink
            to={`/dashboard/${user.id}/bookmarks`}
            activeClassName='selected bg-gray-200 bg-opacity-25'
            className='flex items-center justify-between p-4 sm:px-4 sm:py-2 hover:bg-gray-200 hover:bg-opacity-25 rounded-xl'
          >
            <span className='hidden sm:flex'>Bookmarks</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='w-6 h-6 sm:ml-4'
            >
              <path d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' />
            </svg>
          </NavLink>
        </div>
        <div className='mb-4'>
          <NavLink
            to={`/dashboard/${user.id}/edit`}
            activeClassName='selected bg-gray-200 bg-opacity-25'
            className='flex items-center justify-between p-4 sm:px-4 sm:py-2 hover:bg-gray-200 hover:bg-opacity-25 rounded-xl'
          >
            <span className='hidden sm:flex'>Manage Account</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='w-6 h-6 sm:ml-4'
            >
              <path
                fillRule='evenodd'
                d='M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z'
                clipRule='evenodd'
              />
            </svg>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
