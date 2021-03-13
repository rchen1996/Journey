import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ItineraryDayActivities(props) {
  const [location, setLocation] = useState('');

  const { activity } = props;

  useEffect(() => {
    axios
      .get(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${activity.location.x}&lon=${activity.location.y}`
      )
      .then(json => {
        setLocation(json.data.display_name);
      });
  }, [activity.location]);

  const tConvert = time => {
    // Check correct time format and split into components
    time = time
      .toString()
      .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    let timeArr = [];

    if (time.length > 1) {
      // If time format correct
      time = time.slice(1); // Remove full string match value
      time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours

      for (let i = 0; i < time.length; i++) {
        if (i !== 3) {
          timeArr.push(time[i]);
        }
      }
    }

    return timeArr.join(''); // return adjusted time or original string
  };

  return (
    <div>
      <h4>{activity.name}</h4>
      <p>{location}</p>
      {activity.start_time && activity.end_time && (
        <p>
          {tConvert(activity.start_time)} - {tConvert(activity.end_time)}
        </p>
      )}
    </div>
  );
}
