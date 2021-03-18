import { useParams } from 'react-router-dom';
import { SET_ITINERARY } from '../../reducers/application';

export default function MyLocationsItem(props) {
  const { location, itinerary, updateActivityDay, dispatch } = props;

  const { day_id } = useParams();

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
    // delete the activity given an activity id
  };

  return (
    <div
      className='z-0 flex flex-col w-full mt-4 rounded-xl group'
      style={{ backgroundImage: `url(${location.image})` }}
    >
      <div className='w-full transition bg-gray-800 shadow-lg bg-opacity-80 xl:block rounded-xl group-hover:bg-gray-100 group'>
        <div className='flex flex-col items-start pl-2 m-4 border-l group-hover:border-l-0'>
          <span className='font-bold leading-tight group-hover:hidden'>
            {location.name}
          </span>
          <p className='text-sm font-normal leading-tight text-gray-300 group-hover:hidden'>
            {location.description}
          </p>
          <div className='relative hidden group-hover:flex'>
            <button type='button' onClick={addToDay}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='w-8 h-8 text-gray-600'
              >
                <path
                  fillRule='evenodd'
                  d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
            <button type='button' onClick={removeLocation}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='w-6 h-6 text-gray-600'
              >
                <path
                  fillRule='evenodd'
                  d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
