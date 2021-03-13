export default function ItineraryDayActivities(props) {
  const { activity } = props;

  console.log(activity);

  return (
    <div>
      <h4>{activity.name}</h4>
      <p>location</p>
      {activity.start_time && activity.end_time && (
        <p>
          {activity.start_time} - {activity.end_time}
        </p>
      )}
    </div>
  );
}
