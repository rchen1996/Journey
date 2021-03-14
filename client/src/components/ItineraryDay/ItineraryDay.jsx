import { useParams } from 'react-router-dom';
import ItineraryDayActivities from './ItineraryDayActivities';

export default function ItineraryDay(props) {
  const { day_id } = useParams();

  const { itinerary } = props;
  const locations = itinerary.locations;

  const getCurrentDay = locations => {
    let currentDay;
    let currentLocation;

    locations.forEach(location => {
      location.days.forEach(day => {
        if (day.day_order === Number(day_id)) {
          currentLocation = location;
          currentDay = day;
        }
      });
    });

    return { currentDay, currentLocation };
  };

  const dayInfo = getCurrentDay(locations);

  const day = dayInfo.currentDay;
  const location = dayInfo.currentLocation;

  return (
    <div>
      <h1>
        Day {day.day_order}: {location.name}
      </h1>
      {day.activities.length === 1 && <h2>1 Activity Planned</h2>}
      {day.activities.length !== 1 && (
        <h2>{day.activities.length} Activities Planned</h2>
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
