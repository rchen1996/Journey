import React, { useEffect } from 'react';
import { SET_ITINERARY } from '../reducers/application';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Itinerary(props) {
  const { itinerary_id } = useParams();
  const { dispatch } = props;
  useEffect(() => {
    axios.get(`/api/itineraries/${itinerary_id}`).then((res) => {
      dispatch({
        type: SET_ITINERARY,
        itinerary: res.data,
      });
    });
  }, [itinerary_id, dispatch]);

  return <div></div>;
}
