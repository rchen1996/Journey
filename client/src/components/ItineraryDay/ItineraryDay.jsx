import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import SET_ITINERARY from '../../reducers/application';

import ItineraryDayActivities from './ItineraryDayActivities';

export default function ItineraryDay(props) {
  const { itinerary_id, day_id } = useParams();

  const { itinerary, dispatch } = props;

  let locations;
  if (itinerary) {
    locations = itinerary.locations;
  }

  useEffect(() => {
    axios.get(`/api/itineraries/${itinerary_id}`).then(res => {
      dispatch({
        type: SET_ITINERARY,
        itinerary: res.data,
      });
    });
  }, [itinerary_id, dispatch]);

  const getCurrentDay = locations => {
    let currentDay;
    let currentLocation;

    if (locations) {
      locations.forEach(location => {
        location.days.forEach(day => {
          if (day.day_order === Number(day_id)) {
            currentLocation = location;
            currentDay = day;
          }
        });
      });
    }

    return { currentDay, currentLocation };
  };

  const dayInfo = getCurrentDay(locations);

  const day = dayInfo.currentDay;
  const location = dayInfo.currentLocation;

  return (
    <div>
      <h1>
        Day {day && day.day_order}: {location && location.name}
      </h1>
      {day && day.activities && day.activities.length === 1 && (
        <h2>1 Activity Planned</h2>
      )}
      {day && day.activities && day.activities.length !== 1 && (
        <h2>
          {day && day.activities && day.activities.length} Activities Planned
        </h2>
      )}
      <button>Add Activity</button>
      {day &&
        day.activities &&
        day.activities.map(activity => {
          return (
            <ItineraryDayActivities key={activity.id} activity={activity} />
          );
        })}
    </div>
  );
}
