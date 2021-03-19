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
  } = props;

  const [view, setView] = useState(MY_LOCATIONS);
  const [dropDown, setDropDown] = useState({
    menuTitle: 'My Locations',
    subMenuTitle: 'Find Places',
    subMenuOpen: false,
  });

  const handleDropDown = () => {
    setDropDown(prev => {
      return {
        ...prev,
        subMenuOpen: prev.subMenuOpen ? false : true,
      };
    });
  };

  const updateMenuViewInfo = () => {
    if (dropDown.menuTitle === 'My Locations') {
      setView(ATTRACTION_SEARCH);
      setDropDown(prev => {
        return {
          ...prev,
          menuTitle: 'Find Places',
          subMenuTitle: 'My Locations',
          subMenuOpen: prev.subMenuOpen ? false : true,
        };
      });
    } else {
      setView(MY_LOCATIONS);
      setDropDown(prev => {
        return {
          ...prev,
          menuTitle: 'My Locations',
          subMenuTitle: 'Find Places',
          subMenuOpen: prev.subMenuOpen ? false : true,
        };
      });
    }
  };

  return (
    <div className='w-full bg-gray-600'>
      <div className='divide-y divide-gray-500 divide-opacity-50'>
        <div className={dropDown.subMenuOpen ? 'block' : 'mb-4'}>
          <div
            className='flex items-center justify-between w-full p-4 text-xl font-bold bg-gray-200 bg-opacity-25 cursor-pointer sm:px-3 sm:py-2 rounded-xl'
            type='button'
            onClick={handleDropDown}
          >
            <span className=''>{dropDown.menuTitle}</span>
            <svg
              width='14'
              height='14'
              viewBox='0 0 14 11'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className={
                dropDown.subMenuOpen
                  ? 'transform duration-300 -rotate-0 cursor-pointer pointer-events-none mr-1'
                  : 'transform duration-300 -rotate-90 cursor-pointer pointer-events-none mr-1'
              }
            >
              <path
                d='M7.86603 10.5001C7.48112 11.1667 6.51887 11.1667 6.13397 10.5001L0.937822 1.50006C0.552922 0.833392 1.03405 5.98142e-05 1.80385 5.98815e-05L12.1962 6.079e-05C12.966 6.08573e-05 13.4471 0.833394 13.0622 1.50006L7.86603 10.5001Z'
                fill='#F4F4F5'
              />
            </svg>
          </div>
          <div
            type='button'
            onClick={updateMenuViewInfo}
            className={
              dropDown.subMenuOpen
                ? 'mb-2 flex items-center justify-between w-full p-4 text-xl font-bold sm:px-3 sm:py-2 hover:bg-gray-200 hover:bg-opacity-25 rounded-xl cursor-pointer mt-2'
                : 'hidden'
            }
          >
            {dropDown.subMenuTitle}
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
