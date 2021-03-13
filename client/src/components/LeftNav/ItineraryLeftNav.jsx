import { SET_ITINERARY } from '../../reducers/application';
import React, { useState } from 'react';

export default function ItineraryLeftNav(props) {
  const [newLocation, setNewLocation] = useState('');

  const { itinerary, user } = props;
  const sortedDays =
    itinerary.days &&
    itinerary.days.sort((day1, day2) => {
      return day1.day_order - day2.day_order;
    });
  const locationArr = [];

  function handleSubmit(event) {
    event.preventDefault();
    props.addLocation(newLocation);
    setNewLocation('');
    return;
  }

  return (
    <div>
      <h1>{itinerary.name}</h1>
      {sortedDays &&
        sortedDays.map((day) => {
          let location = null;
          if (locationArr.slice(-1)[0] !== day.location.id) {
            location = day.location.name;
            locationArr.push(day.location.id);
          }
          return (
            <div key={day.id}>
              {location && <p>{location}</p>}
              <p>Day {day.day_order}</p>
            </div>
          );
        })}

      <button> +Add Location </button>
      <form onSubmit={handleSubmit}>
        <input
          value={newLocation}
          name='add-location'
          onChange={(event) => setNewLocation(event.target.value)}
          type='text'
        />
      </form>

      <div>
        <a href={`/itineraries/${itinerary.id}/collaborators`}>My Group </a>
      </div>
    </div>
  );
}
