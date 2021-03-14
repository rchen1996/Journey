import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

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
    <div>
      <h1>{itinerary.name}</h1>
      {itinerary &&
        itinerary.locations &&
        itinerary.locations.map((locationObj, index) => {
          return (
            <div key={index}>
              <div>{locationObj.name}</div>
              {locationObj.days.map((day) => {
                return <div key={day.id}>Day {day.day_order}</div>;
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
    </div>
  );
}
