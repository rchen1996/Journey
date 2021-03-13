import React, { useEffect } from 'react';
import { SET_ITINERARY } from '../reducers/application';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Itinerary(props) {
  const { itinerary_id } = useParams();
  const { dispatch, itinerary } = props;

  useEffect(() => {
    axios.get(`/api/itineraries/${itinerary_id}`).then(res => {
      dispatch({
        type: SET_ITINERARY,
        itinerary: res.data,
      });
    });
  }, [itinerary_id, dispatch]);

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

  // sortedDays.map((day) => {
  //   let location = null;
  //   if (locationArr.slice(-1)[0] !== day.location.id) {
  //     location = day.location.name;
  //     locationArr.push(day.location.id);
  //   }
  //   return (
  //     <div key={day.id}>
  //       {location && <p>{location}</p>}
  //       <p>Day {day.day_order}</p>
  //     </div>
  //   );
  // })

  return <div></div>;
}
