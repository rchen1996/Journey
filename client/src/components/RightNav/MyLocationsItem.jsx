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
      className='z-0 flex flex-col w-full mt-4 rounded-xl module'
      style={{ backgroundImage: `url(${location.image})` }}
    >
      <div className='w-full transition bg-gray-800 shadow-lg bg-opacity-80 xl:block rounded-xl module-inside group-hover:bg-gray-100'>
        <div className='flex flex-col items-start pl-2 m-4 border-l group-hover:invisible'>
          <span className='font-bold leading-tight'>{location.name}</span>
          <p className='text-sm font-normal leading-tight text-gray-300'>
            {location.description}
          </p>
        </div>

        <div>
          <button type='button' onClick={addToDay}>
            Add to Day
          </button>
          <button type='button' onClick={removeLocation}>
            Delete from My Locations
          </button>
        </div>
      </div>
    </div>
  );
}
