import React, { useEffect } from 'react';
import { SET_ITINERARY } from '../../reducers/application';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ItineraryDays from './ItineraryDays';

export default function Itinerary(props) {
  const { itinerary_id } = useParams();
  const { dispatch, itinerary } = props;

  useEffect(() => {
    axios.get(`/api/itineraries/${itinerary_id}`).then(res => {
      dispatch({
        type: SET_ITINERARY,
        itinerary: res.data,
      });
    });
  }, [itinerary_id, dispatch]);

  return (
    <section className="flex flex-col w-full h-full mx-24 my-8">
      {itinerary &&
        itinerary.locations &&
        itinerary.locations.map(location => {
          return (
            <div key={location.id}>
              <h2 className="mb-4 ml-2 text-3xl font-bold">{location.name}</h2>
              {location.days &&
                location.days.map(day => {
                  return <ItineraryDays key={day.id} day={day} />;
                })}
            </div>
          );
        })}
    </section>
  );
}
