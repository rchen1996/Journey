import React from 'react';
export default function DashboardLeftNav(props) {
 const {user} = props
  return (
    <div>     
        <ul>
            <li>
              <a href='/itineraries/new'>New Itinerary</a>
            </li>
            <li>
            <a href={`/dashboard/${user.id}`}>My Itineraries</a>
            </li>
            <li>
            <a href={`/dashboard/${user.id}/bookmarks`}>Bookmarks</a>              
            </li>
          </ul>           
    </div>
  )
}