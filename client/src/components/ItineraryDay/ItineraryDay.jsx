import { useParams, Link, useLocation, useHistory } from 'react-router-dom';
import { useState } from 'react';

import ItineraryDayActivities from './ItineraryDayActivities';

export default function ItineraryDay(props) {
  const { itinerary_id, day_id } = useParams();

  const {
    itinerary,
    deleteDayFromItinerary,
    deleteActivity,
    editActivity,
  } = props;

  const url = useLocation().pathname;

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
          if (day.id === Number(day_id)) {
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

  const getTimeValue = (timeString) => {
    const parsedTime = timeString || '23:59:59';
    const timeValue = new Date('1970-01-01T' + parsedTime + 'Z');
    return timeValue;
  };

  const sortActivities = (activities) => {
    const sortedActivities = activities.sort((a, b) => {
      return getTimeValue(a.start_time) - getTimeValue(b.start_time);
    });
    return sortedActivities;
  };

  const DEFAULT = 'DEFAULT';
  const DELETE = 'DELETE';
  const history = useHistory();

  const [view, setView] = useState(DEFAULT);

  const handleDelete = () => {
    deleteDayFromItinerary(itinerary_id, day_id).then((res) => {
      if (res.error) {
        console.log(res.error);
      } else {
        history.push(`/itineraries/${itinerary_id}/edit`);
      }
    });
  };

  const activitiesTimeSlots = [];
  if (day && day.activities) {
    day.activities.forEach((activity) => {
      if (activity.start_time) {
        activitiesTimeSlots.push({
          activity_id: activity.id,
          start_time: activity.start_time,
          end_time: activity.end_time,
        });
      }
    });
  }

  return (
    <div className='flex w-full mt-16 lg:ml-64'>
      <section className='flex flex-col justify-start w-5/6 h-full mx-auto my-8 mt-8 space-y-4'>
        <header className='flex items-center justify-between'>
          <div
            className={
              view !== DELETE
                ? 'flex flex-col px-8 py-2 bg-gray-100 border-l-8 border-gray-600 shadow-md rounded-r-xl'
                : 'flex flex-col px-8 py-2 bg-gray-700 border-gray-600 shadow-md rounded-xl bg-opacity-70 items-center justify-center'
            }
          >
            <div className='flex items-center'>
              {view !== DELETE && (
                <h1 className='text-3xl font-bold'>
                  Day {day && day.day_order}: {location && location.name}
                </h1>
              )}
              {view === DELETE && (
                <h1 className='text-xl font-bold text-gray-200'>
                  Delete This Day?
                </h1>
              )}
              {url.includes('edit') && (
                <>
                  {view === DEFAULT && (
                    <button
                      type='button'
                      onClick={() => setView(DELETE)}
                      className='ml-4'
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
                  )}
                </>
              )}
            </div>
            {day &&
              day.activities &&
              day.activities.length === 1 &&
              view !== DELETE && <h2>1 Activity Planned</h2>}
            {day &&
              day.activities &&
              day.activities.length !== 1 &&
              view !== DELETE && (
                <h2>
                  {day && day.activities && day.activities.length} Activities
                  Planned
                </h2>
              )}

            {view === DELETE && (
              <div className='flex justify-center mt-2 space-x-3'>
                <button
                  type='button'
                  onClick={() => setView(DEFAULT)}
                  className='px-3 font-semibold text-gray-200 bg-teal-600 rounded-xl'
                >
                  Cancel
                </button>
                <button
                  type='button'
                  onClick={handleDelete}
                  className='px-3 font-semibold text-gray-200 bg-red-600 rounded-xl bg-opacity-80'
                >
                  Confirm
                </button>
              </div>
            )}
          </div>
          {url.includes('edit') && (
            <Link
              to={`/itineraries/${itinerary_id}/days/${day_id}/activities/new`}
              type='button'
              className='flex items-center px-4 py-2.5 text-gray-100 bg-teal-600 h-1/2 rounded-3xl border-2 border-transparent hover:text-teal-600 hover:border-teal-600 hover:bg-transparent focus:ring-teal-600 focus:ring-1'
              day={dayInfo}
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
            </Link>
          )}
        </header>
        {day &&
          day.activities &&
          sortActivities(day.activities).map((activity) => {
            return (
              <ItineraryDayActivities
                key={activity.id}
                activity={activity}
                deleteActivity={deleteActivity}
                editActivity={editActivity}
                timeSlots={activitiesTimeSlots}
              />
            );
          })}
      </section>
    </div>
  );
}
