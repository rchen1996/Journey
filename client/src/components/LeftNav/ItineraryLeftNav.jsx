import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { SET_ITINERARY } from '../../reducers/application';

export default function ItineraryLeftNav(props) {
  const [newLocation, setNewLocation] = useState('');
  const [dropDown, setDropDown] = useState({});
  const [itinerary, setItinerary] = useState({});

  const { dispatch, travelParty } = props;
  const { pathname } = useLocation();

  const { itinerary_id } = useParams();

  setItinerary(itinerary_id)

  function handleSubmit(event) {
    event.preventDefault();
    props.addLocation(newLocation);
    setNewLocation('');
    return;
  }

  const handleDropDown = (event) => {
    const targetId = event.target.id;
    setDropDown((prev) => {
      const isClassHidden =
        prev[targetId]?.dropClass === 'hidden' ||
        prev[targetId]?.dropClass === undefined;
      return {
        ...prev,
        [targetId]: {
          dropClass: isClassHidden ? 'flex flex-col space-y-2 pl-2' : 'hidden',
          svgClass: isClassHidden
            ? 'mr-2 transform duration-300 cursor-pointer pointer-events-none'
            : 'mr-2 transform duration-300 -rotate-90 cursor-pointer pointer-events-none',
        },
      };
    });
  };

  return (
    <nav className='flex flex-col w-64 h-full px-6 py-6 text-gray-100 bg-gray-600'>
      <Link
        to={`/itineraries/${itinerary.id}/`}
        className='mb-4 text-2xl font-bold'
      >
        {itinerary.name}
      </Link>
      {itinerary &&
        itinerary.locations &&
        itinerary.locations.map((locationObj, index) => {
          return (
            <div key={index} className='flex flex-col'>
              <div
                onClick={(event) => handleDropDown(event)}
                className='flex items-center justify-between px-4 py-2 my-2 cursor-pointer hover:bg-gray-200 hover:bg-opacity-25 rounded-xl'
                id={index}
              >
                <h4 className='text-xl font-bold pointer-events-none'>
                  {locationObj.name}
                </h4>

                <svg
                  width='14'
                  height='14'
                  viewBox='0 0 14 11'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className={
                    dropDown[index]?.svgClass ||
                    'mr-2 transform duration-300 -rotate-90 cursor-pointer pointer-events-none'
                  }
                >
                  <path
                    d='M7.86603 10.5001C7.48112 11.1667 6.51887 11.1667 6.13397 10.5001L0.937822 1.50006C0.552922 0.833392 1.03405 5.98142e-05 1.80385 5.98815e-05L12.1962 6.079e-05C12.966 6.08573e-05 13.4471 0.833394 13.0622 1.50006L7.86603 10.5001Z'
                    fill='#F4F4F5'
                  />
                </svg>
              </div>
              <div className={dropDown[index]?.dropClass || 'hidden'}>
                {locationObj.days.map((day) => {
                  return (
                    <NavLink
                      to={`/itineraries/${itinerary.id}/days/${day.day_order}`}
                      key={day.id}
                      activeClassName='bg-gray-200 bg-opacity-25'
                      className='px-4 py-2 hover:bg-gray-200 hover:bg-opacity-25 rounded-xl'
                    >
                      Day {day.day_order}
                    </NavLink>
                  );
                })}
              </div>
            </div>
          );
        })}
      {pathname.includes('edit') ? (
        <div>
          <button> Add Location </button>
          <form onSubmit={handleSubmit}>
            <input
              value={newLocation}
              name='add-location'
              onChange={(event) => setNewLocation(event.target.value)}
              type='text'
            />
          </form>

          <div>
            <NavLink to={`/itineraries/${itinerary.id}/collaborators`}>
              My Group{' '}
            </NavLink>
          </div>
        </div>
      ) : (
        props.user.id === itinerary.creator_id && (
          <Link to={`/itineraries/${itinerary.id}/edit`}>Edit</Link>
        )
      )}
    </nav>
  );
}
