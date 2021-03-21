import { useState } from 'react';
import AttractionSearch from './AttractionSearch';
import MyLocations from './MyLocations';

export default function ActivitiesRightNav(props) {
  const MY_LOCATIONS = 'MY_LOCATIONS';
  const ATTRACTION_SEARCH = 'ACTIVITIES_SEARCH';

  const {
    itinerary,
    searchAttractions,
    dispatch,
    addMyLocation,
    createActivity,
    updateActivityDay,
    deleteActivity,
    updateSidebar,
    sideBarState,
  } = props;

  const [view, setView] = useState(MY_LOCATIONS);

  return (
    <div className='w-full bg-gray-600'>
      <div className='flex items-center w-full px-3 pb-2 space-x-3 border-b border-gray-100 border-opacity-50'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          className={'h-6 w-6 cursor-pointer'}
          onClick={() =>
            updateSidebar(
              !sideBarState.rightNav.userCollapsed,
              !sideBarState.rightNav.collapsed,
              null,
              null
            )
          }
        >
          <path
            fillRule='evenodd'
            d='M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z'
            clipRule='evenodd'
          />
        </svg>
        <h1
          className={
            sideBarState.rightNav.collapsed ? 'hidden' : 'text-xl font-bold'
          }
        >
          Attractions
        </h1>
      </div>
      <div className='flex flex-col divide-y divide-gray-100 divide-opacity-50'>
        <div className={'flex-shrink-0'}>
          <div
            className={
              view === MY_LOCATIONS
                ? 'mb-2 flex items-center p-4 text-lg font-bold sm:px-3 sm:py-1 bg-gray-200 bg-opacity-25 rounded-xl cursor-pointer mt-2'
                : 'mb-2 flex items-center p-4 text-lg font-bold sm:px-3 sm:py-1 hover:bg-gray-200 hover:bg-opacity-25 rounded-xl cursor-pointer mt-2'
            }
            type='button'
            onClick={() => setView(MY_LOCATIONS)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='flex-shrink-0 w-5 h-5 mr-2'
            >
              <path
                fillRule='evenodd'
                d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                clipRule='evenodd'
              />
            </svg>
            <span>My Locations</span>
          </div>
          <div
            className={
              view === ATTRACTION_SEARCH
                ? 'mb-2 flex items-center p-4 text-lg font-bold sm:px-3 sm:py-1 bg-gray-200 bg-opacity-25 rounded-xl cursor-pointer mt-2'
                : 'mb-2 flex items-center p-4 text-lg font-bold sm:px-3 sm:py-1 hover:bg-gray-200 hover:bg-opacity-25 rounded-xl cursor-pointer mt-2'
            }
            type='button'
            onClick={() => setView(ATTRACTION_SEARCH)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='flex-shrink-0 w-5 h-5 mr-2'
            >
              <path d='M9 9a2 2 0 114 0 2 2 0 01-4 0z' />
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z'
                clipRule='evenodd'
              />
            </svg>
            <span className=''>Find Places</span>
          </div>
        </div>
        {view === MY_LOCATIONS && itinerary && (
          <MyLocations
            itinerary={itinerary}
            updateActivityDay={updateActivityDay}
            dispatch={dispatch}
            deleteActivity={deleteActivity}
          />
        )}
        {view === ATTRACTION_SEARCH && itinerary && (
          <AttractionSearch
            itinerary={itinerary}
            dispatch={dispatch}
            searchAttractions={searchAttractions}
            addMyLocation={addMyLocation}
            createActivity={createActivity}
          />
        )}
      </div>
    </div>
  );
}
