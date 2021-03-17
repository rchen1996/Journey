import { useLocation, Link } from 'react-router-dom';
import { useState } from 'react';

import ItineraryDayActivities from './ItineraryDayActivities';
import DeleteConfirmation from '../DeleteConfirmation';

export default function ItineraryDays(props) {
  const { day, itinerary, user, deleteDayFromItinerary, days } = props;

  const { pathname } = useLocation();
  const getTimeValue = timeString => {
    const parsedTime = timeString || '23:59:59';
    const timeValue = new Date('1970-01-01T' + parsedTime + 'Z');
    return timeValue;
  };

  const sortActivities = activities => {
    const sortedActivities = activities.sort((a, b) => {
      return getTimeValue(a.start_time) - getTimeValue(b.start_time);
    });
    return sortedActivities;
  };

  const DEFAULT = 'DEFAULT';
  const DELETE = 'DELETE';
  const [view, setView] = useState(DEFAULT);

  const handleDelete = () => {
    deleteDayFromItinerary(itinerary.id, day.id).then(res => {
      if (res.error) console.log('error: ', res.error);
      // if (res.success) console.log('success: ', res.success);
    });
  };
  const addDays = (date, days) => {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  const isActivitiesZero =
    day.activities.length === 0 ? 'rounded-b-xl' : 'rounded-t-xl';

  return (
    <article className='mb-6 bg-gray-100 divide-y divide-gray-600 shadow-lg divide-opacity-25 rounded-xl last:mb-0'>
      <div
        className={
          view !== DELETE
            ? 'flex items-center justify-between px-4 pt-4 pb-2 rounded-xl'
            : 'flex items-center justify-between px-4 pt-4 pb-4 bg-gray-600 bg-opacity-75 ' +
              isActivitiesZero
        }
      >
        <div
          className={
            view !== DELETE
              ? 'mb-2 text-lg font-bold text-gray-100 w-min whitespace-nowrap space-x-2'
              : 'hidden'
          }
        >
          <span className='bg-teal-600 shadow-md px-4 py-1.5 rounded-xl'>
            Day{day.day_order}
          </span>
          <span className='font-medium text-gray-600'>
            {itinerary.start_date &&
              ` ${addDays(itinerary.start_date, day.day_order - 1)
                .toDateString()
                .substring(0, 10)}`}
          </span>
        </div>
        {pathname.includes('edit') &&
          itinerary.users.some(member => member.id === user.id) && (
            <div className='flex flex-wrap items-center space-x-3'>
              <div
                className={view === DELETE ? 'hidden' : 'flex space-x-4 mr-2'}
              >
                <Link
                  to={`/itineraries/${itinerary.id}/days/${day.id}/edit`}
                  className='w-5 h-5'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='w-5 h-5 duration-200 transform fill-current hover:text-teal-600 hover:scale-125'
                  >
                    <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                    <path
                      fillRule='evenodd'
                      d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                      clipRule='evenodd'
                    />
                  </svg>
                </Link>
                <button
                  type='button'
                  onClick={() => setView(DELETE)}
                  className='w-5 h-5'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='w-5 h-5 duration-200 transform fill-current hover:text-red-600 hover:scale-125'
                  >
                    <path
                      fillRule='evenodd'
                      d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
              </div>
              {view === DELETE && (
                <DeleteConfirmation
                  removeItem={handleDelete}
                  setView={setView}
                  DEFAULT={DEFAULT}
                  title={'Delete Day'}
                  message={
                    days.length > 1
                      ? 'Are you sure you want to delete this day?'
                      : 'There is only one day for this location. Are you sure you want to delete this section of the trip?'
                  }
                ></DeleteConfirmation>
              )}
            </div>
          )}
      </div>
      {day.activities &&
        sortActivities(day.activities).map(activity => {
          return (
            <ItineraryDayActivities key={activity.id} activity={activity} />
          );
        })}
    </article>
  );
}
