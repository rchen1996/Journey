export default function ItineraryDayActivities(props) {
  const { activity } = props;

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
      <p>location</p>
      {activity.start_time && activity.end_time && (
        <p>
          {tConvert(activity.start_time)} - {tConvert(activity.end_time)}
        </p>
      )}
    </div>
  );
}
