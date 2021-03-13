import React from 'react';
import { NavLink } from 'react-router-dom';
export default function DashboardLeftNav(props) {
  const { user } = props;
  return (
    <nav className='w-64 h-full bg-gray-600'>
      <ul className='w-full h-full text-gray-100'>
        <li>
          <NavLink to='/itineraries/new' activeClassName='selected'>
            New Itinerary
          </NavLink>
        </li>
        <li>
          <NavLink to={`/dashboard/${user.id}`}>My Itineraries</NavLink>
        </li>
        <li>
          <NavLink to={`/dashboard/${user.id}/bookmarks`}>Bookmarks</NavLink>
        </li>
      </ul>
    </nav>
  );
}
