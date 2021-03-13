import React, { useEffect } from 'react';
import { SET_ITINERARY } from '../reducers/application';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Itinerary(props) {
  const { itinerary_id } = useParams();
  useEffect(() => {
    axios.get(`/api/itineraries/${itinerary_id}`).then((res) => {
      props.dispatch({
        type: SET_ITINERARY,
        itinerary: res.data,
      });
    });
  }, []);

  return <div></div>;
}
