import { useEffect, useReducer } from 'react';
import dataReducer, { SET_USERS } from '../reducers/application';
import axios from 'axios';

export default function useApplicationData() {
  const [state, dispatch] = useReducer(dataReducer, {
    users: [],
    loading: true,
  });
  useEffect(() => {
    axios({
      method: 'GET',
      url: '/api/users',
    })
      .then(({ data }) => {
        console.log(data);
        dispatch({
          type: SET_USERS,
          users: data,
        });
      })
      .catch(err => console.log(err));
  }, []);

  const login = function (email, password) {
    const user = {
      email: email,
      password: password,
    };

    return axios.post('/api/users/login', user);
  };
  function register(first_name, last_name, email, password) {
    return axios.post(`/api/users/`, {
      first_name,
      last_name,
      email,
      password,
    });
  }

  return {
    state,
    dispatch,
    login,
    register,
  };
}
