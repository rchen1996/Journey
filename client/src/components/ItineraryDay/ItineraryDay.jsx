import { useParams } from 'react-router-dom';

export default function ItineraryDay(props) {
  const { day_id } = useParams();

  const { itinerary } = props;

  const locations = itinerary.locations;

  return (
    <div>
      {/* <h1>
        Day {day}: {location}
      </h1>
      {day.activities.length === 1 && <h2>1 Activity Planned</h2>}
      {day.activities.length !== 1 && (
        <h2>{day.activities.length} Activities Planned</h2>
      )} */}
    </div>
  );
}
