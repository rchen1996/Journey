import React from 'react';
import { NavLink } from 'react-router-dom';
export default function DashboardLeftNav(props) {
  const { user } = props;
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/itineraries/new" activeClassName="selected">
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
    </div>
  );
}
