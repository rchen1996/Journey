import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function ItineraryLeftNav(props) {
  const [newLocation, setNewLocation] = useState('');

  const { itinerary } = props;

  function handleSubmit(event) {
    event.preventDefault();
    props.addLocation(newLocation);
    setNewLocation('');
    return;
  }

  return (
    <nav className='flex flex-col w-64 h-full px-4 py-6 space-y-4 text-gray-100 bg-gray-600'>
      <h1 className='text-xl font-bold'>{itinerary.name}</h1>
      {itinerary &&
        itinerary.locations &&
        itinerary.locations.map((locationObj, index) => {
          return (
            <div key={index} className='flex flex-col'>
              <h4>{locationObj.name}</h4>
              {locationObj.days.map((day) => {
                return (
                  <Link
                    to={`/itineraries/${itinerary.id}/days/${day.id}`}
                    key={day.id}
                  >
                    Day {day.day_order}
                  </Link>
                );
              })}
            </div>
          );
        })}

      <button> Add Location </button>
      <form onSubmit={handleSubmit}>
        <input
          value={newLocation}
          name='add-location'
          onChange={(event) => setNewLocation(event.target.value)}
          type='text'
        />
      </form>

      <div>
        <NavLink to={`/itineraries/${itinerary.id}/collaborators`}>
          My Group{' '}
        </NavLink>
      </div>
    </nav>
  );
}
