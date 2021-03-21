import { useLocation } from 'react-router-dom';
import ActivitiesRightNav from './ActivitiesRightNav';

export default function RightNav(props) {
  const {
    itinerary,
    updateSidebar,
    sideBarState,
    dispatch,
    searchAttractions,
    addMyLocation,
    createActivity,
    updateActivityDay,
    deleteActivity,
  } = props;

  const url = useLocation().pathname;
  if (url.includes('edit')) {
    return (
      <nav
        className={
          url.includes('edit') && sideBarState.rightNav.collapsed
            ? 'w-16 text-gray-100 bg-gray-600 h-full mt-16 fixed -right-0'
            : 'fixed -right-0 bg-gray-600 z-40 w-full h-full px-4 py-4 pb-24 space-y-2 overflow-y-scroll mt-16 text-gray-100 divide-y divide-gray-100 lg:w-64 xl:w-80 no-scrollbar lg:block divide-opacity-50'
        }
      >
        {url.includes('edit') && sideBarState.rightNav.collapsed && (
          <div className='flex items-center justify-center w-full px-3 pb-1 mt-4 space-x-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className={'w-6 h-6 cursor-pointer transform rotate-180 mr-1'}
              onClick={() =>
                props.updateSidebar(
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
          </div>
        )}
        {url.includes('edit') && !sideBarState.rightNav.collapsed && (
          <ActivitiesRightNav
            itinerary={itinerary}
            dispatch={dispatch}
            searchAttractions={searchAttractions}
            addMyLocation={addMyLocation}
            createActivity={createActivity}
            updateActivityDay={updateActivityDay}
            deleteActivity={deleteActivity}
            updateSidebar={updateSidebar}
            sideBarState={sideBarState}
          />
        )}
      </nav>
    );
  } else {
    return <nav className='hidden'></nav>;
  }
}
