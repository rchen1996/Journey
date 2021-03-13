import React, { useState } from 'react';

export default function ItineraryLeftNav(props) {
  

  const [newLocation, setNewLocation] = useState('');

  const { itinerary } = props;
  const sortedDays =
    itinerary.days &&
    itinerary.days.sort((day1, day2) => {
      let d1Location = day1.location.id;
      let d2Location = day2.location.id;
      let d1order = day1.day_order;
      let d2order = day2.day_order;

      if (d1Location === d2Location) {
        return d1order < d2order ? -1 : 1;
      } else {
        return d1Location - d2Location;
      }
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
        sortedDays.map(day => {
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
          name="add-location"
          onChange={event => setNewLocation(event.target.value)}
          type="text"
        />
      </form>

      <div>
        <a href={`/itineraries/${itinerary.id}/collaborators`}>My Group </a>
      </div>
    </div>
  );
}
