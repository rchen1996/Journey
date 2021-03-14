import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { SET_ITINERARY } from '../../reducers/application';

export default function ItineraryLeftNav(props) {
  const [newLocation, setNewLocation] = useState('');
  const [itinerary, setItinerary] = useState({});

  const { dispatch } = props;
  const { pathname } = useLocation();

  const { itinerary_id } = useParams();

  useEffect(() => {
    axios.get(`/api/itineraries/${itinerary_id}`).then(res => {
      dispatch({
        type: SET_ITINERARY,
        itinerary: res.data,
      });

      setItinerary(res.data);
    });
  }, [itinerary_id, dispatch]);

  function handleSubmit(event) {
    event.preventDefault();
    props.addLocation(newLocation);
    setNewLocation('');
    return;
  }

  return (
    <nav className="flex flex-col w-64 h-full px-4 py-6 space-y-4 text-gray-100 bg-gray-600">
      <h1 className="text-xl font-bold">{itinerary.name}</h1>
      {itinerary &&
        itinerary.locations &&
        itinerary.locations.map((locationObj, index) => {
          return (
            <div className="flex items-center justify-between">
              <details key={index} className="flex flex-col">
                <summary>{locationObj.name}</summary>
                {locationObj.days.map(day => {
                  return (
                    <Link
                      to={`/itineraries/${itinerary.id}/days/${day.day_order}`}
                      key={day.id}
                    >
                      Day {day.day_order}
                    </Link>
                  );
                })}
              </details>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="11"
                fill="currentColor"
              >
                <path
                  fill="#F4F4F5"
                  d="M7.866 10.5a1 1 0 01-1.732 0l-5.196-9A1 1 0 011.804 0h10.392a1 1 0 01.866 1.5l-5.196 9z"
                ></path>
              </svg>
            </div>
          );
        })}
      {pathname.includes('edit') ? (
        <>
          <button> Add Location </button>
          <form onSubmit={handleSubmit}>
            <input
              value={newLocation}
              name="add-location"
              onChange={event => setNewLocation(event.target.value)}
              type="text"
            />
          </form>

          <div>
            <NavLink to={`/itineraries/${itinerary.id}/collaborators`}>
              My Group{' '}
            </NavLink>
          </div>
        </>
      ) : (
        props.user.id === itinerary.creator_id && (
          <Link to={`/itineraries/${itinerary.id}/edit`}>Edit</Link>
        )
      )}
    </nav>
  );
}
