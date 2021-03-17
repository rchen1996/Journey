import { useState } from 'react';
import AttractionSearch from './AttractionSearch';
import MyLocations from './MyLocations';

export default function ActivitiesRightNav(props) {
  const MY_LOCATIONS = 'MY_LOCATIONS';
  const ATTRACTION_SEARCH = 'ACTIVITIES_SEARCH';

  const { itinerary } = props;

  const [view, setView] = useState(MY_LOCATIONS);

  return (
    <div className='w-64 min-h-full mt-16 bg-gray-600'>
      <div className='fixed z-40 w-full h-full px-6 py-4 pb-24 overflow-y-scroll text-gray-100 lg:w-64 md:w-full no-scrollbar lg:block '>
        <div className='mb-4'>
          <button
            type='button'
            onClick={() => setView(MY_LOCATIONS)}
            className='flex items-center justify-between w-full p-4 text-2xl font-bold sm:px-4 sm:py-2 hover:bg-gray-200 hover:bg-opacity-25 rounded-xl'
          >
            My Locations
          </button>
          <button
            type='button'
            onClick={() => setView(ATTRACTION_SEARCH)}
            className='flex items-center justify-between w-full p-4 text-2xl font-bold sm:px-4 sm:py-2 hover:bg-gray-200 hover:bg-opacity-25 rounded-xl'
          >
            Find Places
          </button>
        </div>
        {view === MY_LOCATIONS && itinerary && (
          <MyLocations itinerary={itinerary} />
        )}
        {view === ATTRACTION_SEARCH && <AttractionSearch />}
      </div>
    </div>
  );
}
