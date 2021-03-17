import { useState } from 'react';
import AttractionSearch from './AttractionSearch';
import MyLocations from './MyLocations';

export default function ActivitiesRightNav(props) {
  const MY_LOCATIONS = 'MY_LOCATIONS';
  const ATTRACTION_SEARCH = 'ACTIVITIES_SEARCH';

  const { itinerary } = props;

  const [view, setView] = useState(MY_LOCATIONS);

  return (
    <nav className='mt-16 bg-gray-600 sm-w64'>
      <div className='sticky flex flex-col items-center w-full px-4 py-6 text-xl font-semibold text-gray-100 sm:block top-16'>
        <div className='mb-4'>
          <button
            type='button'
            onClick={() => setView(MY_LOCATIONS)}
            className='flex items-center justify-between p-4 sm:px-4 sm:py-2 hover:bg-gray-200 hover:bg-opacity-25 rounded-xl'
          >
            My Locations
          </button>
          <button
            type='button'
            onClick={() => setView(ATTRACTION_SEARCH)}
            className='flex items-center justify-between p-4 sm:px-4 sm:py-2 hover:bg-gray-200 hover:bg-opacity-25 rounded-xl'
          >
            Search for Attractions
          </button>
        </div>
      </div>
      {view === MY_LOCATIONS && itinerary && (
        <MyLocations itinerary={itinerary} />
      )}
      {view === ATTRACTION_SEARCH && itinerary && (
        <AttractionSearch itinerary={itinerary} />
      )}
    </nav>
  );
}
