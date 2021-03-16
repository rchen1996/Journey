import { useLocation, Link } from 'react-router-dom';
import { useState } from 'react';

import ItineraryDayActivities from './ItineraryDayActivities';

export default function ItineraryDays(props) {
  const { day, itinerary, user, deleteDayFromItinerary } = props;

  const { pathname } = useLocation();

  const DEFAULT = 'DEFAULT';
  const DELETE = 'DELETE';
  const [view, setView] = useState(DEFAULT);

  const handleDelete = () => {
    deleteDayFromItinerary(itinerary.id, day.id).then(res => {
      if (res.error) console.log('error: ', res.error);
      // if (res.success) console.log('success: ', res.success);
    });
  };

  return (
    <article className='py-4 mb-6 bg-gray-100 divide-y divide-gray-600 shadow-lg divide-opacity-25 rounded-xl'>
      <div className='flex items-center justify-between px-4 pb-2'>
        <h2 className='px-4 py-1.5 mb-2 text-lg font-bold text-gray-100 bg-teal-600 shadow-md w-min whitespace-nowrap rounded-2xl'>
          Day {day.day_order}
        </h2>
        {pathname.includes('edit') &&
          itinerary.users.some(member => member.id === user.id) && (
            <div className='flex items-center justify-center space-x-3'>
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
                <div className='flex p-2 space-x-8 bg-gray-700 bg-opacity-90 rounded-xl'>
                  <h4 className='px-2 py-2 text-base font-bold text-gray-100 shadow-md whitespace-nowrap lg:text-base'>
                    Delete This Day?
                  </h4>
                  <div className='flex space-x-4'>
                    <button
                      type='button'
                      onClick={() => setView(DEFAULT)}
                      className='px-2 font-semibold leading-none text-gray-200 transition duration-300 transform bg-teal-600 border-2 border-transparent focus:ring-1 focus:ring-teal-600 hover:scale-110 rounded-xl'
                    >
                      Cancel
                    </button>
                    <button
                      type='button'
                      onClick={handleDelete}
                      className='px-2 font-semibold leading-none text-gray-200 transition duration-300 transform bg-red-600 border-2 border-transparent bg-opacity-90 focus:ring-1 focus:ring-red-600 hover:scale-110 rounded-xl'
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
      </div>
      {day.activities &&
        day.activities.map(activity => {
          return (
            <ItineraryDayActivities key={activity.id} activity={activity} />
          );
        })}
    </article>
  );
}
