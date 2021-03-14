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

  let startTime;
  let endTime;
  let duration;

  if (activity.start_time && activity.end_time) {
    startTime = tConvert(activity.start_time);
    endTime = tConvert(activity.end_time);

    const endDateTime = new Date('1970-01-01T' + activity.end_time + 'Z');
    const startDateTime = new Date('1970-01-01T' + activity.start_time + 'Z');

    if (endDateTime < startDateTime) {
      endDateTime.setDate(endDateTime.getDate() + 1);
    }

    duration = (endDateTime - startDateTime) / 1000 / 60 / 60;
  }

  return (
    <div>
      <div>
        <p>{startTime}</p>
        {duration &&
          (duration < 1 ? <p>{duration * 60} MIN</p> : <p>{duration} HR</p>)}
        <p>{endTime}</p>
      </div>
    </div>
  );
}
