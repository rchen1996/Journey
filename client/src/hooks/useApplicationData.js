import { useEffect, useReducer } from 'react';
import dataReducer, {
  SET_ALL_ITINERARIES,
  SET_USER,
  SET_MY_ITINERARIES,
} from '../reducers/application';
import axios from 'axios';

export default function useApplicationData() {
  const [state, dispatch] = useReducer(dataReducer, {
    user: {},
    itineraries: [],
    itinerary: null,
    myItineraries: [],
  });

  useEffect(() => {
    axios.get(`/api/users/${state.user.id}`).then(res => {
      const user = res.data[0];
      if (res.data.length > 0) {
        dispatch({
          type: SET_USER,
          user: user,
        });
      }
    });
  }, [state.user.id]);

  const login = function (email, password) {
    const user = {
      email: email,
      password: password,
    };

    return axios.post('/api/users/login', user);
  };

  const logout = () => {
    return axios.post(`/api/users/logout`).then(() => {
      dispatch({
        type: SET_USER,
        user: {},
      });
    });
  };

  const register = function (first_name, last_name, email, password) {
    return axios.post(`/api/users/`, {
      first_name,
      last_name,
      email,
      password,
    });
  };

  useEffect(() => {
    return axios.get('/api/itineraries').then(res => {
      const itineraries = res.data;
      dispatch({
        type: SET_ALL_ITINERARIES,
        itineraries: itineraries,
      });
    });
  }, [state.itinerary]);

  const createItinerary = function (itinerary) {
    return axios.post('/api/itineraries', itinerary);
  };

  useEffect(() => {
    axios.get('/api/users/:user_id/itineraries').then(res => {
      const myItineraries = res.data;

      if (myItineraries.length > 0) {
        dispatch({
          type: SET_MY_ITINERARIES,
          myItineraries: myItineraries,
        });
      }
    });
  }, []);

  return {
    state,
    dispatch,
    login,
    register,
    logout,
    createItinerary,
  };
}
