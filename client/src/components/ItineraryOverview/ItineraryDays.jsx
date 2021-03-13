import ItineraryDayActivities from './ItineraryDayActivities';

export default function ItineraryDays(props) {
  const { day } = props;

  return (
    <div>
      <h2>Day {day.day_order}</h2>
      {day.activities &&
        day.activities.map(activity => {
          return <ItineraryDayActivities key={activity.id} />;
        })}
    </div>
  );
}
