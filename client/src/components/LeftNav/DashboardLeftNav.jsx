import React from 'react';
import { NavLink } from 'react-router-dom';
export default function DashboardLeftNav(props) {
  const { user } = props;
  return (
    <nav className='w-64 h-full bg-gray-600'>
      <ul className='w-full h-full px-4 py-6 text-xl font-semibold text-gray-100'>
        <li className='mb-4'>
          <NavLink
            to='/itineraries/new'
            activeClassName='selected bg-gray-200 bg-opacity-25'
            className='flex items-center justify-between px-4 py-2 hover:bg-gray-200 hover:bg-opacity-25 rounded-xl'
          >
            New Itinerary
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='w-6 h-6 ml-4'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z'
                clipRule='evenodd'
              />
            </svg>
          </NavLink>
        </li>
        <li className='mb-4'>
          <NavLink
            to={`/dashboard/${user.id}`}
            activeClassName='selected bg-gray-200 bg-opacity-25'
            className='flex items-center justify-between px-4 py-2 hover:bg-gray-200 hover:bg-opacity-25 rounded-xl'
          >
            My Itineraries
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='w-6 h-6 ml-4'
            >
              <path d='M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z' />
            </svg>
          </NavLink>
        </li>
        <li className='mb-4'>
          <NavLink
            to={`/dashboard/${user.id}/bookmarks`}
            className='flex items-center justify-between px-4 py-2 hover:bg-gray-200 hover:bg-opacity-25 rounded-xl'
          >
            Bookmarks
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='w-6 h-6 ml-4'
            >
              <path d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' />
            </svg>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
