import { useParams } from 'react-router-dom';
import { SET_ITINERARY } from '../../reducers/application';
import { useState } from 'react';
import DeleteConfirmation from '../DeleteConfirmation';

export default function MyLocationsItem(props) {
  const {
    location,
    itinerary,
    updateActivityDay,
    dispatch,
    deleteActivity,
  } = props;

  const { day_id } = useParams();

  const DEFAULT = 'DEFAULT';
  const DELETE = 'DELETE';

  const [view, setView] = useState(DEFAULT);

  const addToDay = () => {
    updateActivityDay(location.activity_id, day_id, itinerary.id).then(res => {
      if (res.data.error) {
        // display error => must be logged in or don't have permissions because not part of travel party
      } else {
        dispatch({
          type: SET_ITINERARY,
          itinerary: { ...itinerary, ...res.data },
        });
      }
    });
  };

  const removeLocation = () => {
    deleteActivity(location.activity_id, itinerary.id).then(res => {
      if (res.data.error) {
        // display error => must be logged in or don't have permissions because not part of travel party
      } else {
        dispatch({
          type: SET_ITINERARY,
          itinerary: { ...itinerary, ...res.data },
        });
        setView(DEFAULT);
      }
    });
  };

  return (
    <div
      className={'z-0 flex flex-col w-full mt-4 rounded-xl'}
      style={{ backgroundImage: `url(${location.image})` }}
    >
      <div
        className={
          view === DELETE
            ? 'w-full transition bg-gray-500 shadow-lg xl:block rounded-xl'
            : 'w-full transition bg-gray-800 shadow-lg bg-opacity-80 xl:block rounded-xl hover:bg-gray-500 duration-300'
        }
      >
        <div className='flex flex-col items-start pl-2 m-4 border-l group-hover:border-l-0 group'>
          {view === DEFAULT && (
            <>
              <span className='font-bold leading-tight'>{location.name}</span>
              <p className='text-sm font-normal leading-tight text-gray-300 line-clamp-5'>
                {location.description}
              </p>
              <div className='relative items-center mt-2 space-x-2'>
                <button type='button' onClick={addToDay}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='w-5 h-5 text-gray-200 transition duration-300 transform hover:scale-110'
                    title='Add To Day'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
                <button type='button' onClick={() => setView(DELETE)}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='w-5 h-5 text-gray-200 transition duration-300 transform hover:scale-110'
                    title='Remove From My Locations'
                  >
                    <path
                      fillRule='evenodd'
                      d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
              </div>
            </>
          )}
          {view === DELETE && (
            <DeleteConfirmation
              title={'Delete Attraction'}
              message={
                'Are you sure you want to delete this attraction from My Locations?'
              }
              DEFAULT={DEFAULT}
              setView={setView}
              removeItem={removeLocation}
            ></DeleteConfirmation>
          )}
        </div>
      </div>
    </div>
  );
}
