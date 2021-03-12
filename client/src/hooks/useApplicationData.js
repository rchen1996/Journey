import { useEffect, useReducer } from 'react';
import dataReducer, {
  SET_ALL_ITINERARIES,
  SET_USER,
} from '../reducers/application';
import axios from 'axios';

export default function useApplicationData() {
  const [state, dispatch] = useReducer(dataReducer, {
    user: {},
    itineraries: [],
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

  const getItineraries = function () {
    return axios.get('/api/itineraries').then(itineraries => {
      dispatch({
        type: SET_ALL_ITINERARIES,
        action: itineraries,
      });
    });
  };

  return {
    state,
    dispatch,
    login,
    register,
    logout,
    getItineraries,
  };
}
