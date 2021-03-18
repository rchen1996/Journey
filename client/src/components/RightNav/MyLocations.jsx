import MyLocationsItem from './MyLocationsItem';

export default function MyLocations(props) {
  const { itinerary, updateActivityDay, dispatch } = props;

  const myLocations = itinerary.my_locations;

  const parsedMyLocations =
    Array.isArray(myLocations) &&
    myLocations.map((location, index) => {
      return (
        <MyLocationsItem
          key={index}
          location={location}
          itinerary={itinerary}
          updateActivityDay={updateActivityDay}
          dispatch={dispatch}
        />
      );
    });

  return (
    <div className='w-full'>
      {parsedMyLocations.length !== 0 ? (
        parsedMyLocations
      ) : (
        <div className='flex items-center w-full p-4 mt-2 space-x-2 text-xl font-semibold sm:px-2 sm:py-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            className='w-5 h-5'
          >
            <path
              fillRule='evenodd'
              d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
              clipRule='evenodd'
            />
          </svg>
          <span>No Locations</span>
        </div>
      )}
    </div>
  );
}
