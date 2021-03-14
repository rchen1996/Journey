import { useParams } from 'react-router-dom';

import ItineraryDayActivities from './ItineraryDayActivities';

export default function ItineraryDay(props) {
  const { day_id } = useParams();

  const { itinerary } = props;

  let locations;
  if (itinerary) {
    locations = itinerary.locations;
  }

  const getCurrentDay = (locations) => {
    let currentDay;
    let currentLocation;

    if (locations) {
      locations.forEach((location) => {
        location.days.forEach((day) => {
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
    <section className='flex flex-col justify-center w-7/12 h-full mx-auto my-8 space-y-4'>
      <header className='flex items-center justify-between'>
        <div className='px-8 py-2 bg-gray-100 border-l-8 border-gray-700 shadow-md rounded-r-xl'>
          <h1 className='text-3xl font-bold'>
            Day {day && day.day_order}: {location && location.name}
          </h1>
          {day && day.activities && day.activities.length === 1 && (
            <h2>1 Activity Planned</h2>
          )}
          {day && day.activities && day.activities.length !== 1 && (
            <h2>
              {day && day.activities && day.activities.length} Activities
              Planned
            </h2>
          )}
        </div>
        <button
          type='button'
          className='flex items-center px-4 py-2.5 text-gray-100 bg-teal-600 h-1/2 rounded-3xl border-2 border-transparent hover:text-teal-600 hover:border-teal-600 hover:bg-transparent focus:ring-teal-600 focus:ring-1'
        >
          Add Activity
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            className='w-6 h-6 ml-2'
          >
            <path
              fillRule='evenodd'
              d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </header>
      {day &&
        day.activities &&
        day.activities.map((activity) => {
          return (
            <ItineraryDayActivities key={activity.id} activity={activity} />
          );
        })}
    </section>
  );
}
